import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header className="bg-blue-600 text-white shadow-md">
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <Link to="/" className="text-2xl font-bold tracking-tight hover:opacity-90">
        LiliyaDev
      </Link>
      <button
        className="bg-white text-blue-700 font-semibold px-4 py-2 rounded hover:bg-blue-100 transition"
        onClick={() => {
          if (window.netlifyIdentity) {
            window.netlifyIdentity.open()
          } else {
            console.warn("Netlify Identity not loaded")
          }
        }}
      >
        Login
      </button>
    </div>
  </header>
)

export default Header
