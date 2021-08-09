import { jsx } from "@emotion/react"
import { Link } from "gatsby"
import { Elements } from "prismic-richtext"
import { Link as PrismicLink } from "prismic-reactjs"
import { ImageSlice } from "./ImageSlice"

// modified from https://prismic.io/docs/technologies/html-serializer-reactjs
// -- HTML Serializer
export const htmlSerializer = function(raw) {
  const { type, element, content, children, key } = raw

  switch (type) {
    case Elements.heading1: // Heading 1
      return <h1 key={key}>{children}</h1>

    case Elements.heading2: // Heading 2
      return <h2 key={key}>{children}</h2>

    case Elements.heading3: // Heading 3
      return <h3 key={key}>{children}</h3>

    case Elements.heading4: // Heading 4
      return <h4 key={key}>{children}</h4>

    case Elements.heading5: // Heading 5
      return <h5 key={key}>{children}</h5>

    case Elements.heading6: // Heading 6
      return <h6 key={key}>{children}</h6>

    case Elements.paragraph: // Paragraph
      return <p key={key}>{children}</p>

    case Elements.preformatted: // Preformatted
      return <pre key={key}>{children}</pre>

    case Elements.strong: // Strong
      return <strong key={key}>{children}</strong>

    case Elements.em: // Emphasis
      return <em key={key}>{children}</em>

    case Elements.listItem: // Unordered List Item
    case Elements.oListItem: // Ordered List Item
      return <li key={key}>{children}</li>

    case Elements.list: // Unordered List
      return <ul key={key}>{children}</ul>

    case Elements.oList: // Ordered List
      return <ol key={key}>{children}</ol>

    case Elements.image:
      // const linkUrl = element.linkTo
      //   ? element.linkTo.url || linkResolver(element.linkTo)
      //   : null

      return (
        <figure key={key}>
          TEST
          <img src="" alt="" />
          <figcaption>{children}</figcaption>
        </figure>
      )

    // <ImageSlice key={key} {...raw} />
    // <p
    //   key={key}
    //   className={[element.label, "block-img"].filter(Boolean).join(" ")}
    // >
    //   {linkUrl ? (
    //     <a
    //       href={linkUrl}
    //       target={element.linkTo?.target}
    //       rel={element.linkTo?.target ? "noopener" : undefined}
    //     >
    //       <img src={element.url} alt={element.alt || ""} />
    //     </a>
    //   ) : (
    //     <img src={element.url} alt={element.alt || ""} />
    //   )}
    // </p>

    case Elements.embed: // Embed
      return (
        <div
          key={key}
          data-oembed={element.oembed.embed_url}
          data-oembed-type={element.oembed.type}
          data-oembed-provider={element.oembed.provider_name}
          className={element.label}
          __dangerouslySetInnerHTML={{ __html: element.oembed.html }}
        />
      )

    case Elements.hyperlink: // Hyperlinks
      const url = PrismicLink.url(element.data, linkResolver)

      if (element.data.link_type === "Document") {
        return (
          <Link key={key} to={url}>
            {content}
          </Link>
        )
      }

      return (
        <a
          key={key}
          href={url}
          target={element.data.target}
          rel={element.data.target ? "noopener" : undefined}
          className="link-class"
        >
          {children}
        </a>
      )

    case Elements.label: // Label
      return (
        <label key={key} className={element.data.label}>
          {children}
        </label>
      )

    case Elements.span: // Span
      if (content) {
        return content.split("\\n").reduce((acc, p) => {
          if (acc.length === 0) {
            return [p]
          } else {
            const brIndex = (acc.length + 1) / 2 - 1
            return acc.concat([<br key={brIndex} />, p])
          }
        }, [])
      } else {
        return null
      }

    default:
      // Always include a default that returns null
      return null
  }
}

export default htmlSerializer