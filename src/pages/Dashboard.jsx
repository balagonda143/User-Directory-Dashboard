import React, { useEffect, useState } from "react";
import { getUsers } from "../services/api";
import UserTable from "../components/UserTable";
import SearchBar from "../components/SearchBar";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getUsers().then((res) => setUsers(res.data));
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h2>User Directory</h2>
      <SearchBar setSearch={setSearch} />
      <UserTable users={filteredUsers} />
    </div>
  );
};

export default Dashboard;