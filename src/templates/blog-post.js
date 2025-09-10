import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      html
    }
  }
`

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <div className="px-6 py-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-700 mb-2">{post.frontmatter.title}</h1>
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
