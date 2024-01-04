// src/components/UserDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import User from '../models/User';

interface UserDetailProps {
  users: User[];
}

const UserDetail: React.FC<UserDetailProps> = ({ users }) => {
  const { userId } = useParams<{ userId: string | undefined }>();

  // Verifica si userId es undefined antes de utilizarlo
  if (userId === undefined) {
    return <div>Invalid user ID</div>;
  }

  // Convierte userId a número si es posible
  const userIdNumber = parseInt(userId, 10);

  // Verifica si userIdNumber es NaN, lo que indicaría que no es un número válido
  if (isNaN(userIdNumber)) {
    return <div>Invalid user ID</div>;
  }

  const user = users.find((u) => u.id === userIdNumber);

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserDetail;