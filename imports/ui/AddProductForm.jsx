import React, { useState } from 'react';

const AddProductForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, price, description });
    // Later: Save to MongoDB
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Product</h3>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /><br />
      <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} /><br />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} /><br />
      <button type="submit">Save Product</button>
    </form>
  );
};

export default AddProductForm;
