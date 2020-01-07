import {
  tabletMediaQuery,
  colors,
  typography,
  desktopMediaQuery,
} from "./index"

export const onMedia = (query = "", styles = {}) => ({
  [`@media (${query})`]: {
    ...styles,
  },
})
export const supportsGrid = ({ display = "grid", ...hasSupport }) => ({
  "@supports (display: grid)": {
    display: display,
    ...hasSupport,
  },
})

export const onTabletMedia = (tabletStyles = {}) => ({
  [tabletMediaQuery]: {
    ...tabletStyles,
  },
})

export const onDesktopMedia = (desktopStyles = {}) => ({
  [desktopMediaQuery]: {
    ...desktopStyles,
  },
})

export const flex = (direction = "column") => ({
  display: "flex",
  flexDirection: direction,
})

export const onMediaWidth = (width = "0px", styles = {}) => ({
  [`@media screen and (min-width: ${width})`]: {
    ...styles,
  },
})

export const positionSticky = (top = 0) => ({ position: "sticky", top })
