import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import media from 'styled-media-query'

export const PostItemLink = styled(Link)`
    color: var(--black);
    text-decoration: none;
    width: auto;
    -webkit-tap-highlight-color: transparent;
    transition: all .25s ease-in-out !important;
    display: inline-block;
    width: 100%;
    
    &:hover {
        color: #1fa1f2;
    }
    
    &:before {
        background-color: #c8c8c8;
        content: "";
        display: block;
        height: 1px;
        margin-top: 32px;
    }`

export const PostItemWrapper = styled.section`
    margin: 40px 0 0
    `

export const PostItemInfo = styled.div`
    font-weight: 700;
    padding: 2rem 2rem 0;

`

export const PostItemImage = styled(Img)`
    height: 30rem;
    width:  35rem;
    border-radius: 2%;

    ${media.lessThan("large")`
        width: inherit;
    `}
`

export const PostItemTitle = styled.h1`
    display: flex;
    font-weight: 700;
    font-size: 2rem;
    
`

export const PostItemDescription = styled.p`
    margin-left: 1.5rem;
    margin: 0.2rem 0 0.5rem;
`

export const PostItemDate = styled.time`
    font-size: 0.9rem;
`