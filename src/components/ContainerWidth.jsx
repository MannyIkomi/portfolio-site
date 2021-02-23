/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { MAX_CONTAINER_WIDTH, MAX_TEXT_WIDTH } from "../styles"

export const ContainerWidth = props => {
  const { children, ...rest } = props
  return (
    <div className={"content"} css={{ ...MAX_CONTAINER_WIDTH }} {...rest}>
      {children}
    </div>
  )
}
