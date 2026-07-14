 import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("username");
        window.location.href = "/";
    };

    return (
        <nav style={ styles.nav }>
            <h1>FakeStore</h1>
            <div style={ styles.links }>
                <Link to="/" style={styles.link}>Home</Link>
                <Link to="/products" style={styles.link}>Products</Link>
                {isLoggedIn? (
                    <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>

                ) : (
                    <Link to="/login" style={styles.link}>Login</Link>
                )}
            </div>
        </nav>
    );
}

const styles = {
    nav: {
        display: "flex",
        justifyContent: "space-between",
        background: "#ee94e5",
        padding: "15px 40px",
        color: "#fff",
        alignItems: "center"
    },

    links: {
        display: "flex",
        gap: "20px"
    },

    link: {
        color: "#fff",
        textDecoration: "none",
        fontWeight: "500"
    }
}


export default NavBar