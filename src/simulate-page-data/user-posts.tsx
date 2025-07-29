// pages/UserPostPage.tsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface Post {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  likes: number;
}

const UserPostPage: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setUserName('John Doe');
      setPosts([
        {
          id: '1',
          title: 'Getting Started with React',
          content: 'React is an amazing library for building user interfaces...',
          createdAt: '2024-07-20',
          likes: 15
        },
        {
          id: '2',
          title: 'TypeScript Best Practices',
          content: 'Here are some tips for writing better TypeScript code...',
          createdAt: '2024-07-18',
          likes: 23
        }
      ]);
      setLoading(false);
    }, 400);
  }, [userId]);

  if (loading) return <div>Loading posts...</div>;

  return (
    <div className="user-post-page">
      <div className="page-header">
        <h1>Posts by {userName}</h1>
        <button onClick={() => window.history.back()}>← Back to Profile</button>
      </div>
      
      <div className="posts-container">
        {posts.length === 0 ? (
          <p>No posts yet.</p>
        ) : (
          posts.map((post) => (
            <article key={post.id} className="post-card">
              <h2>{post.title}</h2>
              <p className="post-content">{post.content}</p>
              <div className="post-meta">
                <span>Posted on {new Date(post.createdAt).toLocaleDateString()}</span>
                <span>❤️ {post.likes} likes</span>
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );
};

export default UserPostPage;
