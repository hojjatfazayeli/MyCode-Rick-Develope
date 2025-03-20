import React from 'react'

function Main() {
  return (
    <main className="main">
        <section className="characters-list">
            <div className="character">
                <img src="../../public/1.jpeg" alt="Character Image" className="character-image"/>
                <div className="character-details">
                    <div className="character-content">
                        <h2 className="character-name"><span className="character-icon">👨‍🦳</span>Rick Sanchez</h2>
                        <p className="character-status"><span className="character-status_icon">🟢</span>Alive - Human</p>
                    </div>
                    <button className="character-info">
                        <svg className="character-info_icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    </button>
                </div>
            </div>
        </section>
        <section className="character-detail">
            <div className="charcter-detail_info">
                <img src="../../public/2.jpeg" alt="Character Picture" className="character-detail_image"/>
                <div className="character-detail_content">
                    <h2 className="character-detail_name"><span className="character-detail_icon">👨‍🦳</span>Rick Sanchez</h2>
                    <p className="character-detail_status"><span className="character-detail_status-icon">🟢</span>Alive - Human</p>
                    <p className="character-detail_location">Last known location:</p>
                    <h3 className="character-detail_location-name">Citadel of Ricks</h3>
                    <button className="character-detail_addfavouriets">Add to Favourite</button>
                </div>
            </div>
            <EpisodeList/>
        </section>
    </main>
  )
}

export default Main

function EpisodeList()
{
    return(
        <div className="charcter-episodes_list">
        <div className="character-episodes_header">
            <h2 className="character-episodes_title">List of Episodes:</h2>
            <button className="character-episode_sort">
            {/* <svg className="character-episode_sort-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="icon" style="rotate: 0deg;"><path stroke-linecap="round" stroke-linejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> */}
            </button>
        </div>
        <ul className="character-episode_list">
            <li className="character-episode_item">
                <div className="character-episode_item-info">
                    <span className="character-episode_number">01 - S01E01 :</span>
                    <h3 className="character-episode_title">Pilot</h3>
                </div>
                <p className="character-episode_date">December 2, 2013</p>
            </li>
        </ul>
    </div>
    )
}