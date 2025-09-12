import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export const query = graphql`
  query($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    frontmatter {
      title
      date(formatString: "MMMM D, YYYY")
      cover {
        childImageSharp {
          gatsbyImageData(width: 1200, placeholder: BLURRED)
        }
      }
    }
    excerpt
    html
  }
}
`

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  const image = getImage(post.frontmatter.cover?.childImageSharp)

  return (
    <Layout>
      <Link
          to="/"
          className="text-green-700 hover:underline font-medium mt-2 block"
        >
          ← To main page
        </Link>
      <Seo title={post.frontmatter.title} description={post.excerpt} />
      <div className="px-6 py-8 max-w-3xl mx-auto">
        {image && (
          <GatsbyImage
            image={image}
            alt={post.frontmatter.title}
            className="w-full h-auto rounded-md mb-6 pt-24"
          />
        )}
        <h1 className="text-3xl font-bold text-green-700 mb-2">{post.frontmatter.title}</h1>
        <p className="text-sm text-gray-500 mb-6">{post.frontmatter.date}</p>
        <div
          className="prose prose-blue"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  )
}

export default BlogPost
