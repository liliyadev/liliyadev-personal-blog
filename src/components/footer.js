import React from "react"

const Footer = () => (
  <footer className="bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-white mt-12">
    <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm text-green-700">
      © {new Date().getFullYear()} · Built by <span className="font-semibold">Liliya Vildanova</span>
    </div>
  </footer>
)

export default Footer
