import React, { useEffect } from "react";
import MyCarousel from "../../components/carousel/MyCarousel";
import SetMetaData from "../../components/common/metaData/SetMetaData";
import { Navigate, Routes } from "../../navigation/NavigationLib";

function Home() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  const images = [
    {
      image:
        "https://nexgits.com/wp-content/uploads/2023/08/COMMUNICATIONCRAFTS.svg",
    },
    {
      image: "https://nexgits.com/wp-content/uploads/2023/08/Dreams-Magic.svg",
    },
    { image: "https://nexgits.com/wp-content/uploads/2023/08/JIO.svg" },
    { image: "https://nexgits.com/wp-content/uploads/2023/08/KREEDO.svg" },
    { image: "https://nexgits.com/wp-content/uploads/2023/08/Rasna.svg" },
    { image: "https://nexgits.com/wp-content/uploads/2023/08/SIMTAC.svg" },
    { image: "https://nexgits.com/wp-content/uploads/2023/08/TANGELO.svg" },
    { image: "https://nexgits.com/wp-content/uploads/2023/08/TC.svg" },
    {
      image:
        "https://nexgits.com/wp-content/uploads/2023/08/Olympia-Obchodni.svg",
    },
    { image: "https://nexgits.com/wp-content/uploads/2023/08/Pivovar.svg" },
    { image: "https://nexgits.com/wp-content/uploads/2023/08/CPI.svg" },
    { image: "https://nexgits.com/wp-content/uploads/2023/08/IKEA-1.svg" },
    { image: "https://nexgits.com/wp-content/uploads/2020/08/Corso.svg" },
    {
      image: "https://nexgits.com/wp-content/uploads/2020/08/CzechTourism.svg",
    },
    { image: "https://nexgits.com/wp-content/uploads/2020/08/Ekoslide.svg" },
    { image: "https://nexgits.com/wp-content/uploads/2020/08/Erawine.svg" },
    { image: "https://nexgits.com/wp-content/uploads/2020/08/FACR.svg" },
    { image: "https://nexgits.com/wp-content/uploads/2020/08/Fenix.svg" },
    { image: "https://nexgits.com/wp-content/uploads/2020/08/Ferrero.svg" },
    {
      image: "https://nexgits.com/wp-content/uploads/2020/08/Hotel-Ryzlink.svg",
    },
    {
      image: "https://nexgits.com/wp-content/uploads/2020/08/Kinder-Bueno.svg",
    },
    { image: "https://nexgits.com/wp-content/uploads/2020/08/Kobe.svg" },
    { image: "https://nexgits.com/wp-content/uploads/2020/08/Kofola.svg" },
    { image: "https://nexgits.com/wp-content/uploads/2020/08/Lomax.svg" },
    { image: "https://nexgits.com/wp-content/uploads/2020/08/Comap.svg" },
    { image: "https://nexgits.com/wp-content/uploads/2020/08/O-RAN.svg" },
    {
      image:
        "https://nexgits.com/wp-content/uploads/2020/08/Virtual_Exhibition-1.svg",
    },
    { image: "https://nexgits.com/wp-content/uploads/2020/08/Plugfest-2.svg" },
    { image: "https://nexgits.com/wp-content/uploads/2020/08/OTIC.svg" },
    { image: "https://nexgits.com/wp-content/uploads/2020/08/Vodafone.svg" },
    { image: "https://nexgits.com/wp-content/uploads/2020/08/Vinarstvi.svg" },
    {
      image:
        "https://nexgits.com/wp-content/uploads/2020/08/Pilsner-Urquell.svg",
    },
    {
      image: "https://nexgits.com/wp-content/uploads/2020/08/Time-Out-Los.svg",
    },
    { image: "https://nexgits.com/wp-content/uploads/2020/08/Cointreau.svg" },
  ];

  const testimonialList = [
    {
      name: "Rohit Patel",
      description:
        "I am farmer since 1980. Best quality of pumps and Excellent services. I am fully satisfied with work and Happy to be Pionear coustomer.",
    },
    {
      name: "Rakesh Patel",
      description:
        "I am dealer of raw material. Great management of company, Time to time payment system. Very convenient to work with SRE.",
    },
    {
      name: "Vivek Singh",
      description:
        "Outstanding staff, Knowledgeable workers, Excellent services, satisfied answers Happy to be customer of pionear pump.",
    },
  ];

  const slidesToShowForTestimonials =
    window.innerWidth > 1024
      ? 3
      : window.innerWidth < 1024 && window.innerWidth > 767
      ? 2
      : 1;

  const slidesToShowForCertification =
    window.innerWidth > 1024
      ? 5
      : window.innerWidth < 1024 && window.innerWidth > 767
      ? 3
      : 2;

  return (
    <>
      <SetMetaData
        title="Expint - High-Quality Software Solutions"
        metaTitle="Expint - High-Quality Software Solutions"
        description="Crafted with precision and backed by expertise, our pump solutions stand as a testament to our dedication as a leading manufacturer."
        keyword="software company"
      />
      <div className="homepage">
        {/* <Header /> */}
        <div className="banner">
          <div className="container">
            <div className="banner-inner">
              <div className="intro">
                <p>// Driving Innovation and Growth</p>
                <h1>
                  END-TO-END IT SOLUTION
                  <br />
                  COMPANY
                </h1>
                <p className="subtitle">
                  We are a team of passionate tech geeks who offer Excellence,
                  <br />
                  Perfectionism, Innovation, and Client-Gratification.
                </p>
                <button
                  onClick={() => Navigate(Routes.contact)}
                  className="blue-btn"
                >
                  Get a Quote
                </button>
              </div>
              <div className="mobile-intro">
                <h1>
                  Your Premier Manufacturer of <span>High-Quality</span> Pump
                  Solutions
                </h1>
                <p>
                  Crafted with precision and backed by expertise, our pump
                  solutions stand as a testament to our dedication as a leading
                  manufacturer.
                </p>
                <button className="blue-btn">Our journey</button>
              </div>
            </div>
          </div>
        </div>
        <div className="certification">
          <div className="container">
            <div className="certification-inner">
              <div className="certification-heading">
                <h2></h2>
              </div>
              <MyCarousel
                images={images}
                sliderFor="Certificate"
                slidesToShow={slidesToShowForCertification}
              />
            </div>
          </div>
        </div>
        <div className="company-overview">
          <div className="container">
            <div className="company-overview-inner">
              <div className="company-details">
                <div className="overview-heading">
                  <span>// about company</span>
                  <h2>
                    Best-in-Class
                    <br />
                    Technology Solutions
                  </h2>
                </div>
                <p>
                  Expint Smart Products Private Limited has emerged as a leading
                  AI/ML company in Ahmedabad, India. We offer award-winning IT
                  solutions tailored to the needs of startups, SMEs, and
                  enterprises. Our expertise helps businesses stay ahead of the
                  competition by delivering purpose-driven and innovative AI-ML
                  solutions, custom software, mobile applications, game
                  development, and offshore services.
                </p>
                <div className="experience-support">
                  <div>
                    <h5>Experience</h5>
                    <div className="line-box"></div>
                    <p>
                      With an average experience of 5+ years, our Senior
                      Engineers have the expertise your projects need.
                    </p>
                  </div>
                  <div>
                    <h5>24 / 7 Support</h5>
                    <div className="line-box"></div>
                    <p>
                      Our tech experts work in all time zones to remove friction
                      and allow for seamless integration with our clients.
                    </p>
                  </div>
                </div>
              </div>
              <div className="overview-img">
                <img
                  src="https://nexgits.com/wp-content/uploads/2023/03/About_Company_01.webp"
                  alt="Pionear Pumps"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="why-expint">
          <div className="container">
            <div className="why-expint-title">
              <div className="ot-heading">
                <span>// why choose Expint?</span>
                <h2 className="we-main-heading">
                  Bridging The Gap
                  <br />
                  Between Ideas and
                  <br />
                  Reality
                </h2>
                <p className="we-para">
                  <span>
                    Expint aims to elevate your business operations and customer
                    <br />
                    experiences through disruptive technological
                    transformations.{" "}
                  </span>
                  <span>
                    We <br /> deliver integrated digital solutions, that
                    complement our capabilities <br /> and bring growth to your
                    business.{" "}
                  </span>
                  <span>
                    Apart from offering a pool of <br /> talented IT
                    professionals, we help you build your own remote teams{" "}
                    <br /> working exclusively for your projects.
                  </span>
                </p>
                <div className="we-scale-subset">
                  <div>
                    <p className="we-scale">63+</p>
                    <h6 className="we-scalse-heading">Clients Worldwide</h6>
                  </div>
                  <div>
                    <p className="we-scale">100+</p>
                    <h6 className="we-scalse-heading">Successful Projects</h6>
                  </div>
                  <div>
                    <p className="we-scale">25+</p>
                    <h6 className="we-scalse-heading">Software Engineers</h6>
                  </div>
                </div>
              </div>
              <div className="ot-headern2">
                <div className="we-mission">
                  <div className="we-mission-main-container">
                    <div className="we-mission-container">
                      <div className="overlay">
                        <h4>Our Mission</h4>
                      </div>
                      <img
                        src="https://nexgits.com/wp-content/uploads/2023/08/Our_Mission.webp"
                        alt="Our-Mission"
                      />
                    </div>
                    <div className="we-mission-container">
                      <div className="overlay">
                        <h4>Our Vision</h4>
                      </div>
                      <img
                        src="https://nexgits.com/wp-content/uploads/2023/08/Our_Vision.webp"
                        alt="Our-Mission"
                      />
                    </div>
                  </div>
                  <div className="we-mission-main-container mt-10">
                    <div className="we-mission-container">
                      <div className="overlay">
                        <h4>Our Philosophy</h4>
                      </div>
                      <img
                        src="https://nexgits.com/wp-content/uploads/2023/08/Our_Philosophy.webp"
                        alt="Our-Mission"
                      />
                    </div>
                    <div className="we-mission-container">
                      <div className="overlay">
                        <h4>Our Strategy</h4>
                      </div>
                      <img
                        src="https://nexgits.com/wp-content/uploads/2023/08/Our_Strategy.webp"
                        alt="Our-Mission"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="our-service">
          <div className="container">
            <div className="service-heading">
              <div className="overview-heading">
                <span>// our service</span>
                <h2>
                  Our Full-Suite of
                  <br />
                  IT Services
                </h2>
              </div>
              <div>
                <div className="flex">
                  <div className="service-box">
                    <h5>Electronics Technician</h5>
                    <p>
                      An electronics technician assembles, tests, and repairs
                      electronic devices, ensuring they function properly. They
                      troubleshoot issues, follow technical documentation, and
                      maintain equipment to meet quality standards.
                    </p>
                  </div>
                  <div className="service-box">
                    <h5>Sr. Software Developer</h5>
                    <p>
                      A Senior Software Developer leads the design, development,
                      and implementation of software solutions, ensuring
                      scalability and efficiency. They mentor junior developers,
                      perform code reviews, and collaborate with
                      cross-functional teams to deliver high-quality products.
                    </p>
                  </div>
                  <div className="service-box">
                    <h5>Data Analyat</h5>
                    <p>
                      A Data Analyst collects, processes, and analyzes data to
                      help organizations make informed decisions. They use
                      statistical tools and data visualization to identify
                      trends, patterns, and insights that drive business
                      strategy.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="service-box">
                    <h5>ICT Manager NEC</h5>
                    <p>
                      An ICT Manager (NEC) oversees the planning,
                      implementation, and management of information and
                      communication technology systems within an organization.
                      They ensure efficient operations, security, and alignment
                      with business goals while leading IT teams and managing
                      technology resources.
                    </p>
                  </div>
                  <div className="service-box">
                    <h5>Electronics Technicians</h5>
                    <p>
                      Electronics Technicians assemble, troubleshoot, and repair
                      electronic systems and devices, ensuring they function
                      correctly. They read schematics, perform tests, and
                      maintain equipment to meet industry standards and
                      operational needs.
                    </p>
                  </div>
                  <div className="service-box">
                    <h5>Web Developers</h5>
                    <p>
                      Web Developers design, build, and maintain websites,
                      ensuring they are functional, user-friendly, and visually
                      appealing. They write clean code, optimize performance,
                      and collaborate with designers and stakeholders to deliver
                      engaging web experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="our-exoertise">
          <div className="container">
            <div className="expertise-heading">
              <span>// Fusing Real-World Expertise with Cutting-Edge Tech</span>
              <h2 className="we-main-heading">
                Let s Build a Solution Compatible
                <br />
                with Your Business Needs
              </h2>
            </div>
          </div>
        </div>
        <div className="our-partners">
          <div className="container">
            <div className="overview-heading text-center mt-10">
              <span>// OUR PARTNERS</span>
              <h2>
                Accreditation and Trusted Partnerships
                <br />
                for Premium Software Development
              </h2>
            </div>
            <div className="flex mt-8 partner-images justify-between mb-10">
              <div>
                <img
                  src="https://nexgits.com/wp-content/uploads/2023/08/Startup_india-300x300.webp"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://nexgits.com/wp-content/uploads/2023/08/GoodFirms-300x300.webp"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://nexgits.com/wp-content/uploads/2023/08/Design-rush-300x300.webp"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://nexgits.com/wp-content/uploads/2023/08/Clutch-300x300.webp"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://nexgits.com/wp-content/uploads/2023/08/Top_Developers-300x300.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
