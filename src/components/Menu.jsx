function Menu() {
  const items = [
    { 
      name: "Cappuccino", 
      price: "₹150",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Rich espresso with velvety steamed milk"
    },
    { 
      name: "Espresso Shots", 
      price: "₹80",
      image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Bold and intense coffee perfection"
    },
    { 
      name: "Latte", 
      price: "₹140",
      image: "https://images.unsplash.com/photo-1515432491562-48625465a53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Smooth espresso with creamy milk"
    },
    { 
      name: "Americano", 
      price: "₹100",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Crisp and clean espresso-based coffee"
    }
  ]

  return (
    <div id="menu" style={styles.menu}>
      <h2 style={styles.title}>Our Menu</h2>
      <p style={styles.subtitle}>Carefully crafted beverages for every taste</p>

      <div style={styles.grid}>
        {items.map((item, i) => (
          <div key={i} style={styles.card} className="menu-card">
            <div style={styles.cardImage}>
              <img 
                src={item.image} 
                alt={item.name}
                style={styles.image}
                className="menu-image"
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src = 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
                }}
              />
            </div>
            <div style={styles.cardContent}>
              <h3 style={styles.itemName}>{item.name}</h3>
              <p style={styles.description}>{item.description}</p>
              <div style={styles.cardFooter}>
                <span style={styles.price}>{item.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const styles = {
  menu: {
    padding: "100px 60px",
    background: "#0d0d0d",
    textAlign: "center"
  },
  title: {
    fontSize: "48px",
    fontWeight: "700",
    marginBottom: "15px",
    color: "#ffffff",
    fontFamily: "'Cormorant Garamond', serif"
  },
  subtitle: {
    fontSize: "18px",
    color: "#aaa",
    marginBottom: "60px"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "40px"
  },
  card: {
    borderRadius: "20px",
    overflow: "hidden",
    background: "#1a1a1a",
    boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
    transition: "all 0.4s ease",
    cursor: "pointer"
  },
  cardImage: {
    width: "100%",
    height: "220px",
    overflow: "hidden",
    borderRadius: "20px 20px 0 0"
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.4s ease"
  },
  cardContent: {
    padding: "30px"
  },
  itemName: {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#ffffff"
  },
  description: {
    fontSize: "14px",
    color: "#aaa",
    marginBottom: "20px",
    lineHeight: "1.5"
  },
  cardFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  price: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#c59d5f"
  }
}

export default Menu