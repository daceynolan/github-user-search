import React, { useState, useEffect, useCallback } from "react";

import SearchBar from "components/SearchBar";
import CenteringLayout from "components/CenteringLayout";
import GithubLink from "components/GitHubLink";
import Loader from "components/Loader";
import Paginate from "components/Paginate";
import UserCard from "components/UserCard";
import octocat from "images/octocat.png";
import { User } from "types";

const PER_PAGE = 8;
//Github's API only returns the first 1000 results
const MAX_RESULTS = 1000;

const App: React.FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasErrors, setHasErrors] = useState(false);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    try {
      setIsLoading(true);
      setHasErrors(false);
      const response = await fetch(
        `https://api.github.com/search/users?q=${searchTerm}&per_page=${PER_PAGE}&page=${page}`
      );
      const data = await response.json();
      setUsers(data.items);
      // Calculated page count since GitHub API does not give total page count
      const pages = Math.ceil(data.total_count / PER_PAGE);

      setTotalCount(
        data.total_count <= MAX_RESULTS ? data.total_count : MAX_RESULTS
      );
      const maxPages = Math.floor(MAX_RESULTS / PER_PAGE);
      setTotalPages(pages > maxPages ? maxPages : pages);
    } catch {
      setHasErrors(true);
    } finally {
      setIsLoading(false);
    }
  }, [searchTerm, page]);

  useEffect(() => {
    if (searchTerm) {
      fetchUsers();
    }
  }, [page, searchTerm, fetchUsers]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setPage(1);
  };

  return (
    <>
      <GithubLink />
      <div className="flex flex-col items-center p-8 bg-gray-300 ">
        <img className="w-32 mb-4" src={octocat} alt="GitHub logo" />
        <SearchBar onFormSubmit={handleSearch} />
      </div>
      {isLoading && (
        <CenteringLayout>
          <Loader />
        </CenteringLayout>
      )}
      {hasErrors && (
        <CenteringLayout>
          <div className="py-16 flex font-bold max-w-xs text-3xl mb-2 text-gray-400 text-center items-center">
            There was a problem fetching you results. Please try again.
          </div>
        </CenteringLayout>
      )}
      {!isLoading && !hasErrors && !users?.length && (
        <CenteringLayout>
          <div className="py-16 flex font-bold max-w-xs text-3xl mb-2 text-gray-400 text-center items-center">
            Please enter in a name to begin your search.
          </div>
        </CenteringLayout>
      )}
      {!!users?.length && (
        <>
          <CenteringLayout>
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {users?.map((user: User) => {
                return <UserCard key={user.id} user={user} />;
              })}
            </div>
          </CenteringLayout>
          <div className="flex justify-around items-center mb-8">
            {!!users.length && (
              <div className="text-gray-600 font-semibold">
                Results: {totalCount}
              </div>
            )}
            {totalPages > 1 && (
              <Paginate
                // React-paginate is 0 indexed, so subtract 1
                forcePage={page - 1}
                pageCount={totalPages}
                onPageChange={(selectedItem) => {
                  // increment page number since it is 0 indexed
                  const page = selectedItem.selected + 1;
                  setPage(page);
                }}
              />
            )}
          </div>
        </>
      )}
    </>
  );
};

export default App;
