import React, { useState, useEffect, useCallback } from "react";

import CenteringLayout from "components/CenteringLayout";
import Paginate from "components/Paginate";
import SearchBar from "components/SearchBar";
import UserCard from "components/UserCard";

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  const fetchUsers = useCallback(async () => {
    const response = await fetch(
      `https://api.github.com/search/users?q=${searchTerm}&per_page=6&page=${page}`
    );
    const data = await response.json();

    setUsers(data.items);
  }, [searchTerm, page]);

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
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {users?.map((user) => {
            return <UserCard key={user.id} user={user} />;
          })}
        </div>
      </CenteringLayout>
      {/* <Paginate
        // React-paginate is 0 indexed, so subtract 1
        forcePage={page - 1}
        pageCount={resolvedData?.meta.totalPages}
        onPageChange={(selectedItem) => {
          // increment page number since it is 0 indexed
          const page = selectedItem.selected + 1;
          setSearchParams({ page });
        }}
      /> */}
    </>
  );
};

export default App;
