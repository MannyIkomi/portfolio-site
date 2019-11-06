/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'

// Components
import Logo, { LogoType } from '../logo'
import { InlineLink } from '../InlineLink'
import { MenuBar, NavContainer, NavLink } from './navigation'
import { MenuButton } from './MenuButton'

import { getPages } from '../../util/navigation'
import { mixin, measure, colors, typography } from '../../styles'

export const DockedMenu = props => {
  const { menuToggled, handleMenuToggle, persistOnDesktop } = props
  const animateToggle = css`
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
    transition-property: transform, opacity;
    transform-origin: right center;
    transform: rotateY(180deg);
  `
  const dockedNavToggled = css`
    z-index: 999;
    position: fixed;
    bottom: 0;

    ${mixin.flex('column')}
    flex-wrap: nowrap;
    align-items: flex-end;
    justify-content: flex-end;
    ${animateToggle}
    ${
      menuToggled
        ? 'transform: rotateY(0); opacity: 1; pointer-events: auto;'
        : 'opacity: 0; pointer-events: none;'
    }
    ${mixin.size('100vw', '100%')};

    height: 100vh;
    // padding: calc(${measure.menubarHeight} + 1rem) 1rem;
    padding: ${measure.menubarHeight} 1rem;

    background: ${colors.muteGray};
    background: url('/static/nav-bg.svg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom center;

    font-family: ${typography.serif};

    @media (${measure.tabletMediaWidth}), @media (hover: hover){
      
        bottom: initial;
        top: 0;
        right: 0;

        flex-wrap: nowrap;
        justify-content: flex-start;
        width: 66%;

        background: ${colors.muteGray};
        background: url('/static/nav-bg-top-right.svg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top right;
      
    }

    @media screen and (orientation: landscape) and (max-height: 450px) {
      background: ${colors.muteGray};
      width:100%;
      ${mixin.flex('row')}
      flex-wrap: wrap;
      align-items: flex-end;
      justify-content: flex-end;
    }
  `

  return (
    <section
      css={css`
        z-index: 999;
        position: fixed;
        bottom: 0;
        left: 0;
        @media (hover: hover), (${measure.tabletMediaWidth}) {
          @media (${measure.tabletMediaWidth}) {
            top: 0;
            bottom: initial;
          }
        }
        @media (${measure.desktopMediaWidth}) {
          ${persistOnDesktop ? null : 'display: none;'}
        }
      `}
    >
      <MenuBar
        styles={css`
          z-index: 1000;
          position: relative;
          padding: 0.5rem;

          ${mixin.flex('row')}
          ${mixin.size('100vw', measure.menubarHeight)};
          justify-content: space-between;

          background-color: ${colors.muteGray};
          box-shadow: 0rem -0.25rem 0.25rem 0px rgba(38, 38, 38, 0.25);
          @media (hover: hover), (${measure.tabletMediaWidth}) {
            box-shadow: 0rem 0.25rem 0.25rem 0px rgba(38, 38, 38, 0.25);
          }
        `}
      >
        <LogoType />
        <MenuButton handleToggle={handleMenuToggle} isToggled={menuToggled} />
      </MenuBar>
      <NavContainer styles={dockedNavToggled}>
        {getPages().map(page => (
          <InlineLink
            href={page.href}
            styles={{
              display: 'block',
              color: colors.darkGray,
              padding: '0.5rem 0',
              margin: '0.5rem 0',
              fontSize: '1.5rem'
            }}
          >
            {page.title}
          </InlineLink>
        ))}
        {/* <NavLink
          pages={getPages()}
          styles={css`
            @media screen and (orientation: landscape) and (max-height: 450px) {
              padding: 0.5rem;
              margin: 0.5rem;
            }
            @media (hover: hover), (${measure.tabletMediaWidth}) {
              // box-shadow: 0rem 0.25rem 0.25rem 0px rgba(38, 38, 38, 0.2);
              font-size: 1.5rem;
            }
          `}
        /> */}
      </NavContainer>
    </section>
  )
}

DockedMenu.propTypes = {
  persistOnDesktop: PropTypes.bool.isRequired,
  handleMenuToggle: PropTypes.func.isRequired,
  menuToggled: PropTypes.bool.isRequired
}

export default DockedMenu
