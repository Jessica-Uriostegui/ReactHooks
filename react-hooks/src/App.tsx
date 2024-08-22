import React from 'react';
import Counter from './Counter';
import ShoppingCart from './ShoppingCart';

const App: React.FC = () =>{
  return (
    <div>
      <h1>Counter and Shopping Cart</h1>
      <Counter />
      <ShoppingCart />
    </div>
  );
};

export default App;
