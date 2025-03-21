import React from 'react'

function Character({character ,setFavourite}) {
    if (!character) return <p>No Character Found ... </p>
    return(
        <div className="charcter-detail_info">
        <img src={character.image} alt="Character Picture" className="character-detail_image"/>
        <div className="character-detail_content">
            <h2 className="character-detail_name"><span className="character-detail_icon">👨‍🦳</span>{character.name}</h2>
            <p className="character-detail_status"><span className="character-detail_status-icon">🟢</span>{character.status} - {character.gender}</p>
            <p className="character-detail_location">Last known location:</p>
            <h3 className="character-detail_location-name">{character.location.name}</h3>
            <button 
            className="character-detail_addfavouriets"
            onClick={()=>setFavourite((prev) => [...prev, 
            {
                id: character.id,
                name: character.name,
                status: character.status,
                image: character.image,
                gender: character.gender,
                location: character.location.name,
                species: character.species,
            }
            ])}
            >Add to Favourite</button>
        </div>
    </div>
    );
}

export default Character