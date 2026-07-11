 import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function Products(){
    const [ products , setProducts] = useState([]);
    const [ loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
          setLoading(false);
        })
        .catch((err) => console.error(err));
    }, []);

    if (loading) return <p style={{textAlign: "center"}}>Loading Products......</p>
    return (
      <div style={styles.grid}>
        {products.map((product) => (
          <div key={product.id} style={StyleSheet.card}>
             <img src={product.image} alt={product.title} style={{width:"100px",height:"100px"}}/>
            <h4>{product.title.slice(0,40)}...</h4>
            <p>${product.price}</p>
          </div>
        
        ))}
      </div>
    )
}

const styles={
  grid:{
    display:"grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
    gap:"20px",
    padding:"40px",
  }
}
export default Products