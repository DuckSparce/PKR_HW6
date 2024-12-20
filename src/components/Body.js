import React from "react";

const Body = () => {
  return (
    <main style={styles.body}>
      <div style={styles.card}>
        <img src={"/avatar-nazar.png"} alt="Nazarii Dziurakh" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Nazarii Dziurakh</h2>
          <p style={styles.position}>Frontend developer</p>
        </div>
      </div>
      <div style={styles.card}>
        <img src={"/avatar-mariia.jpg"} alt="Mariia Yevtushenko" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Mariia Yavtushenko</h2>
          <p style={styles.position}>Backend developer</p>
        </div>
      </div>
      <div style={styles.card}>
        <img src={"/Andrii_photo.jpg"} alt="Andrii" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Andrii Kityk</h2>
          <p style={styles.position}>Product owner</p>
        </div>
      </div>
      <div style={styles.card}>
        <img src={"/avatar-artem.jpg"} alt="Artem Kachur" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Artem Kachur</h2>
          <p style={styles.position}>QA Engineer</p>
        </div>
      </div>
      <div style={styles.card}>
          <img src={"/avatar_liza.png"} alt="Liza Davydenko" style={styles.photo} />
          <div style={styles.textContainer}>
              <h2 style={styles.name}>Liza Davydenko</h2>
              <p style={styles.position}>Designer</p>
          </div>
      </div>
    </main>
  );
};

const styles = {
    body: {
        display: "flex",
        flexWrap: "wrap",
    },
    card: {
        width: "150px",
        padding: "1em",
        borderRadius: "10px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        margin: "1em",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    photo: {
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        objectFit: "cover",
    },
    textContainer: {
        marginTop: "0.5em",
    },
    name: {
        fontSize: "1em",
        fontWeight: "bold",
        color: "#333",
        margin: "0",
    },
    position: {
        fontSize: "0.9em",
        color: "#6a0dad", // Same purple color as header
        margin: "0.5em 0 0 0",
    },
};

export default Body;