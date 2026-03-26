import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../services/api";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserById(id).then((res) => setUser(res.data));
  }, [id]);

  if (!user) return <p className="loading">Loading...</p>;

  return (
    <div className="container">
      <h2>{user.name}</h2>

      <div className="card">
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> {user.website}</p>
        <p><strong>Company:</strong> {user.company.name}</p>
        <p><strong>Address:</strong> {user.address.city}</p>
      </div>
    </div>
  );
};

export default UserDetail;