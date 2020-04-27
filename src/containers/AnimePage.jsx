import React, {useState, useEffect} from 'react'
import Component from '../components/animePage'
import get from '../utils/get'

export default function AnimePage() {
  const [animes, setAnimes] = useState([])
  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    (async () => {
      const response = await get(`https://kitsu.io/api/edge//anime?page[limit]=5&page[offset]=10`)
      setAnimes(response.data)
    })()
  },[])

  const handleYoutubeLink = (youtubeLink, animeName) => {
    if(!youtubeLink){
      return `https://www.youtube.com/results?search_query=${animeName}`
    }
    return `https://www.youtube.com/watch?v=${youtubeLink}`
  }

  const handleSearchChange = e => {
    setSearchValue(e.target.value)
  }

  const handleSearchSubmit = async e => {
    e.preventDefault()
      const title = searchValue.replace(/\s/g, "-")
      const response = await get(`https://kitsu.io/api/edge/anime?filter[text]=${title}`)
      response.data.length ? (
        setAnimes(response.data)
      ) : (
        alert("Anime Not Found")
      )
  }

  return (
    <>
     <Component 
      animes={animes} 
      handleYoutubeLink={handleYoutubeLink}
      handleSearchChange={handleSearchChange}
      handleSearchSubmit={handleSearchSubmit}
      searchValue={searchValue}
      /> 
    </>
  )
}
