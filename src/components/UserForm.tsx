// APINZON 2024 Component with User form with CRUD functions
import React, { useState, useEffect } from 'react';
import User from '../models/User';

interface UserFormProps {
  onCreateUser?: (newUser: User) => void;
  onUpdateUser?: (editedUser: User) => void;
  user?: User;
}

const UserForm: React.FC<UserFormProps> = ({ onCreateUser, onUpdateUser, user }) => {
  const [editedUser, setEditedUser] = useState<User>({ id: 0, name: '', email: '' });

  useEffect(() => {
    if (user) {
      setEditedUser(user);
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedUser((prevUser) => ({ ...prevUser, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onCreateUser && !user) {
      onCreateUser(editedUser);
    } else if (onUpdateUser && user) {
      onUpdateUser(editedUser);
    }
    setEditedUser({ id: 0, name: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={editedUser.name} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="text" name="email" value={editedUser.email} onChange={handleChange} />
      </label>
      <button type="submit">{user ? 'Update User' : 'Add User'}</button>
    </form>
  );
};

export default UserForm;