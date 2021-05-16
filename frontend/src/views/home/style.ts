import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../assets/style'

export const Header = styled.header`
  background: #0b0e11;
`

export const Banner = styled.div`
  margin: auto;
  padding: 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  max-width: 1024px;
  & > * {
    @media screen and (max-width: 568px) {
      width: 100%;
    }
    width: 50%;
  }
`

export const Title = styled.h1`
  font-size: 36px;
  color: white;
`

export const SubTitle = styled.div`
  margin-top: 24px;
  color: gray;
  font-weight: bold;
`

export const Button = styled(Link)`
  display: inline-block;
  margin-top: 72px;
  padding: 12px 36px;
  border-radius: 6px;
  background-color: ${ colors.active };
`

export const Images = styled.img`
  height: auto;
  vertical-align: middle;
`