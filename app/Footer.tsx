import React from 'react'

export default function Footer() {
    const date = new Date().getFullYear();
  return (
    <footer className="text-center py-5">
        <p>&copy;{date} Latest News</p>
    </footer>
  )
}
