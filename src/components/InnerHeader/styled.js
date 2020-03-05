import styled from 'styled-components'
import media from 'styled-media-query'

export const InnerHeaderWrapper = styled.aside`
    -webkit-tap-highlight-color: transparent;
    background: var(--MenuInner);
    top: 2.5rem;
    width: 100%;
    height: auto;
    box-shadow: 0 1px 2px rgba(0,0,0,0.2);
    position: fixed;
    z-index: 1;
    transition: all .25s ease-in-out !important;

    #mobile {
        display: none;
    }

    ${media.lessThan("large")`
        display: block;
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

    ${media.lessThan("large")`
        width: 100%;
        max-width: none;
        display: inline-flex;
        justify-content: space-between;
        padding: 2rem 0 2rem;
        #mobile {
            display: block;
        }
    `}
`
export const MenuContainer = styled.div`
    padding-top: 2.6rem;
    width: 100%;

    ${media.lessThan("large")`
        padding: 0;
        display: none;
    `}
`