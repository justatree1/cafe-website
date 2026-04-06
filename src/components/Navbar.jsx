function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}> Cafe</h2>

      <div style={styles.links}>
        <a href="#home" className="nav-link">Home</a>
        <a href="#menu" className="nav-link">Menu</a>
        <a href="#gallery" className="nav-link">Gallery</a>
        <a href="#contact" className="nav-link">Contact</a>
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    position: "fixed",   // 🔥 THIS makes it sticky
    top: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 60px",
    zIndex: 1000,

    background: "rgba(0, 0, 0, 0.4)",   // transparent dark
    backdropFilter: "blur(10px)",       // ✨ glass effect
    WebkitBackdropFilter: "blur(10px)"  // for Safari
  },

  logo: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "36px",
    fontWeight: "700",
    color: "#f5f5f5",
    letterSpacing: "3px"
  },

  links: {
    display: "flex",
    gap: "40px"
  },

  link: {
    textDecoration: "none",
    color: "#e0e0e0",
    fontSize: "16px",
    fontWeight: "400",
    position: "relative",
    transition: "all 0.3s ease"
  }
}

export default Navbar