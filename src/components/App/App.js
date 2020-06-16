import React, { useState, useEffect } from "react";

import SearchBar from "components/SearchBar";
import ghapi from "APIS/GitHub";

const fetchUsers = ({ user }) => {
  return ghapi.get(`/search/users?q=${user}`);
};

function App() {
  //pass user information to App
  const [users, setUsers] = useState([]);

  //create loader
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!user) return;
    setIsLoading(true);
    fetchUsers(user)
      .then((response) => {
        setUsers(response.data.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <SearchBar />
    </div>
  );
}

export default App;
