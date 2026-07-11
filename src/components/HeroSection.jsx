 import React from 'react'
import { Link } from 'react-router-dom'
function HeroSection(){
  return(
    <section style={styles.hero}>
      <div style={styles.overlay}>
        <h1 style={styles.heading}>Welcome to FakeStore</h1>
        <p style={styles.para}>Hello!! this my first Fakestore</p>
        <Link to="/products" style={styles.button}>Shop now</Link>
      </div>
    </section>
  )
}
const styles= {
  hero: {
    backgroundImage:"url('https://img.magnific.com/free-photo/multi-colored-garments-hang-coathangers-retail-store-generated-by-ai_188544-19853.jpg')",
    width :"100%",
    height: "85vh",
    backgroundRepeat:"no-Repeat",
    backgroundPosition:"center",
    backgroundSize:"cover",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",

  },
  overlay:{
    width:"100%",
    height:"100%",
    display:"flex",
    justifyContent:"center",
    flexDirection:"column",
    alignItems:"center",
  },
  heading:{
    color:"white",
    fontSize:"4rem"
},
para:{
    color:"white",
    fontSize:"2.5rem",
    marginTop:"10px",
},
button:{
    display:"inline-block",
    background:"white",
    marginTop:"20px",
    padding:"10px 25px",
    textDecoration:"none",
    borderRadius:"10px",
}
}
export default HeroSection