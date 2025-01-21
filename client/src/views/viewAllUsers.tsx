import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaUserPlus, FaSync, FaExclamationTriangle } from "react-icons/fa";

interface User {
  _id: string;
  email: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

const ViewAllUsers: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/users`);
      if (!Array.isArray(response.data)) {
        throw new Error('Invalid data received from server');
      }
      setUsers(response.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch users");
      console.error('Error fetching users:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (userId: string) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;
    
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/users/${userId}`);
      fetchUsers();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete user");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );

  if (error) return (
    <div className="container mt-5">
      <div className="alert alert-danger shadow-sm" role="alert">
        <div className="d-flex align-items-center">
          <FaExclamationTriangle size={24} />
          <h4 className="alert-heading mb-0">Error Loading Users</h4>
        </div>
        <hr />
        <p className="mb-0">{error}</p>
        <div className="mt-3">
          <button 
            className="btn btn-outline-danger"
            onClick={() => fetchUsers()}
          >
            <FaSync size={24} /> Try Again
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container py-5">
      <div className="card shadow-sm">
        <div className="card-header bg-white py-3">
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="card-title mb-0">All Users</h2>
            <Link to="/add" className="btn btn-primary">
              <FaUserPlus size={24} /> Add New User
            </Link>
          </div>
        </div>
        
        <div className="card-body">
          {users.length === 0 ? (
            <div className="text-center py-5">
              <h3 className="text-muted">No Users Found</h3>
              <p className="text-muted mb-4">Start by adding your first user to the system</p>
              <Link to="/add" className="btn btn-primary btn-lg">
                <FaUserPlus size={24} /> Add First User
              </Link>
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="table-light">
                  <tr>
                    <th className="border-0">Name</th>
                    <th className="border-0">Email</th>
                    <th className="border-0">Created At</th>
                    <th className="border-0">Updated At</th>
                    <th className="border-0">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user._id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="avatar-circle me-3">
                            {user.name.charAt(0).toUpperCase()}
                          </div>
                          {user.name}
                        </div>
                      </td>
                      <td>{user.email}</td>
                      <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                      <td>{new Date(user.updatedAt).toLocaleDateString()}</td>
                      <td>
                        <div className="btn-group">
                          <Link to={`/edit/${user._id}`} className="btn btn-sm btn-outline-primary">
                            Edit
                          </Link>
                          <button 
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => handleDelete(user._id)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewAllUsers;
