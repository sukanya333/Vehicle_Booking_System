import React, {  useState } from 'react';
import {
  createUser,
  updateUser,
  getUserById,
  deleteUser,
  bulkDeleteUsers
} from '../services/userService';

const UsersPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [userId, setUserId] = useState('');
  const [bulkIds, setBulkIds] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreate = async () => {
    await createUser(formData);
    alert('User created');
  };

  const handleUpdate = async () => {
    if (!userId) return alert('User ID required');
    await updateUser(userId, formData);
    alert('User updated');
  };

  const handleGetById = async () => {
    if (!userId) return alert('User ID required');
    const res = await getUserById(userId);
    alert(JSON.stringify(res.data, null, 2));
  };

  const handleDelete = async () => {
    if (!userId) return alert('User ID required');
    await deleteUser(userId);
    alert('User deleted');
  };

  const handleBulkDelete = async () => {
    const ids = bulkIds.split(',').map((id) => id.trim());
    await bulkDeleteUsers(ids);
    alert('Users deleted in bulk');
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Users</h1>
      <input name="name" placeholder="Name" onChange={handleChange} className="border p-2 w-full" />
      <input name="email" placeholder="Email" onChange={handleChange} className="border p-2 w-full" />
      <input name="password" placeholder="Password" type="password" onChange={handleChange} className="border p-2 w-full" />
      <input placeholder="User ID (for update/delete/get)" value={userId} onChange={(e) => setUserId(e.target.value)} className="border p-2 w-full" />
      <div className="flex gap-2">
        <button onClick={handleCreate} className="bg-green-500 text-white p-2">Create</button>
        <button onClick={handleUpdate} className="bg-yellow-500 text-white p-2">Update</button>
        <button onClick={handleGetById} className="bg-blue-500 text-white p-2">Get By ID</button>
        <button onClick={handleDelete} className="bg-red-500 text-white p-2">Delete</button>
      </div>
      <input placeholder="Comma-separated User IDs for Bulk Delete" value={bulkIds} onChange={(e) => setBulkIds(e.target.value)} className="border p-2 w-full" />
      <button onClick={handleBulkDelete} className="bg-red-700 text-white p-2">Bulk Delete</button>
    </div>
  );
};

export default UsersPage;
