import { useState } from 'react'

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Cafe</h2>

      {/* Desktop Navigation */}
      <div style={{ ...styles.links, display: window.innerWidth > 768 ? 'flex' : 'none' }}>
        <a href="#home" className="nav-link">Home</a>
        <a href="#menu" className="nav-link">Menu</a>
        <a href="#gallery" className="nav-link">Gallery</a>
        <a href="#contact" className="nav-link">Contact</a>
      </div>

      {/* Mobile Menu Button */}
      <button 
        style={styles.hamburger}
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <div style={{ ...styles.hamburgerLine, transform: mobileMenuOpen ? 'rotate(45deg) translate(10px, 10px)' : 'none' }}></div>
        <div style={{ ...styles.hamburgerLine, opacity: mobileMenuOpen ? 0 : 1 }}></div>
        <div style={{ ...styles.hamburgerLine, transform: mobileMenuOpen ? 'rotate(-45deg) translate(7px, -7px)' : 'none' }}></div>
      </button>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div style={styles.mobileMenu}>
          <a href="#home" className="nav-link" onClick={closeMobileMenu} style={styles.mobileLink}>Home</a>
          <a href="#menu" className="nav-link" onClick={closeMobileMenu} style={styles.mobileLink}>Menu</a>
          <a href="#gallery" className="nav-link" onClick={closeMobileMenu} style={styles.mobileLink}>Gallery</a>
          <a href="#contact" className="nav-link" onClick={closeMobileMenu} style={styles.mobileLink}>Contact</a>
        </div>
      )}
    </nav>
  )
}

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: window.innerWidth < 640 ? "16px 15px" : "20px 60px",
    zIndex: 1000,
    background: "rgba(0, 0, 0, 0.4)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    boxSizing: "border-box"
  },

  logo: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: window.innerWidth < 640 ? "24px" : "36px",
    fontWeight: "700",
    color: "#f5f5f5",
    letterSpacing: window.innerWidth < 640 ? "1px" : "3px",
    margin: 0,
    whiteSpace: "nowrap"
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
  },

  hamburger: {
    display: window.innerWidth > 768 ? 'none' : 'flex',
    flexDirection: 'column',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    gap: '5px',
    padding: '5px',
    boxSizing: 'border-box',
    marginLeft: 'auto',
    flexShrink: 0
  },

  hamburgerLine: {
    width: '24px',
    height: '3px',
    background: '#c59d5f',
    borderRadius: '2px',
    transition: 'all 0.3s ease'
  },

  mobileMenu: {
    position: 'absolute',
    top: '70px',
    left: 0,
    right: 0,
    background: 'rgba(0, 0, 0, 0.95)',
    backdropFilter: 'blur(10px)',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    gap: '15px',
    borderBottom: '1px solid rgba(197, 157, 95, 0.2)',
    boxSizing: 'border-box',
    maxHeight: 'calc(100vh - 70px)',
    overflowY: 'auto'
  },

  mobileLink: {
    padding: '12px 15px',
    borderRadius: '8px',
    textDecoration: 'none',
    color: '#e0e0e0',
    fontSize: '16px',
    transition: 'all 0.3s ease',
    display: 'block'
  }
}

export default Navbar