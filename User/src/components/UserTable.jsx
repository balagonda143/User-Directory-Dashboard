import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserTable = ({ users }) => {
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortedUsers, setSortedUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setSortedUsers(users);
  }, [users]);

  const sortByName = () => {
    const sorted = [...sortedUsers].sort((a, b) =>
      sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
    setSortedUsers(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th onClick={sortByName}>Name ⬍</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company</th>
          </tr>
        </thead>

        <tbody>
          {sortedUsers.map((user) => (
            <tr
              key={user.id}
              onClick={() => navigate(`/user/${user.id}`)}
              className="table-row"
            >
              <td data-label="Name">{user.name}</td>
              <td data-label="Email">{user.email}</td>
              <td data-label="Phone">{user.phone}</td>
              <td data-label="Company">{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;