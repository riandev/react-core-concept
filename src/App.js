import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const names=['a','b','c','d','e','f','g']
  const products=[
    {name:'Iphone 12', color:'black',price:'$1200'},
    {name:'Iphone 11',color:'blue',price:'$1000'},
    {name:'Iphone X',color:'black',price:'$800'}
  ]
  return (
    <div className="App">
      <header className="App-header">
      <Counter></Counter>
      <Users></Users>
      <ul>
      {
        names.map(n=><li>{n}</li>)
      }
      </ul>
    {
      products.map(pro=> <Product product={pro.name} color={pro.color} price={pro.price}></Product>)
    }
        {/* <Product product={products[0].name} color={products[0].color} price={products[0].price}></Product>
        <Product product={products[1].name} color={products[1].color} price={products[1].price}></Product>
        <Product product={products[2].name} color={products[2].color} price={products[2].price}></Product> */}
      </header>
    </div>
  );
}
function Counter() {
  const [count,setCount]=useState(10);
  // const handleIncrease=()=> setCount(count+1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=> setCount(count-1)}>Decrease</button>
      <button onClick={()=> setCount(count+1)}>Increase</button>
    </div>
  )
}

function Users() {
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())
  .then(data=>setUsers(data))
  },[]);
  
  //ekhane empty array dile effect bar bar repeat hobe na
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(u=> <li>{u.name}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props) {
const boxStyle={
border:'1px solid blue',
borderRadius:'10px',
backgroundColor:'lightgray',
height:'300px',
width:'300px',
padding:'20px'
}
  return (
    <div style={boxStyle}>
      <h1>Name: {props.product}</h1>
      <h3>Color: {props.color}</h3>
      <h4>Price: {props.price}</h4>
      <button>Buy Now</button>
    </div>
  )
}

export default App;
