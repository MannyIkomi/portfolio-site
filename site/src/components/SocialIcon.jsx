import React from "react"
import { colors, typesetInteraction, touchTarget } from "../styles"
export const SocialIcon = ({
  platform,
  href,
  alt,
  styles,
  color,
  ...props
}) => {
  const matchIconWith = platform => {
    switch (platform) {
      case "Behance":
        return (
          <svg viewBox="0 0 42.813 26.829" xmlns="http://www.w3.org/2000/svg">
            <title>be</title>
            <g data-name="Layer 2">
              <g data-name="Layer 1">
                <path d="m12.416 0a16.206 16.206 0 0 1 3.435 0.334 7.4778 7.4778 0 0 1 2.66 1.087 5.0862 5.0862 0 0 1 1.719 2.008 7.0823 7.0823 0 0 1 0.603 3.09 5.7699 5.7699 0 0 1-0.903 3.318 6.5486 6.5486 0 0 1-2.687 2.172 6.2889 6.2889 0 0 1 3.617 2.453 7.3135 7.3135 0 0 1 1.191 4.227 7.3013 7.3013 0 0 1-0.766 3.452 6.7218 6.7218 0 0 1-2.083 2.385 9.16 9.16 0 0 1-2.996 1.366 13.37 13.37 0 0 1-3.442 0.443h-12.764v-26.335h12.416m-0.75 10.64a4.1936 4.1936 0 0 0 2.551-0.739 2.7669 2.7669 0 0 0 0.991-2.395 3.1283 3.1283 0 0 0-0.324-1.512 2.3908 2.3908 0 0 0-0.893-0.916 3.6013 3.6013 0 0 0-1.277-0.462 7.7324 7.7324 0 0 0-1.491-0.13h-5.425v6.154zm0.32 11.21a7.4641 7.4641 0 0 0 1.626-0.165 3.8554 3.8554 0 0 0 1.366-0.559 2.7887 2.7887 0 0 0 0.943-1.051 3.6454 3.6454 0 0 0 0.346-1.707 3.4386 3.4386 0 0 0-1.141-2.906 4.8925 4.8925 0 0 0-3.024-0.864h-6.304v7.252z" />
                <path d="m30.317 21.762a4.6587 4.6587 0 0 0 3.387 1.152 4.6709 4.6709 0 0 0 2.735-0.8 3.3671 3.3671 0 0 0 1.4-1.69h4.612a8.7455 8.7455 0 0 1-3.401 4.92 9.8924 9.8924 0 0 1-5.521 1.485 10.996 10.996 0 0 1-4.067-0.722 8.6564 8.6564 0 0 1-3.08-2.051 9.3849 9.3849 0 0 1-1.936-3.177 11.652 11.652 0 0 1-0.685-4.065 11.208 11.208 0 0 1 0.704-3.989 9.244 9.244 0 0 1 5.087-5.321 9.9044 9.9044 0 0 1 3.977-0.776 9.0212 9.0212 0 0 1 4.237 0.943 8.4439 8.4439 0 0 1 2.974 2.526 10.371 10.371 0 0 1 1.676 3.619 13.527 13.527 0 0 1 0.364 4.246h-13.76a5.3384 5.3384 0 0 0 1.297 3.7m6.018-10.018a3.9192 3.9192 0 0 0-2.963-1.062 4.5004 4.5004 0 0 0-2.084 0.428 4.1959 4.1959 0 0 0-1.326 1.051 3.7586 3.7586 0 0 0-0.703 1.343 6.062 6.062 0 0 0-0.239 1.257h8.522a5.098 5.098 0 0 0-1.207-3.017z" />
                <rect x="27.949" y="1.767" width="10.675" height="2.599" />
              </g>
            </g>
          </svg>
        )
      case "Twitter":
        return (
          <svg
            enableBackground="new 0 0 112.2 112.2"
            version="1.1"
            viewBox="0 0 112.2 112.2"
            // xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m56.1 0c-31 0-56.1 25.1-56.1 56.1s25.1 56.1 56.1 56.1 56.1-25.1 56.1-56.1-25.1-56.1-56.1-56.1zm27.9 47.3v1.7c0 17.8-13.5 38.2-38.2 38.2-7.6 0-14.7-2.2-20.6-6 1.1 0.1 2.1 0.2 3.2 0.2 6.3 0 12.1-2.1 16.7-5.7-5.8-0.1-10.8-4-12.5-9.3 0.8 0.1 1.6 0.2 2.5 0.2 1.2 0 2.4-0.2 3.5-0.5-6.2-1.2-10.8-6.6-10.8-13.1v-0.2c1.8 1 3.9 1.6 6.1 1.7-3.6-2.4-6-6.5-6-11.2 0-2.4 0.6-4.7 1.8-6.7 6.6 8.1 16.5 13.4 27.6 14-0.2-1-0.3-2-0.3-3.1 0-7.4 6-13.4 13.4-13.4 3.9 0 7.4 1.6 9.8 4.2 3-0.6 5.9-1.8 8.5-3.3-1 3.1-3.1 5.7-5.9 7.4 2.7-0.3 5.3-1 7.7-2.1-1.8 2.7-4.1 5.1-6.5 7z" />
          </svg>
        )
      case "Instagram":
        return (
          <svg viewBox="0 0 51.018 51.018" xmlns="http://www.w3.org/2000/svg">
            <title>ig</title>
            <g data-name="Layer 2">
              <g data-name="Layer 1">
                <path d="m25.509 4.5962c6.8112 0 7.6179 0.026 10.308 0.1487a14.115 14.115 0 0 1 4.7366 0.87835 7.9035 7.9035 0 0 1 2.933 1.9082 7.9033 7.9033 0 0 1 1.9082 2.9331 14.115 14.115 0 0 1 0.87835 4.7366c0.12272 2.6899 0.1487 3.4966 0.1487 10.308s-0.026 7.6179-0.1487 10.308a14.115 14.115 0 0 1-0.87835 4.7366 8.4476 8.4476 0 0 1-4.8412 4.8412 14.115 14.115 0 0 1-4.7366 0.87835c-2.6894 0.12272-3.4961 0.1487-10.308 0.1487s-7.6183-0.026-10.308-0.1487a14.115 14.115 0 0 1-4.7366-0.87835 7.9032 7.9032 0 0 1-2.933-1.9082 7.9035 7.9035 0 0 1-1.9082-2.9331 14.115 14.115 0 0 1-0.87835-4.7366c-0.12272-2.6898-0.1487-3.4966-0.1487-10.308s0.026-7.6179 0.1487-10.308a14.115 14.115 0 0 1 0.87835-4.7366 7.9035 7.9035 0 0 1 1.9082-2.933 7.9036 7.9036 0 0 1 2.9331-1.9082 14.115 14.115 0 0 1 4.7366-0.87835c2.6899-0.12272 3.4966-0.1487 10.308-0.1487m0-4.5962c-6.9278-3e-5 -7.7965 0.02931-10.517 0.15345a18.723 18.723 0 0 0-6.192 1.1857 12.504 12.504 0 0 0-4.5182 2.9422 12.504 12.504 0 0 0-2.9422 4.5181 18.723 18.723 0 0 0-1.1857 6.192c-0.12414 2.7208-0.15348 3.5895-0.15348 10.517s0.02934 7.7965 0.15348 10.517a18.723 18.723 0 0 0 1.1857 6.192 12.504 12.504 0 0 0 2.9422 4.5182 12.504 12.504 0 0 0 4.5181 2.9422 18.723 18.723 0 0 0 6.192 1.1857c2.7208 0.12416 3.5894 0.15348 10.517 0.15348s7.7965-0.02932 10.517-0.15348a18.723 18.723 0 0 0 6.192-1.1857 13.044 13.044 0 0 0 7.4604-7.4604 18.723 18.723 0 0 0 1.1857-6.192c0.12414-2.7208 0.15348-3.5894 0.15348-10.517s-0.02934-7.7965-0.15348-10.517a18.723 18.723 0 0 0-1.1857-6.192 12.504 12.504 0 0 0-2.9421-4.5182 12.504 12.504 0 0 0-4.5181-2.9422 18.723 18.723 0 0 0-6.192-1.1857c-2.7208-0.12414-3.5895-0.15348-10.517-0.15348z" />
                <path d="m25.509 12.41a13.099 13.099 0 1 0 13.099 13.099 13.099 13.099 0 0 0-13.099-13.099zm0 21.602a8.5029 8.5029 0 1 1 8.5029-8.5029 8.5029 8.5029 0 0 1-8.5029 8.5029z" />
                <circle cx="39.126" cy="11.892" r="3.0611" />
              </g>
            </g>
          </svg>
        )
      case "LinkedIn":
        return (
          <svg viewBox="0 0 25.767 25.72" xmlns="http://www.w3.org/2000/svg">
            <title>in</title>
            <g data-name="Layer 2">
              <g data-name="Layer 1">
                <rect x=".4248" y="8.54" width="5.3438" height="17.18" />
                <path d="m3.0977 6.1928a3.0964 3.0964 0 1 1 3.0947-3.0966 3.0951 3.0951 0 0 1-3.0947 3.0966z" />
                <path d="m25.767 25.72h-5.3378v-8.3545c0-1.9922-0.0352-4.5552-2.7754-4.5552-2.7784 0-3.2022 2.1714-3.2022 4.4126v8.4971h-5.333v-17.18h5.1182v2.3486h0.0732a5.6105 5.6105 0 0 1 5.0527-2.7749c5.4053 0 6.4043 3.5572 6.4043 8.1841z" />
              </g>
            </g>
          </svg>
        )
      default:
        return new Error(
          `"${platform}" SVG Icon does not exist, add new switch case using inline <svg>`
        ).toString()
    }
  }
  return (
    <a
      href={href}
      title={alt}
      css={{
        display: "block",
        width: "100%",
        height: "auto",
        // ...mixin.size("100%", "auto"),
        padding: "0.25rem",
        // maxWidth: "2rem",
        minHeight: touchTarget,
        minWidth: touchTarget,

        svg: {
          ...typesetInteraction,
          "&:hover": {
            fill: colors.orange,
          },
        },
      }}
      {...props}
    >
      {matchIconWith(platform)}
    </a>
  )
}
