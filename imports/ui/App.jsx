// imports/ui/App.jsx
import React from 'react';
import AddProductForm from './AddProductForm';

const App = () => (
  <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
    <h1>Tura Kasuwanci</h1>
    <p>Enter details to add a product to your marketplace.</p>
    <AddProductForm />
  </div>
);

export default App;
