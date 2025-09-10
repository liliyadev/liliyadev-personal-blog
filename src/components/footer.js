import React from "react"

const Footer = () => (
  <footer className="bg-blue-50 border-t border-blue-200 mt-12">
    <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm text-blue-700">
      © {new Date().getFullYear()} · Built by <span className="font-semibold">Liliya Vildanova</span>
    </div>
  </footer>
)

export default Footer
