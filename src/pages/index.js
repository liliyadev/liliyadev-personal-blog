import React, { useEffect } from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { Helmet } from "react-helmet"

export const query = graphql`
  {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
          slug
          date(formatString: "MMMM D, YYYY")
        }
        excerpt
      }
    }
  }
`

const IndexPage = ({ data }) => {
  useEffect(() => {
  if (window.netlifyIdentity) {
    window.netlifyIdentity.init()
    window.netlifyIdentity.on("login", () => {
      document.location.href = "/admin/"
    })
  }
}, [])


  const links = [
    {
      text: "Tutorial",
      url: "https://www.gatsbyjs.com/docs/tutorial",
      description: "A great place to get started with Gatsby.",
    },
    {
      text: "Examples",
      url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
      description: "Real-world Gatsby site examples.",
    },
  ]

  const samplePageLinks = [
    { text: "Page 2", url: "page-2" },
    { text: "TypeScript", url: "using-typescript" },
  ]

  const moreLinks = [
    { text: "Documentation", url: "https://gatsbyjs.com/docs/" },
    { text: "Starters", url: "https://gatsbyjs.com/starters/" },
  ]

  const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

  return (
    <Layout>
      <Helmet>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Helmet>

      <button
  style={{ margin: "1rem", padding: "0.5rem 1rem", fontSize: "1rem" }}
  onClick={() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.open()
    } else {
      console.warn("Netlify Identity not loaded")
    }
  }}
>
  Login
</button>
<div style={{ marginBottom: "2rem" }}>
  <h2>Latest Blog Posts</h2>
  {data.allMarkdownRemark.nodes.map(post => (
    <article key={post.frontmatter.slug} style={{ marginBottom: "1.5rem" }}>
      <h3>
        <Link to={`/blog/${post.frontmatter.slug}`}>
          {post.frontmatter.title}
        </Link>
      </h3>
      <p>{post.frontmatter.date}</p>
      <p>{post.excerpt}</p>
    </article>
  ))}
</div>

      <div className={styles.textCenter}>
        <StaticImage
          src="../images/example.png"
          loading="eager"
          width={64}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        />
        <h1>Welcome to <b>Gatsby!</b></h1>
        <p className={styles.intro}>
          <b>Example pages:</b>{" "}
          {samplePageLinks.map((link, i) => (
            <React.Fragment key={link.url}>
              <Link to={link.url}>{link.text}</Link>
              {i !== samplePageLinks.length - 1 && <> · </>}
            </React.Fragment>
          ))}
          <br />
          Edit <code>src/pages/index.js</code> to update this page.
        </p>
      </div>

      <ul className={styles.list}>
        {links.map(link => (
          <li key={link.url} className={styles.listItem}>
            <a
              className={styles.listItemLink}
              href={`${link.url}${utmParameters}`}
            >
              {link.text} ↗
            </a>
            <p className={styles.listItemDescription}>{link.description}</p>
          </li>
        ))}
      </ul>

      {moreLinks.map((link, i) => (
        <React.Fragment key={link.url}>
          <a href={`${link.url}${utmParameters}`}>{link.text}</a>
          {i !== moreLinks.length - 1 && <> · </>}
        </React.Fragment>
      ))}
    </Layout>
  )
}

export const Head = () => (
  <>
    <Seo title="Home" />
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
  </>
)

export default IndexPage
