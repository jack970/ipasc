import React from 'react'
import LogoHeader from '../LogoHeader'
import * as S from './styled'
import MenuLink from '../MenuInnerHeader'
import MenuMobile from '../MenuMobile'

const InnerHeader = () => (
    <S.InnerHeaderWrapper>
        <S.LogoContainer>
            <LogoHeader />
            <div id='mobile'>
                <MenuMobile class='.mobile' />
            </div>
        </S.LogoContainer>
        <S.MenuContainer class='.active'>
            <MenuLink /> 
        </S.MenuContainer>
    </S.InnerHeaderWrapper>
)

export default InnerHeader