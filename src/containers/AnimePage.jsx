import React, {useState, useEffect} from 'react'
import Component from '../components/animePage'
import get from '../utils/get'

export default function AnimePage() {
  const [animes, setAnimes] = useState([])

  useEffect(() => {
    (async () => {
      const response = await get(`https://kitsu.io/api/edge//anime?page[limit]=5&page[offset]=10`)
      setAnimes(response.data)
    })()
  })

  const handleYoutubeLink = (youtubeLink, animeName) => {
    if(!youtubeLink){
      return `https://www.youtube.com/results?search_query=${animeName}`
    }
    return `https://www.youtube.com/watch?v=${youtubeLink}`
  }

  return (
    <>
     <Component 
      animes={animes} 
      handleYoutubeLink={handleYoutubeLink}
      /> 
    </>
  )
}
