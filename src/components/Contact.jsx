function Contact() {
  return (
    <div id="contact" style={styles.contact}>
      <div style={styles.container}>
        <h2 style={styles.title}>Visit Us</h2>
        <p style={styles.subtitle}>We'd love to see you</p>

        <div style={styles.infoGrid}>
          <div style={styles.infoCard}>
            <div style={styles.icon}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13401 2 5 5.13401 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13401 15.866 2 12 2Z" stroke="#c59d5f" strokeWidth="1.8" strokeLinejoin="round"/>
                <path d="M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z" stroke="#c59d5f" strokeWidth="1.8"/>
              </svg>
            </div>
            <h3>Location</h3>
            <p>Bangalore, India</p>
            <p style={styles.details}>123 Coffee Street, Tech Park</p>
          </div>

          <div style={styles.infoCard}>
            <div style={styles.icon}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8V12L14 14" stroke="#c59d5f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#c59d5f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Hours</h3>
            <p>Mon - Fri: 7:00 AM - 9:00 PM</p>
            <p style={styles.details}>Sat - Sun: 8:00 AM - 10:00 PM</p>
          </div>

          <div style={styles.infoCard}>
            <div style={styles.icon}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21C11.1634 21 4 13.8366 4 5C4 4.46957 4.21071 3.96086 4.58579 3.58579C4.96086 3.21071 5.46957 3 6 3H8.09C8.58209 3 9.03914 3.21071 9.41421 3.58579L11.83 6.0005C12.1705 6.34096 12.342 6.79276 12.3058 7.25528L12.02 9.9C12.0029 10.0959 11.9299 10.2865 11.8075 10.4401L10.6 12.13C11.96 13.21 13.55 14.01 15.31 14.43L16.99 13.95C17.54 13.83 18.12 14.04 18.49 14.45L20.42 16.99C20.75 17.32 20.92 17.76 20.92 18.21V19C20.92 19.55 21.37 20 21.92 20H22" stroke="#c59d5f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Contact</h3>
            <p>+91 9876 543 210</p>
            <p style={styles.details}>hello@cafe.com</p>
          </div>
        </div>

        <button style={styles.button}>Get Directions</button>
      </div>
    </div>
  )
}

const styles = {
  contact: {
    padding: window.innerWidth < 640 ? "60px 20px" : "100px 60px",
    background: "#0d0d0d",
    textAlign: "center"
  },
  container: {
    maxWidth: "900px",
    margin: "0 auto"
  },
  title: {
    fontSize: window.innerWidth < 640 ? "32px" : "48px",
    fontWeight: "700",
    marginBottom: "15px",
    color: "#ffffff",
    fontFamily: "'Cormorant Garamond', serif"
  },
  subtitle: {
    fontSize: window.innerWidth < 640 ? "14px" : "18px",
    color: "#aaa",
    marginBottom: "60px"
  },
  infoGrid: {
    display: "grid",
    gridTemplateColumns: window.innerWidth < 640 ? "1fr" : "repeat(3, 1fr)",
    gap: window.innerWidth < 640 ? "20px" : "30px",
    marginBottom: "60px"
  },
  infoCard: {
    padding: window.innerWidth < 640 ? "25px 20px" : "40px 30px",
    background: "#1a1a1a",
    borderRadius: "20px",
    boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
    transition: "all 0.3s ease"
  },
  icon: {
    fontSize: "40px",
    display: "block",
    marginBottom: "20px"
  },
  details: {
    fontSize: "14px",
    color: "#888"
  },
  button: {
    padding: "16px 40px",
    background: "linear-gradient(90deg, #c59d5f, #e6c27a)",
    border: "none",
    color: "#000",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    borderRadius: "10px",
    transition: "all 0.3s ease"
  }
}

export default Contact