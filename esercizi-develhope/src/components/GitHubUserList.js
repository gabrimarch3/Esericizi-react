import React, { useState } from 'react';
import GithubUser from './GitHubUser';

const GithubUserList = () => {
  const [usernames, setUsernames] = useState([]);
  const [newUsername, setNewUsername] = useState('');

  const handleAddUsername = () => {
    setUsernames([...usernames, newUsername]);
    setNewUsername('');
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={newUsername}
          onChange={(event) => setNewUsername(event.target.value)}
          placeholder="Enter a GitHub username"
        />
        <button onClick={handleAddUsername}>Add</button>
      </div>
      <div>
        {usernames.map((username, index) => (
          <GithubUser key={index} username={username} />
        ))}
      </div>
    </div>
  );
};

export default GithubUserList;