import * as React from "react"

const IndexPage = () => {
  return (
    <main style={{ fontFamily: "Arial", padding: "2rem", maxWidth: "800px", margin: "auto" }}>
      <h1>Welcome to Bilehfahi 🌴</h1>
      <p>
        Bilehfahi is a beautiful and serene island located in the Maldives, offering an authentic
        local experience with stunning beaches and crystal-clear lagoons.
      </p>

      <img 
        src="/bilehfahi.jpg" 
        alt="Bilehfahi Island" 
        style={{ width: "100%", borderRadius: "12px", marginTop: "1rem" }}
      />

      <section style={{ marginTop: "2rem" }}>
        <h2>Things to Do</h2>
        <ul>
          <li>Snorkeling in coral-rich waters 🐠</li>
          <li>Enjoy local Maldivian cuisine 🍛</li>
          <li>Explore traditional culture and hospitality 🏝️</li>
        </ul>
      </section>

      <footer style={{ marginTop: "3rem", fontSize: "0.9rem", color: "#666" }}>
        © {new Date().getFullYear()} Visit Bilehfahi
      </footer>
    </main>
  )
}

export default IndexPage
