/** @jsx jsx */
import { jsx } from "@emotion/react"
import React from "react"
import {
  colors,
  maxTypeWidth,
  maxContainerWidth,
  flex,
  imageCaption,
} from "../../styles"
import { switchRichContentToComponent } from "./RichContentSlice"

export const ImageGallerySlice = props => {
  const { primary, items } = props

  return (
    <section css={{ color: colors.PRIMARY, ...maxTypeWidth }}>
      {/* <pre css={{ overflow: "hidden" }}>
            {JSON.stringify(slice, null, 2)}
          </pre> */}
      <div css={{ ...maxTypeWidth }}>
        {primary.gallery_title.map(switchRichContentToComponent)}
      </div>
      <div
        css={[
          {
            // progressive enhance from single column vertical scroll
            width: "100%",

            // maxWidth: "100vw",
            // padding: "2rem",
          },
        ]}
      >
        <div
          css={[
            {
              overflowX: "scroll",
              ...flex("row"),
              flexWrap: "nowrap",
              justifyContent: "initial",
            },
          ]}
        >
          {items.map(photo => (
            <figure
              key={photo.url}
              css={{
                margin: "0 1rem",
              }}
            >
              <img
                css={{
                  minWidth: "15rem",

                  width: "100%",
                  height: "auto",
                  maxWidth: "66vw",
                }}
                alt={photo.image.alt}
                src={photo.image.url}
                width={photo.image.dimensions.width}
                height={photo.image.dimensions.height}
              />
              <figcaption css={[imageCaption]}>
                {photo.image_caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImageGallerySlice