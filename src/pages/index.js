import React, { useEffect } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Helmet } from "react-helmet"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


export const query = graphql`
  {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
          slug
          date(formatString: "MMMM D, YYYY")
          tags
          cover {
            childImageSharp {
              gatsbyImageData(width: 800, placeholder: BLURRED)
            }
          }
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

  return (
    <Layout>
      <Helmet>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Helmet>

      <main className="pt-24 px-6 py-8 bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300">
        <h2 className="text-2xl font-bold mb-6 text-green-800">From My Desk</h2>
        {data.allMarkdownRemark.nodes.map(post => (
          <article key={post.frontmatter.slug} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow mb-6 transition-colors duration-300">
  {post.frontmatter.cover?.childImageSharp && (
    <GatsbyImage
      image={getImage(post.frontmatter.cover.childImageSharp)}
      alt={post.frontmatter.title}
      className="rounded-md mb-4"
    />
  )}
  <h3 className="text-xl font-semibold">
  <Link
    to={`/blog/${post.frontmatter.slug}`}
    className="text-green-700 hover:text-green-800 visited:text-green-700"
  >
    {post.frontmatter.title}
  </Link>
</h3>
  <p className="text-sm text-gray-500 dark:text-gray-400">{post.frontmatter.date}</p>
  <p className="mt-2 text-gray-mt-2 text-gray-700 dark:text-gray-200">{post.excerpt}</p>
  <div className="flex gap-2 mt-2">
    {post.frontmatter.tags?.map(tag => (
      <span key={tag} className="text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded transition-colors duration-300">
        #{tag}
      </span>
    ))}
  </div>
  <Link
    to={`/blog/${post.frontmatter.slug}`}
    className="text-green-700 hover:underline font-medium mt-2 block"
  >
    Read more →
  </Link>
</article>
        ))}
      </main>
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
