function About() {
  return (
    <div style={styles.about}>
      <div style={styles.container}>
        <h2 style={styles.title}>About Our Café</h2>
        
        <div style={styles.content}>
          <p style={styles.text}>
            Welcome to our premium coffee sanctuary. We believe that every cup tells a story — a story of passion, craftsmanship, and dedication to quality.
          </p>
          
          <div style={styles.features}>
            <div style={styles.feature}>
              <div style={styles.featureIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5H18V11C18 14.866 15.866 18 12 18C8.134 18 6 14.866 6 11V5H8Z" stroke="#c59d5f" strokeWidth="1.8" strokeLinejoin="round"/>
                  <path d="M18 7H20C21.1046 7 22 7.89543 22 9V11C22 12.1046 21.1046 13 20 13H18" stroke="#c59d5f" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Premium Beans</h3>
              <p>Sourced from the finest coffee regions</p>
            </div>
            <div style={styles.feature}>
              <div style={styles.featureIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#c59d5f" strokeWidth="1.8" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Perfect Brew</h3>
              <p>Precise techniques for the best taste</p>
            </div>
            <div style={styles.feature}>
              <div style={styles.featureIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 21H21V11H3V21Z" stroke="#c59d5f" strokeWidth="1.8" strokeLinejoin="round"/>
                  <path d="M7 11V7C7 4.79086 8.79086 3 11 3H13C15.2091 3 17 4.79086 17 7V11" stroke="#c59d5f" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Cozy Space</h3>
              <p>Your perfect place to relax</p>
            </div>
          </div>

          <p style={styles.textBottom}>
            Every visit is an experience, every cup is a moment to savor.
          </p>
        </div>
      </div>
    </div>
  )
}

const styles = {
  about: {
    padding: "100px 60px",
    background: "#0d0d0d",
    textAlign: "center"
  },
  container: {
    maxWidth: "900px",
    margin: "0 auto"
  },
  title: {
    fontSize: "48px",
    fontWeight: "700",
    marginBottom: "40px",
    color: "#ffffff",
    fontFamily: "'Cormorant Garamond', serif"
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: "40px"
  },
  text: {
    fontSize: "18px",
    color: "#aaa",
    lineHeight: "1.8",
    fontStyle: "italic"
  },
  features: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "30px"
  },
  feature: {
    padding: "30px",
    background: "#1a1a1a",
    borderRadius: "20px",
    boxShadow: "0 10px 40px rgba(0,0,0,0.3)"
  },
  featureIcon: {
    fontSize: "40px",
    display: "block",
    marginBottom: "15px"
  },
  textBottom: {
    fontSize: "18px",
    color: "#c59d5f",
    fontWeight: "600",
    lineHeight: "1.8"
  }
}

export default About