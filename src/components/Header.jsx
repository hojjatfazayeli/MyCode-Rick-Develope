import React from 'react'

import { HeartIcon, TrashIcon } from "@heroicons/react/24/outline";
function Header({character , children}) {
  return (
    <header className="header">
        <h1 className="header-logo">LOGO 😍</h1>
      {children}
        <p className="header-counter">Found {character} characters</p>
        <button className="header-favourites">
          <HeartIcon className="header-favourites_icon"/>
            <span className="header-favoriets_icon-counter">0</span>
        </button>
    </header>
      )
}

export default Header

