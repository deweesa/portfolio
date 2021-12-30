import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/global.css";

const imageDimension = "44";
const imageSource = "../../headshot.jpeg";

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <div className="px-24 flex flex-col justify-center items-center">
        <div className="flex bg-gray-400 flex-row-reverse shadow-md rounded-md px-4 py-2">
          <StaticImage
            src={imageSource}
            alt="Asa DeWeese"
            className={"rounded-full w-" + imageDimension}
          />
          <div className="flex flex-col px-6 py-2 justify-center">
            <h1>Hi, I'm Asa</h1>
            <p>
              I'm an aspiring developer, expereinced with Python, Java, C/C++
              and learning Javascript
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

/*src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"*/
export default IndexPage;
