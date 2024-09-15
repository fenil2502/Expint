import React, { useEffect } from "react";
import SetMetaData from "../../components/common/metaData/SetMetaData";
import { Navigate, Routes } from "../../navigation/NavigationLib";

function About() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  return (
    <>
      <SetMetaData
        title="Expint - Discover Our Software Legacy"
        metaTitle="Expint - Discover Our Software Legacy"
        description="Embark on a journey through our rich heritage in pump manufacturing. With decades of expertise, we have been at the forefront of innovation, providing cutting-edge solutions to meet diverse industrial needs."
        keyword="Software"
      />
      <div className="aboutpage">
        {/* <Header /> */}
        <div className="about-banner">
          <div className="container">
            <div className="about-banner-inner">
              <div className="banner-text">
                <span>{'//'} About The Company</span>
                <h1>ABOUT US</h1>
                <p>
                  We are a team of passionate tech geeks who offer Excellence,
                  Perfectionism, Innovation, and Client-Gratification.
                </p>
                <button
                  onClick={() => Navigate(Routes.contact)}
                  className="blue-btn"
                >
                  Get a quote now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="our-journey">
          <div className="container">
            <div className="our-journey-inner">
              <div className="our-journey-img">
                <img src="./Our_Mission.webp" alt="Our Mission" />
              </div>
              <div className="our-journey-details">
                <span>{'//'} our story</span>
                <h2>Where Did We Start?</h2>
                <p>
                  Expint, earlier known as Maruti Games, is an ISO Certified
                  revolutionary IT consulting company based in Ahmedabad. We
                  hold extensive expertise and a skilled workforce across
                  Artificial Intelligence, Machine Learning, Mobile Game
                  Development, AR/VR, WebGL, Offshore Services and Product /
                  Business promotional applications. Founded in 2021, we are a
                  progressive group with a mission of exponentially growing your
                  business and preparing it for the next-gen challenges.
                </p>
                <p>
                  <strong>
                    Our solutions are bound to impress your clientele and leave
                    an everlasting impression on the industry.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="our-mission">
          <div className="container">
            <div className="our-mission-inner">
              <div className="our-mission-img">
                <img src="./Our_Mission_11zon.webp" alt="Our Mission" />
              </div>
              <div className="our-mission-details">
                <span>{'//'} our mission</span>
                <h2>What We Aiming For</h2>
                <p>
                  Our aim is to partner with clients and help them simplify,
                  strengthen and transform their businesses through Innovative
                  IT solutions that support them in creating the future. At
                  Expint, we aim to help companies become innovation leaders by
                  offering on demand software development services with the
                  right architecture and processes for successful delivery of
                  projects.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="our-vision">
          <div className="container">
            <div className="our-vision-inner">
              <div className="our-vision-img">
                <img src="./Our_Vision-1.webp" alt="Our Vision" />
              </div>
              <div className="our-vision-details">
                <span>{'//'} our vision</span>
                <h2>Where Do We See Ourselves?</h2>
                <p>
                  As a world leader, delivering best-in-class innovative digital
                  solutions with 100% customer satisfaction, ensuring all our
                  partners stay ahead of the clutter and achieve excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="our-philosophy">
          <div className="container">
            <div className="our-philosophy-inner">
              <div className="our-philosophy-img">
                <img src="./Our_Philosophy-1.webp" alt="Our Philosophy" />
              </div>
              <div className="our-philosophy-details">
                <span>{'//'} our philosophy</span>
                <h2>What We Believe In</h2>
                <p>
                  At Expint, we believe the philosophy of targeted focus leads
                  to effective results. We bind deep functional knowledge,
                  global benchmarks and holistic individuals to deliver
                  efficient outcomes. Ensuring businesses understand the
                  software development process, we drive it as per their wish.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="team">
          <div className="container">
            <div className="team-inner">
              <div className="team-heading">
                <h2>
                  Meet the Visionaries Behind <span>Expint</span>
                </h2>
              </div>
              <div className="members">
                <div className="member-card">
                  <div className="member-img">
                    <img src="./Lav_Patel_CEO_Nexgits.png" alt="Lav Patel" />
                  </div>
                  <div className="member-details">
                    <h4>Lav Patel</h4>
                    <p>Director & CEO</p>
                    <span>Nexgits Private Limited</span>
                  </div>
                </div>
                <div className="member-card">
                  <div className="member-img">
                    <img src="./VR_Bakers.png" alt="Petr Tylk" />
                  </div>
                  <div className="member-details">
                    <h4>Petr Tylk</h4>
                    <p>Creative Technologist and Founder</p>
                    <span>VR Bakers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default About;
