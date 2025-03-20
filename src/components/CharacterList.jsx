import React from 'react'
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

function CharacterList({characters , setSelectedCharacter}) {
  return (
    <section className="characters-list">
        {characters.map((character)=> { return <Character key={character.id} character={character} setSelectedCharacter = {setSelectedCharacter}/>}).slice(0,4)}
    </section>
  )
}

export default CharacterList

function Character({character , setSelectedCharacter})
{
    return (
        <div className="character">
        <img src={character.image} alt="Character Image" className="character-image"/>
        <div className="character-details">
            <div className="character-content">
                <h2 className="character-name"><span className="character-icon">{character.gender == "Male" ? "👨‍🦳" : "👩‍🦳"}</span>{character.name}</h2>
                <p className="character-status"><span className="character-status_icon">{character.status == "Alive" ? "🟢" : "🔴"}</span>{character.status} - {character.species}</p>
            </div>
            <button 
            className="character-info"
            onClick={()=> setSelectedCharacter(character.id)}
            >
                <EyeIcon className="character-info_icon"/>
            </button>
        </div>
    </div>
    )
}