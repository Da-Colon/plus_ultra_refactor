import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GamesTitle = styled.h2`
  color: white;
`

export const Image = styled.img`
  border-radius: 1rem;
  max-width: 100%;
  height: 100%;
`

export const IconImage = styled.img`
  width: 75px;
  height: 75px;
`

export const NavLink = styled(Link)`
    text-decoration: none;
    font-size: 24px;
    letter-spacing: 6px;
    text-shadow: 1px 1px 2px rgba(0,0,0,5), 2px 3px rgba(0,0,0,0.5);
    color: white;

    :hover{
      transform: scale(1.2)
    }
`