import React, { useEffect } from "react";
import SetMetaData from "../../components/common/metaData/SetMetaData";
import { Navigate, Routes } from "../../navigation/NavigationLib";

function Career() {
  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // });

  return (
    <>
      <div className="blogpage mb-8 mt-8">
        <div className="about-banner">
          <div className="container">
            <div className="about-banner-inner">
              <div className="banner-text">
                <h1>CAREER</h1>
                <p>
                  Explore flexible opportunities and join our mission to make
                  work life simpler, more pleasant and more productive
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <h2 className="text-center mt-5 mb-5">Work with Us</h2>
          <div className="flex">
            <div className="service-box">
              <img src="./client-centered-icon.webp" alt="" />
              <h5>Wide-ranging Expertise</h5>
              <p>
                Our team of skilled professionals excels in diverse
                technologies, ensuring comprehensive software solutions for web
                development, mobile apps, AI, and cloud computing.
              </p>
            </div>
            <div className="service-box">
              <img src="./wide-Expertise-icon.webp" alt="" />
              <h5>Client-Centered Approach</h5>
              <p>
                We prioritize client success by understanding unique
                requirements, fostering transparent communication, and employing
                agile methodologies for active client involvement, building
                long-term partnerships based on trust and exceptional customer
                service.
              </p>
            </div>
            <div className="service-box">
              <img src="./grow-icon.webp" alt="" />
              <h5>Growth Opportunities</h5>
              <p>
                Join us for unparalleled career growth and personal development,
                with access to cutting-edge technologies, training programs, and
                challenging projects in a supportive and innovative work
                environment.
              </p>
            </div>
          </div>
          <h4 className="text-center mt-5 mb-5">Opening Positions</h4>
        </div>
        <div className="job-sec">
          <div className="container">
            <div className="job-sec-inner">
              <div className="job-card">
                <div className="job">
                  <div className="job-description">
                    <div className="job-name">
                      <h3>Data Analyst</h3>
                    </div>
                    <div className="job-details">
                      <p>
                        <span>Experience : </span>0 to 1 year
                      </p>
                      <p>
                        <span>Position : </span>1
                      </p>
                    </div>
                  </div>
                  {/* <button>Apply now</button> */}
                </div>

                <div className="job-specification mt-3">
                  <h4>Job responsibilities</h4>
                  <ul>
                    <li>
                      Gathering, cleaning, and transforming data for analysis.
                    </li>
                    <li>
                      Applying statistical techniques and data mining algorithms
                      to uncover insights.
                    </li>
                    <li>
                      Creating reports, presenting findings, and providing
                      recommendations.
                    </li>
                    <li>
                      Working with teams and effectively communicating results.
                    </li>
                    <li>
                      Staying updated with the latest data analysis tools and
                      techniques.
                    </li>
                  </ul>
                </div>
                <div className="job-skills  mt-3">
                  <h4>Key skills</h4>
                  <ul>
                    <li>
                      Proficiency in Python, R, or SQL for data manipulation,
                      analysis, and visualization.
                    </li>
                    <li>
                      Familiarity with tools like Excel, Tableau, Power BI, or
                      Jupyter Notebook for data exploration and reporting.
                    </li>
                    <li>
                      Understanding of database concepts (e.g., SQL, NoSQL) and
                      ability to query and manage data.
                    </li>
                    <li>
                      Working with teams and effectively communicating results.
                    </li>
                    <li>
                      Staying updated with the latest data analysis tools and
                      techniques.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="job-card">
                <div className="job">
                  <div className="job-description">
                    <div className="job-name">
                      <h3>Data Analyst</h3>
                    </div>
                    <div className="job-details">
                      <p>
                        <span>Experience : </span>0 to 1 year
                      </p>
                      <p>
                        <span>Position : </span>1
                      </p>
                    </div>
                  </div>
                  {/* <button>Apply now</button> */}
                </div>

                <div className="job-specification  mt-3">
                  <h4>Job responsibilities</h4>
                  <ul>
                    <li>
                      Gathering, cleaning, and transforming data for analysis.
                    </li>
                    <li>
                      Applying statistical techniques and data mining algorithms
                      to uncover insights.
                    </li>
                    <li>
                      Creating reports, presenting findings, and providing
                      recommendations.
                    </li>
                    <li>
                      Working with teams and effectively communicating results.
                    </li>
                    <li>
                      Staying updated with the latest data analysis tools and
                      techniques.
                    </li>
                  </ul>
                </div>
                <div className="job-skills mt-3">
                  <h4>Key skills</h4>
                  <ul>
                    <li>
                      Proficiency in Python, R, or SQL for data manipulation,
                      analysis, and visualization.
                    </li>
                    <li>
                      Familiarity with tools like Excel, Tableau, Power BI, or
                      Jupyter Notebook for data exploration and reporting.
                    </li>
                    <li>
                      Understanding of database concepts (e.g., SQL, NoSQL) and
                      ability to query and manage data.
                    </li>
                    <li>
                      Working with teams and effectively communicating results.
                    </li>
                    <li>
                      Staying updated with the latest data analysis tools and
                      techniques.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Career;
