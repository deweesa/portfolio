import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/global.css";

const imageDimension = "44";

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <figure className="bg-gray-300  p-8 rounded-md w-max m-auto flex flex-row-reverse gap-x-4">
        <StaticImage
          className={
            "object-none rounded-full h-" +
            imageDimension +
            " w-" +
            imageDimension + ""
            //" float-right"
          }
          alt="Me"
          src="../../headshot.jpeg"
        />
        <div className="pl-4 text-center"> 
          <div className="font-bold text-7xl">Hello, I'm Asa</div>
          <div className="font-medium text-5xl max-w-prose">
            I'm an aspiring developer from Kent, Washington
          </div>
        </div>
      </figure>
    </Layout>
  );
};

/*src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"*/
export default IndexPage;
