import { colors } from "./colors"
import { onTabletMedia, onDesktopMedia } from "./mixin"

import { CODE_TYPE } from './typography'

export const MENUBAR_HEIGHT = "2.5rem"
export const TOUCH_TARGET = "3rem"
export const PROJECT_SHADOW = `0rem 1rem 1rem 0.5rem hsla(0, 0%, 0%, 0.5)`

export const tokenize = override => ({
  display: "inline-block",
  padding: "0.1rem 0.33rem",
  color: colors.LIGHT_GRAY,
  backgroundColor: colors.PRIMARY,
  ...override,
})

export const styleTransition = (override = {}) => ({
  transitionDuration: "300ms",
  transitionTimingFunction: "ease-in-out",
  transitionProperty:
    "transform, opacity, color, filter, background-color, fill",
  ...override,
})

export const MAX_TEXT_LENGTH = '72ch'
export const MAX_VIEW_LENGTH = '80rem' // about 1280px

export const maxTypeWidth = {
  maxWidth: MAX_TEXT_LENGTH,
}
export const maxContainerWidth = {
  maxWidth: MAX_VIEW_LENGTH, 
}

export const aspectRatioLetter = {
  height: 0,
  // change this to aspect-ratio property
  // https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio
  paddingBottom: "calc(100% * (17 / 22) - 1px)",
}

export const h1Text = override => ({
  fontSize: "2rem",
  color: colors.ACCENT,
  ...onTabletMedia({
    fontSize: "2.5rem",
  }),
  ...onDesktopMedia({
    fontSize: "3rem",
  }),
})

export const linkActive = (override = {}) => ({
  color: colors.ACCENT,
  ...override,
})

export * from './globalStyles'
export * from "./colors"
export * from "./mixin"
export * from "./reset"
export * from './typography'

