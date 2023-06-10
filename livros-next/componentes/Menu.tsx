import React from 'react'
import Link from 'next/link'

export const Menu: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link legacyBehavior href="/">
            <a className="nav-link">Loja Next</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link legacyBehavior href="/LivroLista">
            <a className="nav-link">Catálogo</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link legacyBehavior href="/LivroDados">
            <a className="nav-link">Novo Livro</a>
          </Link>
            </li>
          </ul>
        </nav>
    )
}
