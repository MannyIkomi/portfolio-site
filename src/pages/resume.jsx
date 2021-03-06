/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"
import { graphql } from "gatsby"

import {
  menubarHeight,
  flex,
  colors,
  onDesktopMedia,
  MAX_TEXT_WIDTH,
  maxTypeWidth,
} from "../styles"

import Layout from "../components/Layout"
import HtmlHead from "../components/HtmlHead"
import { StickyScrollContainer } from "../components/StickyScrollContainer"
import { StickyMenuBar } from "../components/StickyMenuBar"
import { TypesetLink } from "../components/TypesetLink"

import { Footer } from "../components/Footer"
import { ContainerWidth } from "../components/ContainerWidth"
import { DesktopMenu } from "../components/DesktopMenu"

import { Expertise } from "../components/Expertise"
import { Experience } from "../components/Experience"
import { ResumeSection } from "../components/ResumeSection"

import { Education } from "../components/Education"
import { TokenList } from "../components/TokenList"
import { ResumeTitle } from "../components/ResumeTitle"

const ResumePage = ({ data }) => {
  const experiences = data.allStrapiExperience.nodes.filter(
    ({ isPaid, draft }) => isPaid && !draft
  )

  const volunteering = data.allStrapiExperience.nodes.filter(exp => !exp.isPaid)
  const designSkills = data.allStrapiExpertise.nodes.filter(
    ({ type, draft }) => type === "design" && !draft
  )
  const developmentSkills = data.allStrapiExpertise.nodes.filter(
    ({ type, draft }) => type === "development" && !draft
  )
  const toolExperiences = data.allStrapiExpertise.nodes.filter(
    ({ type, draft }) => type === "experiences" && !draft
  )
  const education = data.allStrapiEducation.nodes.filter(
    ({ certification, draft }) => !certification && !draft
  )
  const certificates = data.allStrapiEducation.nodes.filter(
    ({ certification, draft }) => certification && !draft
  )

  return (
    <Layout>
      <HtmlHead
        title={"Resume"}
        description={`Design thinker, lifetime learner, digital craftsman.`}
      />

      <StickyScrollContainer
        css={[
          {
            "#mobile": flex("row"),
            "#desktop": { display: "none" },
          },
          onDesktopMedia({
            ...flex("row"), // puts desktop <nav> on the left of <main>
            "#mobile": { display: "none" },
            "#desktop": flex("column"),
          }),
          ,
        ]}
      >
        <DesktopMenu />
        <StickyMenuBar />
        <main>
          <article
            css={{
              ...flex(),
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: colors.LIGHT_GRAY,
            }}
          >
            <header>
              <nav
                css={{
                  ...flex("row"),
                  justifyContent: "space-around",
                  flexWrap: "wrap",
                  padding: "1rem",
                }}
              >
                {[
                  ["Experience", "#experience"],
                  ["Education", "#education"],
                  ["Volunteering", "#volunteering"],
                  ["Certifications", "#certifications"],
                  ["Capabilities", "#capabilities"],
                ].map(([label, path]) => (
                  <TypesetLink to={path} css={{ padding: "1rem" }} key={label}>
                    {label}
                  </TypesetLink>
                ))}
              </nav>
            </header>
            <ContainerWidth css={{ ...maxTypeWidth }}>
              <ResumeSection id={`experience`} heading={"Experience"}>
                {experiences.map(employer => (
                  <Experience {...employer} key={employer.id} />
                ))}
              </ResumeSection>

              <ResumeSection id={`education`} heading={"Education"}>
                {education.map(edu => (
                  <Education {...edu} key={edu.id} />
                ))}
              </ResumeSection>

              <ResumeSection id={`volunteering`} heading={"Volunteering"}>
                {volunteering.map(organization => (
                  <Experience {...organization} key={organization.id} />
                ))}
              </ResumeSection>

              <ResumeSection id={`certifications`} heading={"Certifications"}>
                {certificates.map(edu => (
                  <Education {...edu} key={edu.id} />
                ))}
              </ResumeSection>

              <ResumeSection id={`capabilities`} heading={"Capabilities"}>
                <div css={{ margin: `3vh 0` }}>
                  <ResumeTitle>Design</ResumeTitle>
                  <TokenList
                    css={{
                      li: {
                        backgroundColor: colors.TURQUOISE,
                        color: colors.LIGHT_GRAY_FOREGROUND,
                      },
                    }}
                  >
                    {designSkills.map(capability => (
                      <Expertise {...capability} key={capability.id} />
                    ))}
                  </TokenList>
                </div>
                <div css={{ margin: `3vh 0` }}>
                  <ResumeTitle>Web Development</ResumeTitle>
                  <TokenList
                    css={{
                      li: {
                        backgroundColor: colors.TURQUOISE,
                        color: colors.LIGHT_GRAY_FOREGROUND,
                      },
                    }}
                  >
                    {developmentSkills.map(capability => (
                      <Expertise {...capability} key={capability.id} />
                    ))}
                  </TokenList>
                </div>
                <div css={{ margin: `3vh 0` }}>
                  <ResumeTitle>Experiences With</ResumeTitle>
                  <TokenList
                    css={{
                      li: {
                        backgroundColor: colors.TURQUOISE,
                        color: colors.LIGHT_GRAY_FOREGROUND,
                      },
                    }}
                  >
                    {toolExperiences.map(capability => (
                      <Expertise {...capability} key={capability.id} />
                    ))}
                  </TokenList>
                </div>
              </ResumeSection>
            </ContainerWidth>
          </article>
        </main>
      </StickyScrollContainer>
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiExperience {
      nodes {
        summary
        roles
        organization
        ended(fromNow: false)
        started(fromNow: false)
        isPaid
        draft
        details
        url
        id
      }
    }
    allStrapiEducation(sort: { order: DESC, fields: ended }) {
      nodes {
        url
        started(fromNow: false)
        school
        ended(fromNow: false)
        draft
        description
        concentration
        id
        certification
      }
    }
    allStrapiExpertise {
      nodes {
        description
        id
        url
        type
      }
    }
  }
`

export default ResumePage
