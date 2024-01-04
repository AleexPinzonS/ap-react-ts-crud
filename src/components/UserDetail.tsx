// APINZON 2024 Component to display information about a specific user
import React from 'react';
import { useParams } from 'react-router-dom';
import User from '../models/User';

interface UserDetailProps {
  users: User[];
}

const UserDetail: React.FC<UserDetailProps> = ({ users }) => {
  const { userId } = useParams<{ userId: string | undefined }>();

  // Check if userId is undefined before using it
  if (userId === undefined) {
    return <div>Invalid user ID</div>;
  }

  // Convert userId to number if possible
  const userIdNumber = parseInt(userId, 10);

  // Checks if userIdNumber is NaN, which would indicate that it is not a valid number
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