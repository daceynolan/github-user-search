import React, { useState, useEffect, useCallback } from "react";

import CenteringLayout from "components/CenteringLayout";
import Paginate from "components/Paginate";
import SearchBar from "components/SearchBar";
import UserCard from "components/UserCard";

const per_page = 9;

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchUsers = useCallback(async () => {
    const response = await fetch(
      `https://api.github.com/search/users?q=${searchTerm}&per_page=${per_page}&page=${page}`
    );
    const data = await response.json();

    setUsers(data.items);
    // Calculated page count since GitHub API does not give total page count
    setTotalPages(Math.ceil(data.total_count / per_page));
  }, [searchTerm, page]);

  //try catch block for the errors
  useEffect(() => {
    fetchUsers();
  }, [page, searchTerm, fetchUsers]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setPage(1);
  };

  return (
    <>
      <SearchBar onFormSubmit={handleSearch} />
      <CenteringLayout>
        {!users && <div>Please search for a user</div>}
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {users?.map((user) => {
            return <UserCard key={user.id} user={user} />;
          })}
        </div>
      </CenteringLayout>
      <div className="flex justify-center mb-4">
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
