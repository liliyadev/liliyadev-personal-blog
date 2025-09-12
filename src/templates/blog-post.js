import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { ArrowLeftIcon } from "@heroicons/react/24/solid"

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
  <Seo title={post.frontmatter.title} description={post.excerpt} />
  <div className="pt-24 px-6 pb-8 max-w-3xl mx-auto">
    <Link to="/" className="flex items-center text-green-700 hover:underline font-medium mb-4">
      <ArrowLeftIcon className="w-5 h-5 mr-2" />
        Back to Home
    </Link>

    {image && (
      <GatsbyImage
        image={image}
        alt={post.frontmatter.title}
        className="w-full h-auto rounded-md mb-6"
      />
    )}
    <h1 className="text-3xl font-bold text-green-700 mb-2">{post.frontmatter.title}</h1>
    <p className="text-sm text-gray-500 mb-6">{post.frontmatter.date}</p>
    <div
      className="prose dark:prose-invert"
      dangerouslySetInnerHTML={{ __html: post.html }}
    />
  </div>
</Layout>

  )
}

export default BlogPost
