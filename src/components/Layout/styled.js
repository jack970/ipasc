import styled from 'styled-components'
import media from 'styled-media-query'

export const LayoutWrapper = styled.section`
    position: relative;
    background: var(--white);
    transition: all .25s ease-in-out !important;

    ${media.lessThan("large")`
        position: absolute;
    `}
`

export const LayoutMain = styled.main`
    display: block;
    float: none;
    color: var(--texto);
    margin: 0 auto;
    min-height: 100vh;
    padding: 8rem 6.75rem 13rem;
    max-width: 100rem;
    
    ${media.lessThan("large")`
        padding: 8rem 0 22rem;
    `}
`