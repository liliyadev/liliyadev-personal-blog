import React from "react"
import Seo from "../components/seo"
import * as styles from "../styles/about.module.css"

const AboutPage = () => {
  return (
    <div className={styles.content}>
      <h1>Welcome to my Gatsby website!</h1>
      <p>This is a blazing-fast website built with Gatsby.</p>
    </div>
  )
}

export const Head = () => (
  <Seo title="About" description="More information about this site." />
)

export default AboutPage
