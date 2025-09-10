import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header className="flex items-center justify-between px-6 py-4 bg-purple-50 shadow-md">
    <div className="text-xl font-bold text-purple-700">
      <Link to="/">LiliyaDev</Link>
    </div>
    <button
      className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
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
  </header>
)

export default Header
