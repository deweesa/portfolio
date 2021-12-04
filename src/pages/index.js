import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/global.css";

const imageDimension = "36";

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <figure className="bg-gray-300 p-8 rounded-md w-max m-auto">
        <StaticImage
          className={
            "object-none rounded-full h-" +
            imageDimension +
            " w-" +
            imageDimension +
            " float-right"
          }
          alt="Me"
          src="../../headshot.jpeg"
        />
        <div className="font-bold text-5xl">Hello, I'm Asa</div>
        <div className="font-medium text-3xl">
          I'm an aspiring developer from Kent, Washington
        </div>
      </figure>
    </Layout>
  );
};

/*src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"*/
export default IndexPage;
