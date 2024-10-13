import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Projects = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);  
      })
      .catch(error => {
        console.error('Error fetching posts:', error);  
      });
  }, []);  

  return (
    <div className="p-4">
      <ul className="space-y-4">
        {posts.map(post => (
          <li className="bg-white p-4 rounded-lg shadow-md" key={post.id}>
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="mt-2 text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;