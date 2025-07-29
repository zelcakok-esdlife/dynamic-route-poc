// pages/UserListingPage.tsx
import React, { useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

const UserListingPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setUsers([
        { id: '1', name: 'John Doe', email: 'john@example.com' },
        { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
        { id: '3', name: 'Bob Johnson', email: 'bob@example.com' },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <div>Loading users...</div>;

  return (
    <div className="user-listing-page">
      <h1>All Users</h1>
      <div className="user-grid">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <div className="user-avatar">
              {user.avatar ? (
                <img src={user.avatar} alt={user.name} />
              ) : (
                <div className="avatar-placeholder">{user.name.charAt(0)}</div>
              )}
            </div>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <button onClick={() => window.location.href = `/users/${user.id}`}>
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserListingPage;
