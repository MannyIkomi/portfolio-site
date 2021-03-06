/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"
import { colors } from "../styles"

export const ResumeSection = props => {
  const { children, heading, ...rest } = props
  return (
    <section
      css={{
        // borderTop: 'solid',
        margin: "4vh 0",
        padding: "0 1rem",
      }}
      {...rest}
    >
      <h1
        css={{
          fontWeight: "100",
          margin: "1rem 0",
          textAlign: "right",
          color: colors.NAVY_BLUE,
        }}
      >
        {heading}
      </h1>
      {children}
    </section>
  )
}
