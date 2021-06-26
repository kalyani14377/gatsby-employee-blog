import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "./employee.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../utils/fontawesome"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Seo from "../components/seo";

export const query = graphql`
  query GetEmployeeDetails($slug: String!) {
    contentfulEmployeeProfile(slug: { eq: $slug }) {
      name
      slug
      publishedDate(formatString: "MMMM Do, YYYY")
      image {
        title
        file {
          url
        }
      }
      designation
      yearsOfExperience
      about{
        raw
      }
    }
  }
`

const Blog = props => {
  return (
    <Layout>
      <Seo title={props.data?.contentfulEmployeeProfile?.slug} />
      <div class="container mt-5 mb-5 d-flex justify-content-center">
        <div class="card rounded">
          <div class=" d-block justify-content-center">
            <div class="area1 p-3 py-5"> </div>
            <div class="area2 p- text-center px-3">
              <div class="image mr-3">
                {" "}
                <img
                  src={props.data?.contentfulEmployeeProfile?.image?.file?.url}
                  class="rounded-circle"
                  width="100"
                />
                <h4 class=" name mt-3 ">
                  {props.data?.contentfulEmployeeProfile?.name}
                </h4>
                <p>{props.data?.contentfulEmployeeProfile?.designation}</p>
                <p class="information mt-3 text-justify">
                {documentToReactComponents(JSON.parse((props.data?.contentfulEmployeeProfile?.about?.raw)))}
                </p>
                <div class="d-flex justify-content-center mt-5">
                  <ul class="list-icons">
                    <li class="facebook">
                      <FontAwesomeIcon icon={"angry"} />
                    </li>
                    <li class="youtube">
                      {" "}
                      <FontAwesomeIcon icon={"fan"} />
                    </li>
                    <li class="instagram">
                      <FontAwesomeIcon icon={"bell"} />
                    </li>
                    <li class="whatsapp">
                      {" "}
                      <FontAwesomeIcon icon={"book"} />
                    </li>
                    <li class="pinterest">
                      {" "}
                      <FontAwesomeIcon icon={"atlas"} />
                    </li>
                  </ul>
                </div>
              </div>
              <div> </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Blog
