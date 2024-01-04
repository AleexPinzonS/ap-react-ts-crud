// src/components/Users.tsx
import React from 'react';
import User from '../models/User';

interface UsersProps {
  users: User[];
  onDeleteUser: (id: number) => void;
  onEditUser: (user: User) => void;
}

const Users: React.FC<UsersProps> = ({ users, onDeleteUser, onEditUser }) => {
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => onEditUser(user)}>Edit</button>
            <button onClick={() => onDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;