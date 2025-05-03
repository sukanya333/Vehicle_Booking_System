import React, { useEffect, useState } from 'react';
import { createUser, getUserById, updateUser } from '../services/userService';
import { useParams, useNavigate } from 'react-router-dom';

const UserForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    if (id) {
      getUserById(id).then((res) => {
        const { name, email } = res.data;
        setFormData({ name, email, password: '' }); // Don't prefill password
      });
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (id) {
        await updateUser(id, formData);
      } else {
        await createUser(formData);
      }
      navigate('/users');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded space-y-4">
      <label className="block">
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border px-2 py-1"
          required
        />
      </label>
      <label className="block">
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border px-2 py-1"
          required
        />
      </label>
      <label className="block">
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border px-2 py-1"
          required={!id} // password is required only when creating
        />
      </label>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        {id ? 'Update' : 'Create'} User
      </button>
    </form>
  );
};

export default UserForm;
