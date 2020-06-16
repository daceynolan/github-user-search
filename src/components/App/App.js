import React, { useState } from "react";

import SearchBar from "components/SearchBar";
import github from "APIS/GitHub";

const App = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async (term) => {
    const response = await github.get(`/search/users?q=${term}`);
    setUsers(response.data.items);
  };

  return (
    <>
      <SearchBar onFormSubmit={fetchUsers} />

      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {users.map((user) => {
          return <div key={user.id}>{user.login}</div>;
        })}
      </div>
    </>
  );
};

export default App;

//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     setIsLoading(true);
//     fetchUsers(users)
//       .then((response) => {
//         setUsers(response.data.data);
//       })
//       .finally(() => {
//         setIsLoading(false);
//       });
//   }, []);
