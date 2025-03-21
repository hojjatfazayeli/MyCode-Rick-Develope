import React from 'react'
import { TrashIcon,XCircleIcon } from "@heroicons/react/24/outline";

function Modal({isopne , setIsOpen , favourite ,setFavourite}) {

    const handleDeleteCharacter = (id) =>{
        const filteredCharacter = favourite.filter((fav)=> fav.id != id);
        setFavourite(filteredCharacter);
    }

    if(isopne) {
  return (
    <>
    <div>
    <div className='modal-cover'></div>
        <div className="modal">
            <div className="modal-header">
                <div className="modal-header_title">List of Favourites</div>
                <button 
                className="modal-header_close"
                onClick={()=>setIsOpen((prev) => !prev)}
                >
                    <XCircleIcon className="modal-header_close-icon"/>
                </button>
            </div>
            {favourite.map((fav)=> {return <CharacterFavourites key={fav.id} fav = {fav} onDeleteCharacter = {handleDeleteCharacter}/>})}
        </div>
    </div>
    </>
  )
}
}

export default Modal

function CharacterFavourites({fav , onDeleteCharacter})
{
    return (
        <div className="character character-modal">
        <img src={fav.image} alt="Character Image" className="character-image"/>
        <div className="character-details">
            <div className="character-content">
                <h2 className="character-name"><span className="character-icon">{fav.gender == "Male" ? "👨‍🦳" : "👩‍🦳"}</span>{fav.name}</h2>
                <p className="character-status"><span className="character-status_icon">{fav.status == "Alive" ? "🟢" : "🔴"}</span>{fav.status} - {fav.gender}</p>
            </div>
            <button 
            className="character-info"
            onClick={()=>onDeleteCharacter(fav.id)}
            >
                <TrashIcon className="character-info_icon"/>
            </button>
        </div>
    </div>
    )
}