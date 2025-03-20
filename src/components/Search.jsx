import React from 'react'

function Search({ search , setSearch}) {
    return(
        <input 
        type="text"
        className="header-search" 
        placeholder="search..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}  
        />
      )
}

export default Search