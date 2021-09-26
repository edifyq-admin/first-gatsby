import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Following the tutorial</p>
      <StaticImage
        alt="The beach"
        src="../images/000.jpg"
      ></StaticImage>
    </Layout>
  )
}

export default IndexPage;
