import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header className="bg-blue-600 text-white shadow-md">
   <Link to="/" className="hover:opacity-90">
  <img
    src="/images/Logo LV.png"
    alt="LiliyaDev Logo"
    className="h-10 w-auto"
  />
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
