import { useState } from 'react'

function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const images = [
    {
      src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1000&h=600",
      title: "Modern Café Space"
    },
    {
      src: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1000&h=600",
      title: "Cozy Coffee Corner"
    },
    {
      src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1000&h=600",
      title: "Premium Ambiance"
    },
    {
      src: "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=1000&h=600",
      title: "Our Perfect Spot"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div style={styles.gallery} id="gallery">
      <h2 style={styles.title}>Our Space</h2>
      <p style={styles.subtitle}>Experience our warm and welcoming ambiance</p>

      <div style={styles.carouselContainer}>
        <div style={styles.carousel}>
          {images.map((img, idx) => (
            <div
              key={idx}
              style={{
                ...styles.slide,
                opacity: idx === currentSlide ? 1 : 0,
                visibility: idx === currentSlide ? 'visible' : 'hidden',
                transition: 'opacity 0.6s ease-in-out'
              }}
            >
              <img src={img.src} alt={img.title} style={styles.slideImage} />
              <h3 style={styles.slideTitle}>{img.title}</h3>
            </div>
          ))}
        </div>

        <button style={styles.prevButton} onClick={prevSlide}>❮</button>
        <button style={styles.nextButton} onClick={nextSlide}>❯</button>

        <div style={styles.dots}>
          {images.map((_, idx) => (
            <div
              key={idx}
              style={{
                ...styles.dot,
                background: idx === currentSlide ? '#c59d5f' : '#555'
              }}
              onClick={() => setCurrentSlide(idx)}
            />
          ))}
        </div>

        <div style={styles.ctaContainer}>
          <p style={styles.ctaText}>Want to experience this space in person?</p>
          <button 
            style={styles.ctaButton}
            onClick={() => {
              const contactSection = document.getElementById('contact')
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            Reserve a table
          </button>
        </div>
      </div>
    </div>
  )
}

const styles = {
  gallery: {
    padding: window.innerWidth < 640 ? "60px 20px" : "100px 60px",
    background: "#0d0d0d",
    textAlign: "center"
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
  carouselContainer: {
    position: "relative",
    maxWidth: "900px",
    margin: "0 auto"
  },
  carousel: {
    position: "relative",
    width: "100%",
    height: window.innerWidth < 640 ? "300px" : "500px",
    borderRadius: "30px",
    overflow: "hidden",
    boxShadow: "0 20px 60px rgba(0,0,0,0.5)"
  },
  slide: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0
  },
  slideImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },
  slideTitle: {
    position: "absolute",
    bottom: window.innerWidth < 640 ? "15px" : "30px",
    left: window.innerWidth < 640 ? "15px" : "30px",
    fontSize: window.innerWidth < 640 ? "18px" : "28px",
    fontWeight: "700",
    color: "white",
    textShadow: "0 2px 10px rgba(0,0,0,0.5)",
    maxWidth: window.innerWidth < 640 ? "calc(100% - 30px)" : "auto"
  },
  prevButton: {
    position: "absolute",
    left: window.innerWidth < 640 ? "15px" : "-60px",
    top: "50%",
    transform: "translateY(-50%)",
    background: window.innerWidth < 640 ? "rgba(0,0,0,0.5)" : "none",
    border: "none",
    color: "#c59d5f",
    fontSize: window.innerWidth < 640 ? "32px" : "40px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    zIndex: 10,
    padding: window.innerWidth < 640 ? "8px 12px" : "0",
    borderRadius: window.innerWidth < 640 ? "8px" : "0"
  },
  nextButton: {
    position: "absolute",
    right: window.innerWidth < 640 ? "15px" : "-60px",
    top: "50%",
    transform: "translateY(-50%)",
    background: window.innerWidth < 640 ? "rgba(0,0,0,0.5)" : "none",
    border: "none",
    color: "#c59d5f",
    fontSize: window.innerWidth < 640 ? "32px" : "40px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    zIndex: 10,
    padding: window.innerWidth < 640 ? "8px 12px" : "0",
    borderRadius: window.innerWidth < 640 ? "8px" : "0"
  },
  dots: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    marginTop: "30px"
  },
  dot: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    cursor: "pointer",
    transition: "all 0.3s ease"
  },
  ctaContainer: {
    marginTop: "40px",
    padding: "30px 40px",
    borderRadius: "28px",
    background: "rgba(255, 255, 255, 0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    backdropFilter: "blur(10px)",
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "18px"
  },
  ctaText: {
    color: "#eee",
    fontSize: "18px",
    maxWidth: "560px",
    lineHeight: "1.6"
  },
  ctaButton: {
    background: "#c59d5f",
    color: "#101010",
    border: "none",
    borderRadius: "999px",
    padding: "14px 32px",
    fontSize: "16px",
    fontWeight: "700",
    cursor: "pointer",
    transition: "transform 0.25s ease, box-shadow 0.25s ease"
  }
}

export default Gallery