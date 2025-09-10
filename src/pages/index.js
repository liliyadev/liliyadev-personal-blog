import React, { useEffect } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Helmet } from "react-helmet"

export const query = graphql`
  {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
          slug
          date(formatString: "MMMM D, YYYY")
          tags
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

      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-purple-50 shadow-md">
        <div className="text-xl font-bold text-purple-700">
          <Link to="/">LiliyaDev</Link>
        </div>
        <button
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
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
      </header>

      {/* Main Content */}
      <main className="px-6 py-8 bg-white">
        <h2 className="text-2xl font-bold mb-6 text-purple-800">Latest Blog Posts</h2>
        {data.allMarkdownRemark.nodes.map(post => (
          <article key={post.frontmatter.slug} className="bg-gray-50 p-6 rounded-lg shadow mb-6">
            <img
              src={`/content/blog/${post.frontmatter.slug}/cover.jpg`}
              alt={post.frontmatter.title}
              className="w-full h-auto rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-purple-700">
              <Link to={`/blog/${post.frontmatter.slug}`}>{post.frontmatter.title}</Link>
            </h3>
            <p className="text-sm text-gray-500">{post.frontmatter.date}</p>
            <p className="mt-2 text-gray-700">{post.excerpt}</p>
            <div className="flex gap-2 mt-2">
              {post.frontmatter.tags?.map(tag => (
                <span key={tag} className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                  #{tag}
                </span>
              ))}
            </div>
            <Link
              to={`/blog/${post.frontmatter.slug}`}
              className="text-blue-600 hover:underline font-medium mt-2 block"
            >
              Read more →
            </Link>
          </article>
        ))}
      </main>

      {/* Footer */}
      <footer className="text-center py-4 bg-purple-50 text-gray-600 text-sm">
        © {new Date().getFullYear()} · Built by Liliya Vildanova
      </footer>
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
