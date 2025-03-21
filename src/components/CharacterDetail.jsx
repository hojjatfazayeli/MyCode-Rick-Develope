import React, { useState } from 'react'
import { ArrowUpCircleIcon} from "@heroicons/react/24/outline";

function CharacterDetail({children , episodes }) {
  return (
    <>
    <section className="character-detail">
        {children}
    <EpisodeList episodes = {episodes}/>
    </section>
        </>
  )
}

export default CharacterDetail

function EpisodeList({episodes})
{
    const [sortBy , setSortBy] = useState(true);
    let sortedEpisodes;
    if(sortBy)
    {
        sortedEpisodes = [...episodes].sort((a,b)=> new Date(b.created) - new Date(a.created));
    } else{
        sortedEpisodes = [...episodes].sort((a,b)=> new Date(a.created) - new Date(b.created));
    }
    return(
        <div className="charcter-episodes_list">
        <div className="character-episodes_header">
            <h2 className="character-episodes_title">List of Episodes:</h2>
            <button 
            className="character-episode_sort"
            onClick={()=> setSortBy(!sortBy)}
            >
            <ArrowUpCircleIcon 
            className="character-episode_sort-icon"
            style={{rotate:sortBy ? "0deg" : "180deg"}}
            />
            </button>
        </div>
        <ul className="character-episode_list">
        {sortedEpisodes.map((episode , index)=>{return <Episode key={index} episode = {episode} id = {index}/>})}
        </ul>
    </div>
    )
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