import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

import { useHoverState } from "../hooks/useHoverState"
import { FillOverlay } from "./FillOverlay"
import { ProjectPhoto } from "./ProjectPhoto"
import {
  aspectRatioLetter,
  typography,
  sansHeading,
  serifHeading,
} from "../styles"

export const ProjectCover = ({
  id,
  name,
  description,
  cover,
  slug,
  title,
  coverAlt,
  ...props
}) => {
  const [isHovered, handleHover] = useHoverState()
  return (
    <figure
      className={"project-cover"}
      css={{
        ...aspectRatioLetter,
        position: "relative",
        overflow: "hidden", // clips aspect ratio overflow
        position: "relative",
        // marginBottom: "4rem",
        width: "100%",
        cursor: "pointer",
      }}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      // {...props}
    >
      <Link to={"/" + slug}>
        <ProjectPhoto src={cover.publicURL} alt={coverAlt} />
        {isHovered && (
          <FillOverlay>
            <figcaption
              css={{
                color: "white",
                h1: {
                  color: "white",
                  ...sansHeading,
                  // fontSize: "2rem",
                  fontWeight: "bold",
                  textTransform: "initial",
                },
                h2: {
                  fontSize: "1rem",
                  textTransform: "initial",
                  ...serifHeading,
                  fontStyle: "italic",
                  fontWeight: 100,
                },
              }}
            >
              <h1>{title}</h1>
              <h2>{description}</h2>
            </figcaption>
          </FillOverlay>
        )}
      </Link>
    </figure>
  )
}

export default ProjectCover