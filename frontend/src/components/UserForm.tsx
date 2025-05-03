import React, { useState } from 'react';
import { createUser } from '../services/userService';

const UserForm = () => {
  const [formData, setFormData] = useState({ userId: '', vehicleId: '', date: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createUser(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="userId" placeholder="User ID" onChange={handleChange} className="border p-2 w-full" />
      <input name="vehicleId" placeholder="Vehicle ID" onChange={handleChange} className="border p-2 w-full" />
      <input name="date" placeholder="Date" onChange={handleChange} className="border p-2 w-full" />
      <button type="submit" className="bg-blue-500 text-white p-2">Submit</button>
    </form>
  );
};

export default UserForm;