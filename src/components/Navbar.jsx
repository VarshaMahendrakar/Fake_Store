import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
   <nav style={styles.nav}>
    <h1>FakeStore</h1>
    <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/products" style={styles.link}>Products</Link>
    </div>
   </nav>
  )
}
const styles={
    nav:{
         display:'flex',
         justifyContent:'space-between',
         backgroundColor:'#ee94e5',
         padding:"15px 40px",
         alignItems:'center',
         color:'white',

    },
    links:{
        display:'flex',
        gap:'20px',
    },
    link:{color: "#fff",textDecoration: "none",fontWeight:500}
}

export default Navbar