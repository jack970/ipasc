import styled from 'styled-components'
import media from 'styled-media-query'

export const InnerHeaderWrapper = styled.aside`
    -webkit-tap-highlight-color: transparent;
    background: var(--MenuInner);
    top: 2.5rem;
    width: 100%;
    height: auto;
    box-shadow: 0 1px 2px rgba(0,0,0,0.2);
    z-index: 1;

    #mobile {
        display: none;
    }

    &[data-active='true'] {
	    position: sticky;
        top: 0;
    }

    ${media.lessThan("large")`
        display: block;
	    position: sticky;
        top: 0;
        text-align: center;        
    `}
`

export const InnerPosition = styled.div`
    display: flex;
    margin: 0 auto;
    max-width: 100rem;
    padding: 0 7rem;

    ${media.lessThan("large")`
        padding: 0;
    `}
`

export const LogoContainer = styled.div`
    max-width: 25%;
    transition: all ease .3s;
    ${media.lessThan("large")`
        width: 100%;
        max-width: none;
        display: inline-flex;
        justify-content: space-between;
        padding: 2rem 0 2rem;
        #mobile {
            display: block;
        }

        &[data-active='true'] {
            padding: 1rem 0 1rem;
        }    
    `}
`

export const Title = styled.h1`
        margin-top: 5px;
        font-size: 3rem;
        text-align: center;
        color: var(--black);
        font-family: Impact, Charcoal, sans-serif;
`

export const Description = styled.p`
        font-size: .7rem;
        text-align: center;
        color: var(--black);
        width: 15rem;
`

export const MenuContainer = styled.div`
    padding-top: 2.6rem;
    width: 100%;

    ${media.lessThan("large")`
        padding: 0;
        display: none;
    `}
`