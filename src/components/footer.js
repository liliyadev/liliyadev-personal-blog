import React from "react"

const Footer = () => (
  <footer className="bg-green-50 border-t border-green-200 mt-12">
    <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm text-green-700">
      © {new Date().getFullYear()} · Built by <span className="font-semibold">Liliya Vildanova</span>
    </div>
  </footer>
)

export default Footer
