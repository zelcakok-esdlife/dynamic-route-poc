// pages/UserProfilePage.tsx
import { useSPAHooks } from "@/spa/hook";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface UserProfile {
  id: string;
  name: string;
  email: string;
  bio?: string;
  joinDate?: string;
  postsCount?: number;
}

const data = [
  { id: "1", name: "John Doe", email: "john@example.com" },
  { id: "2", name: "Jane Smith", email: "jane@example.com" },
  { id: "3", name: "Bob Johnson", email: "bob@example.com" },
];

const UserProfilePage: React.FC = () => {
  const { getRouteParams } = useSPAHooks();
  const { params } = getRouteParams();
  const { userId } = params;

  // const { userId } = useParams<{ userId: string }>();
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setUser(data[parseInt(userId, 10) - 1]);
      setLoading(false);
    }, 400);
  }, [userId]);

  if (loading) return <div>Loading user profile...</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div className="user-profile-page">
      <div className="profile-header">
        <div className="profile-avatar">
          <div className="avatar-placeholder">{user.name.charAt(0)}</div>
        </div>
        <div className="profile-info">
          <h1>{user.name}</h1>
          <p className="email">{user.email}</p>
          <p className="bio">{user.bio}</p>
          <div className="profile-stats">
            <span>Joined: {new Date(user.joinDate).toLocaleDateString()}</span>
            <span>Posts: {user.postsCount}</span>
          </div>
        </div>
      </div>

      <div className="profile-actions">
        <button onClick={() => (window.location.href = `/users/${userId}/posts`)}>
          View Posts
        </button>
        <button>Follow</button>
        <button>Message</button>
      </div>
    </div>
  );
};

export default UserProfilePage;
