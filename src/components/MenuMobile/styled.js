import styled from 'styled-components'

export const MenuWrapper = styled.div`
    body {
        background-color: #f9f9f9;
        margin: 0;
        padding: 0;
    }
    a {
        text-decoration: none;
        color: #1E1E23;
        opacity:1;
        transition: 200ms;
    }
    a:hover {
        opacity:0.5;
    }
    ul {
        padding: 0;
        list-style-type: none;
    }
    .container {
        display: flex;
        justify-content: left;
        align-items: center;
    }

    .content {
        width: 94%;
        height: 91%;
    }
    nav {
        height: 65px;
        width: 75px;
    }
    
    
    #menuToggle {
        display: flex;
        flex-direction: column;
        position: relative;
        top: 25px;
        left: 25px;
        z-index: 1;
        -webkit-user-select: none;
        user-select: none;
    }
    
    #menuToggle input
    {
        display: flex;
        width: 40px;
        height: 32px;
        position: absolute;
        cursor: pointer;
        opacity: 0;
        z-index: 2;
    }
    
    #menuToggle span
    {
        display: flex;
        width: 29px;
        height: 2px;
        margin-bottom: 5px;
        position: relative;
        background: #1E1E23;
        border-radius: 3px;
        z-index: 1;
        transform-origin: 5px 0px;
        transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                    background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                    opacity 0.55s ease;
    }
    
    #menuToggle span:first-child
    {
        transform-origin: 0% 0%;
    }
    
    #menuToggle span:nth-last-child(2)
    {
        transform-origin: 0% 100%;
    }
    
    #menuToggle input:checked ~ span
    {
        opacity: 1;
        transform: rotate(45deg) translate(-3px, -1px);
        background: #36383F;
    }
    #menuToggle input:checked ~ span:nth-last-child(3)
    {
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
    }
    
    #menuToggle input:checked ~ span:nth-last-child(2)
    {
        transform: rotate(-45deg) translate(0, -1px);
    }
    
    #menu
    {
        display:none;
        position: absolute;
        width: 210px;
        box-shadow: 0 0 10px #85888C;
        margin: -60px 0 0 -450px;
        padding: 250px 110px 0 230px;
        padding-top: 25px;
        background-color: #F5F6FA;
       
    }
    
    #menu li
    {
        padding: 10px 0;
        transition-delay: 2s;
        text-transform: uppercase;
        text-align: left;
    }
    
    #menuToggle input:checked ~ ul
    {
        display: block;
        transform: none;
    }`

export const Title = styled.p`
    font-size: 1.5em;
    font-weight: 700;
`