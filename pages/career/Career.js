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
    <div className="careerpage mb-8 mt-8">
      <div className="about-banner">
        <div className="container">
          <div className="about-banner-inner">
            <div className="banner-text">
              <h1>CAREER</h1>
              <p>
                Explore flexible opportunities and join our mission to make work
                life simpler, more pleasant and more productive
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-10 pb-10">
        <h2 className="text-center mb-2">Work with Us</h2>
        <div className="service-box-sec">
          <div className="service-box">
            <img src="./client-centered-icon.webp" alt="" />
            <h5>Wide-ranging Expertise</h5>
            <p>
              Our team of skilled professionals excels in diverse technologies,
              ensuring comprehensive software solutions for web development,
              mobile apps, AI, and cloud computing.
            </p>
          </div>
          <div className="service-box">
            <img src="./wide-Expertise-icon.webp" alt="" />
            <h5>Client-Centered Approach</h5>
            <p>
              We prioritize client success by understanding unique requirements,
              fostering transparent communication, and employing agile
              methodologies for active client involvement, building long-term
              partnerships based on trust and exceptional customer service.
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
      </div>
      <div className="job-sec">
        <h2 className="text-center mb-5">Opening Positions</h2>
        <div className="container">
          <div className="job-sec-inner">
            <div className="job-card">
              <div className="job">
                <div className="job-description">
                  <div className="job-name">
                    <h4>Data Analyst</h4>
                  </div>
                  <div className="job-details">
                    <p>
                      <span>Experience</span>
                      <br />0 to 1 year
                    </p>
                    <p>
                      <span>Position</span>
                      <br />2
                    </p>
                  </div>
                </div>
              </div>

              <div className="job-specification mb-5">
                <h5>Job responsibilities</h5>
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
                <h5>Key skills</h5>
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
                <p className="mt-2">
                  If you want to apply mail us on:
                  <br />
                  <a
                    href="mailto:info@expint.in"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    info@expint.in
                  </a>
                </p>
              </div>
            </div>
            <div className="job-card">
              <div className="job">
                <div className="job-description">
                  <div className="job-name">
                    <h4>Electronics Technician</h4>
                  </div>
                  <div className="job-details">
                    <p>
                      <span>Experience</span>
                      <br />
                      2+ year
                    </p>
                    <p>
                      <span>Position</span>
                      <br />1
                    </p>
                  </div>
                </div>
              </div>

              <div className="job-specification  mt-3">
                <h5>Job responsibilities</h5>
                <ul>
                  <li>
                    Install and configure electronic systems, equipment, and
                    components, ensuring proper operation and alignment with
                    technical requirements.
                  </li>
                  <li>
                    Perform routine testing, calibration, and diagnostics on
                    electronic devices using specialized tools to ensure
                    accuracy, functionality, and compliance with industry
                    standards.
                  </li>
                  <li>
                    Identify, troubleshoot, and repair faulty electronic
                    components and systems by analyzing circuits, schematics,
                    and using diagnostic equipment like oscilloscopes and
                    multimeters.
                  </li>
                </ul>
              </div>
              <div className="job-skills mt-3">
                <h5>Key skills</h5>
                <ul>
                  <li>
                    Strong understanding of electronic systems, circuits, and
                    components, with the ability to read and interpret
                    schematics, blueprints, and technical manuals.
                  </li>
                  <li>
                    Excellent problem-solving skills to diagnose and repair
                    malfunctions in electronic systems using diagnostic tools
                    like multimeters, oscilloscopes, and signal generators.
                  </li>
                  <li>
                    Precision in assembling, testing, and maintaining electronic
                    equipment to ensure accuracy and safety in operation.
                  </li>
                  <li>
                    Proficiency in handling small components and tools to
                    assemble and repair delicate electronic systems with
                    accuracy.
                  </li>
                </ul>
                <p className="mt-2">
                  If you want to apply mail us on:
                  <br />
                  <a
                    href="mailto:info@expint.in"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    info@expint.in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Career;
