// src/App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Users from './components/Users';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import UserForm from './components/UserForm';
import User from './models/User';
import LanguageSwitcher from './components/LanguageSwitcher';
import I18nProvider from './services/i18n';


const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const handleCreateUser = (newUser: User) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  const handleEditUser = (editedUser: User) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === editedUser.id ? editedUser : user))
    );
    setEditingUser(null);
  };

  const handleDeleteUser = (id: number) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    setEditingUser(null);
  };

  return (
    <I18nProvider>
      <Router>
        <div>
          <h1>React TypeScript SPA</h1>
          <LanguageSwitcher />
          <Users users={users} onDeleteUser={handleDeleteUser} onEditUser={setEditingUser} />
          {editingUser ? (
        <UserForm user={editingUser} onUpdateUser={handleEditUser} />
      ) : (
        <UserForm onCreateUser={handleCreateUser} />
      )}

          <Routes>
            <Route path="/" element={<UserList users={users} />} />
            <Route path="/user/:userId" element={<UserDetail users={users} />} />
            <Route
              path="/add"
              element={<UserForm onCreateUser={() => {}} onUpdateUser={() => {}} />}
            />
            <Route
              path="/edit/:userId"
              element={<UserForm onCreateUser={() => {}} onUpdateUser={() => {}} />}
            />
          </Routes>
        </div>
      </Router>
    </I18nProvider>
  );
};

export default App;