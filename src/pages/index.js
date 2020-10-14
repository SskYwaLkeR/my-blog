import React from "react"
import { Link, graphql } from "gatsby"
import Image from "../components/image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/index.css"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <div>
        <div className="profile-wrapper">
          <div className="my-pic">
            <Image />
          </div>
          <div className="profile-desc">
            <h1>Hrishikesh rai</h1>
            <p className="short-desc">Frontend developer. Loves javascript ❤</p>
          </div>
        </div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} className="blog-posts">
            <div className="blog-title-link">
              <Link to={node.fields.slug}>
                <span>{node.frontmatter.title}</span>
              </Link>
              <span className="blog-date"> {node.frontmatter.date}</span>
            </div>

            <span className="time-to-read">{node.timeToRead} min read </span>

            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date
            description
            title
          }
          fields {
            slug
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`
