/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/girl.png";

const imageAltText = "woman in tech";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "BrainSeed Networks Community Website",
    description:
      "Led the design and development of a highly responsive website through collaboration with team and designers. Stayed current with web design trends and technologies to continuously enhance the website’s functionality and user experience.",
    url: "https://github.com/BRAINSEED-NETWORKS/BrainSeed-Network",
  },
  {
    title: "Weather Forcast API Project",
    description:
      "It is a web application that allows users to retrieve weather forecast data for different cities. It provides real-time weather information, including current temperature, humidity, wind speed, and a 7-day weather forecast by utilising the OpenWeatherMap API.",
    url: "https://rainbow-paprenjak-6e72f6.netlify.app/",
  },
  {
    title: "Invoice Generator Project",
    description:
      "The Invoice Generator Project is designed to streamline the invoicing process by enabling users to create, manage, review, and download invoices in 'pdf format' with ease.",
    url: "https://github.com/SanskritiGupta05/Invoice-Generator-Django-project",
  },
  {
    title: "Quick Quiz Web App",
    description:
      "General Knowledge testing by fetching new questions from 'Open Trivia DB' via API calls, at every new session. Allows users to select their answers and submit them and provides immediate feedback on the correctness of the chosen answer.",
    url: "file:///C:/Users/sansk/OneDrive/Desktop/practice/portfolio-website/index.html",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
