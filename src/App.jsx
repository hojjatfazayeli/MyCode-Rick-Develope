import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import axios from 'axios'
import CharacterList from './components/CharacterList';
import Search from './components/Search';
import toast, { Toaster } from 'react-hot-toast';
import CharacterDetail from './components/CharacterDetail';

function App() {
  const [characters , setCharacters] = useState([]);
  const [search , setSearch] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [character , setCharacter] = useState(null);
  const [episodes , setEpisodes] = useState([]);

  useEffect(()=>{
    async function fetchData(){
      try{
        const {data} = await axios.get('https://rickandmortyapi.com/api/character/');
        setCharacters(data.results);
      }
      catch(error){
        toast.error(error.message);
      }
      }
      fetchData();

  }, []);

  useEffect(()=>{
    async function fetchSearch(){
      try{
        const {data} = await axios.get(`https://rickandmortyapi.com/api/character/?name=${search}`);
        setCharacters(data.results);
      }
      catch(error){
        toast.error(error.message);
        setCharacters([]);
      }
    }
    fetchSearch();
  } , [search]);

  useEffect(()=>{
    async function fetchCharacter()
    {
      try{
        const {data} = await axios.get(`https://rickandmortyapi.com/api/character/${selectedCharacter}`);
        setCharacter(data);

        const episodesId = data.episode.map((item)=> item.split("/").at(-1));
        const {data: episodesData} = await axios.get(`https://rickandmortyapi.com/api/episode/${episodesId}`);
        setEpisodes([episodesData].flat().slice(0,6));
      }
      catch(error){
        toast.error(error.message);
        setCharacter(null);
      }
    }

    fetchCharacter();
  } , [selectedCharacter]);

  return (
    <>
    <Toaster/>
    <Header character = {characters.length}>
      <Search search = {search} setSearch = {setSearch}/>
    </Header>
    <Main>
      <CharacterList characters={characters} setSelectedCharacter= {setSelectedCharacter}/>
      <CharacterDetail character = {character} episodes = {episodes}/>
    </Main>
    </>
  )
}


export default App
