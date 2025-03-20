import React from 'react'
import { ArrowUpCircleIcon} from "@heroicons/react/24/outline";

function CharacterDetail({character , episodes}) {
  if(!character) return <p>No Character Selected !!</p>
  return (
    <section className="character-detail">
    <Character character = {character}/>
    <EpisodeList episodes = {episodes}/>
    </section>
  )
}

export default CharacterDetail

function EpisodeList({episodes})
{
    return(
        <div className="charcter-episodes_list">
        <div className="character-episodes_header">
            <h2 className="character-episodes_title">List of Episodes:</h2>
            <button className="character-episode_sort">
            <ArrowUpCircleIcon className="character-episode_sort-icon"/>
            </button>
        </div>
        <ul className="character-episode_list">
        {episodes.map((episode , index)=>{return <Episode key={index} episode = {episode} id = {index}/>})}
        </ul>
    </div>
    )
}

function Character({character})
{
    return(
        <div className="charcter-detail_info">
        <img src={character.image} alt="Character Picture" className="character-detail_image"/>
        <div className="character-detail_content">
            <h2 className="character-detail_name"><span className="character-detail_icon">👨‍🦳</span>{character.name}</h2>
            <p className="character-detail_status"><span className="character-detail_status-icon">🟢</span>{character.status} - {character.gender}</p>
            <p className="character-detail_location">Last known location:</p>
            <h3 className="character-detail_location-name">{character.location.name}</h3>
            <button className="character-detail_addfavouriets">Add to Favourite</button>
        </div>
    </div>
    );
}

function Episode({episode,id})
{
    return(
        <li className="character-episode_item">
        <div className="character-episode_item-info">
            <span className="character-episode_number">{String(id+1).padStart(2,"0")} - {episode.episode} :</span>
            <h3 className="character-episode_title">{episode.name}</h3>
        </div>
        <p className="character-episode_date">{episode.air_date}</p>
        </li>
    );
}