function Hero() {
  return (
    <section style={styles.hero} id="home" className="hero">
      {/* Background glow effect */}
      <div style={styles.bgGlow}></div>
      
      {/* LEFT SIDE */}
      <div style={styles.left} className="fade-in">
        <div style={styles.badge}>✨ Premium Blend ✨</div>
        
        <h1 style={styles.title}>
          Brewed <span style={styles.highlight}>Fresh</span>
        </h1>
        <p style={styles.subtitle}>
          Where every cup tells a story
        </p>

        <button style={styles.button}>
          View Menu
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div style={styles.right}>
        <div style={styles.imageMugWrapper}>
          <div style={styles.glowEffect}></div>
          <img 
            src="https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?ixlib=rb-4.0.3&w=800&q=80"
            alt="premium coffee"
            style={styles.mugImage}
            className="hero-image"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&w=800&q=80"
            }}
          />
        </div>
      </div>

    </section>
  )
}

const styles = {
  hero: {
    display: "flex",
    height: "100vh",
    padding: "0 100px",
    alignItems: "center",
    justifyContent: "space-between",
    background: "linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 100%)",
    gap: "60px",
    position: "relative",
    overflow: "hidden",
    flexDirection: window.innerWidth < 768 ? "column" : "row",
    justifyContent: window.innerWidth < 768 ? "center" : "space-between",
    paddingTop: window.innerWidth < 768 ? "80px" : "0",
    paddingBottom: window.innerWidth < 768 ? "40px" : "0",
    minHeight: window.innerWidth < 768 ? "auto" : "100vh",
    "@media (max-width: 768px)": {
      padding: "0 40px",
      gap: "40px"
    },
    "@media (max-width: 640px)": {
      padding: "0 20px",
      gap: "20px"
    }
  },

  bgGlow: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "800px",
    height: "800px",
    background: "radial-gradient(circle, rgba(197, 157, 95, 0.15) 0%, transparent 70%)",
    borderRadius: "50%",
    animation: "float 6s ease-in-out infinite",
    zIndex: 0,
    pointerEvents: "none"
  },

  left: {
    flex: 1,
    color: "white",
    zIndex: 2,
    position: "relative"
  },

  badge: {
    display: "inline-block",
    padding: "8px 20px",
    background: "rgba(197, 157, 95, 0.1)",
    border: "1px solid #c59d5f",
    borderRadius: "50px",
    fontSize: "13px",
    fontWeight: "600",
    color: "#c59d5f",
    marginBottom: "30px",
    letterSpacing: "1px"
  },

  title: {
    fontSize: window.innerWidth < 768 ? "42px" : "72px",
    fontWeight: "700",
    marginBottom: "20px",
    lineHeight: "1.1",
    letterSpacing: "-0.5px",
    animation: "slideInLeft 1s ease 0.2s forwards",
    opacity: 0,
    fontFamily: "'Cormorant Garamond', serif"
  },

  highlight: {
    background: "linear-gradient(90deg, #c59d5f, #e6c27a)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent"
  },

  subtitle: {
    fontSize: window.innerWidth < 768 ? "14px" : "18px",
    color: "#aaa",
    marginBottom: "35px",
    maxWidth: "400px",
    lineHeight: "1.6",
    animation: "fadeIn 1s ease 0.4s forwards",
    opacity: 0
  },

  button: {
    padding: "16px 40px",
    background: "linear-gradient(90deg, #c59d5f, #d4a856)",
    border: "none",
    color: "#000",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    borderRadius: "10px",
    transition: "all 0.3s ease",
    animation: "slideInUp 1s ease 0.6s forwards",
    opacity: 0,
    boxShadow: "0 10px 30px rgba(197, 157, 95, 0.2)"
  },

  right: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    zIndex: 2,
    position: "relative"
  },

  imageWrapper: {
    borderRadius: "20px"
  },

  imageMugWrapper: {
    borderRadius: "30px",
    overflow: "hidden",
    boxShadow: "0 40px 100px rgba(0,0,0,0.7)",
    position: "relative",
    animation: "float 4s ease-in-out infinite"
  },

  glowEffect: {
    position: "absolute",
    top: "-50%",
    left: "-50%",
    width: "200%",
    height: "200%",
    background: "radial-gradient(circle, rgba(197, 157, 95, 0.2) 0%, transparent 70%)",
    animation: "glow 3s ease-in-out infinite",
    zIndex: 1,
    pointerEvents: "none"
  },

  mugImage: {
    width: "100%",
    height: "600px",
    objectFit: "cover",
    transition: "all 0.4s ease",
    transform: "scale(1)",
    borderRadius: "30px",
    position: "relative",
    zIndex: 2,
    display: "block"
  },

  image: {
    width: "85%",
    borderRadius: "20px",
    objectFit: "cover",
    boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
    transition: "all 0.4s ease",
    transform: "scale(1)"
  }
}

export default Hero