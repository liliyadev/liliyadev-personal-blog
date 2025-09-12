import React from "react"

const Footer = () => (
  <footer className="w-full mt-16 flex justify-center bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-white">
    <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm">
      © {new Date().getFullYear()} · Built by <span className="font-semibold">Liliya Vildanova</span>
    </div>
  </footer>
)

export default Footer
