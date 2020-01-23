/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { colors, flex } from "../styles"
export const SectionBlock = props => {
  const { children, ...rest } = props
  return (
    <section
      css={{
        ...flex("column"),
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        backgroundColor: colors.muteGray,
      }}
      {...rest}
    >
      {children}
    </section>
  )
}