import React from 'react'

import { HeartIcon, TrashIcon } from "@heroicons/react/24/outline";
function Header({character , children , favourite , setIsOpn}) {
  return (
    <>
    <header className="header">
        <h1 className="header-logo">LOGO 😍</h1>
      {children}
        <p className="header-counter">Found {character} characters</p>
        <button 
        className="header-favourites"
        onClick={() => setIsOpn((prev) => !prev)}
        >
          <HeartIcon className="header-favourites_icon"/>
            <span className="header-favoriets_icon-counter">{favourite}</span>
        </button>
    </header>
    </>
      )
}

export default Header

