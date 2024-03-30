import React, { useState } from 'react';
import './App.css';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './Components/CoffeeCard';

function App() {
const  Lodatdcoffee=useLoaderData()
const [coffee,setCoffees]=useState(Lodatdcoffee)
  
  return (
    <div className='m-20 '>

<h3 className='text-center font-extrabold text-3xl text-purple-400'> Total coffee={coffee.length}</h3>
<div className='grid md:grid-cols-2 '>
  {
    coffee.map(coffe=><CoffeeCard key={coffe._id} coffe={coffe}
    
    coffee={coffee}
    setCoffees={setCoffees}
    
    ></CoffeeCard>)
  }
</div>
    </div>
    
    
  );
}

export default App;