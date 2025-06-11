import React, { useState } from 'react';
import { Products } from '../api/products';

const AddProductForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    Products.insert({
      name,
      price: parseFloat(price),
      description,
      createdAt: new Date(),
    });

    alert("Product saved to database!");

    setName('');
    setPrice('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
      <h3>Add Product</h3>

      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      /><br /><br />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      /><br /><br />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea><br /><br />

      <button type="submit">Save Product</button>
    </form>
  );
};

export default AddProductForm;
