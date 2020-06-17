import React, { useState, useEffect, useCallback } from "react";

import Banner from "components/Banner";
import CenteringLayout from "components/CenteringLayout";
import Paginate from "components/Paginate";
import UserCard from "components/UserCard";
import GithubLink from "components/GitHubLink";
import { User } from "types";

const PER_PAGE = 8;
//Github's API only returns the first 1000 results
const MAX_RESULTS = 1000;

const App: React.FunctionComponent = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const fetchUsers = useCallback(async () => {
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
  }, [searchTerm, page]);

  useEffect(() => {
    fetchUsers();
  }, [page, searchTerm, fetchUsers]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setPage(1);
  };

  return (
    <>
      <GithubLink />
      <Banner onFormSubmit={handleSearch} />
      <div className="flex justify-around items-center pt-6">
        {users && (
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
      <CenteringLayout>
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {users?.map((user: User) => {
            return <UserCard key={user.id} user={user} />;
          })}
        </div>
      </CenteringLayout>
      <div className="flex justify-around items-center mb-8">
        {users && (
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
  );
};

export default App;
