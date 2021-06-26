import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as pageStyles from "./page.module.scss"
import { useStaticQuery, graphql, Link } from "gatsby"
import {Container, Row} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeCard from "../components/EmployeeCard";


const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query EmployeeData {
      allContentfulEmployeeProfile(
        sort: { fields: publishedDate, order: DESC }
      ) {
        edges {
          node {
            name
            yearsOfExperience
            designation
            publishedDate(formatString: "MMMM Do, YYYY")
            slug
            image {
              title
              file {
                url
              }
            }
          }
        }
      }
    }
  `)

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.image.title
        const url = node.image.file.url
        return <img alt={alt} src={url} />
      },
    },
  }

  return (
    <Layout>
      <Seo title="Home" />
        <Container>
        <h3 className="mt-4">Employees list souced from CMS</h3>
          <Row className="ml-0">
            {data.allContentfulEmployeeProfile?.edges?.map(edge => (
              <EmployeeCard edge={edge} />
            ))}
          </Row>
        </Container>
        <div></div>
    </Layout>
  )
}

export default IndexPage
