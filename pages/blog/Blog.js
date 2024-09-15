import React, { useEffect } from "react";
import SetMetaData from "../../components/common/metaData/SetMetaData";
import { Navigate, Routes } from "../../navigation/NavigationLib";

function Blog() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  return (
    <>
      <div className="blogpage">
        <div className="container">
          <div className="blog-container flex">
            <div className="image">
              <img
                src="https://nexgits.com/wp-content/uploads/2023/07/designing-intelligent-chatbots-strategies.webp"
                alt=""
              />
            </div>
            <div className="blog-para">
              <p className="blog-date pt-5">_ July 14, 2023_ Expint</p>
              <h5 className="mt-3">
                Designing Intelligent Chatbots Strategies for
                <br />
                Effective User Interaction
              </h5>
              <p className="blog-description">
                Designing Intelligent Chatbots Strategies for Effective User
                Interaction Introduction Intelligent chatbots have become vital
                tools in enhancing user interactions and delivering personalised
                experiences. By understanding user needs and implementing
                effective conversational design principles, chatbots can engage
                users in meaningful conversations. In this blog post, we will
                explore strategies to design intelligent chatbots that provide
                seamless […]
              </p>
              <div
                className="flex align-center cursor-pointer items-center mt-3"
                onClick={() => Navigate(Routes.chatbots)}
              >
                <span className="blog-date">Learn More</span>
                <svg
                  fill="#43BAFF"
                  height="20px"
                  width="20px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 330 330"
                  xmlSpace="preserve"
                >
                  <path
                    id="XMLID_27_"
                    d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
  s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
  c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="blog-container flex">
            <div className="image">
              <img
                src="https://nexgits.com/wp-content/uploads/2023/04/AR-VR-Technology-for-Enhanced-Property-Viewing-scaled.jpg"
                alt=""
              />
            </div>
            <div className="blog-para">
              <p className="blog-date pt-5">_ April 19, 2023_ Expint</p>
              <h5 className="mt-3">
                Revolutionizing Property Viewing with AR-VR Technology in Real
                Estate
              </h5>
              <p className="blog-description">
                Revolutionizing property viewing with AR-VR Technology in real
                estate Since there is so much competition in the real estate
                industry, agents are constantly looking for innovative ideas to
                set themselves ahead. A fascinating development is an emergence
                of augmented reality (AR) and virtual reality (VR) technology,
                this provides homeowners with a more accurate and immersive
                experience for buyers […]
              </p>
              <div
                className="flex align-center cursor-pointer items-center mt-3"
                onClick={() => Navigate(Routes.arvrTechnology)}
              >
                <span className="blog-date">Learn More</span>
                <svg
                  fill="#43BAFF"
                  height="20px"
                  width="20px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 330 330"
                  xmlSpace="preserve"
                >
                  <path
                    id="XMLID_27_"
                    d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
  s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
  c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="blog-container flex">
            <div className="image">
              <img
                src="https://nexgits.com/wp-content/uploads/2023/04/Future-Work-of-AI-scaled.jpg"
                alt=""
              />
            </div>
            <div className="blog-para">
              <p className="blog-date pt-5">_ April 11, 2023_ Expint</p>
              <h5 className="mt-3">
                The Future of IT: How Artificial Intelligence is Transforming
                the IT Industry
              </h5>
              <p className="blog-description">
                The Future of IT: How Artificial Intelligence is Transforming
                the IT Industry Artificial Intelligence (AI) is revolutionizing
                the IT industry, transforming the way we work, and creating new
                opportunities for businesses to improve their processes and
                services. AI technologies like machine learning, natural
                language processing, and computer vision are enabling
                organizations to automate tasks, analyze […]
              </p>
              <div
                className="flex align-center cursor-pointer items-center mt-3"
                onClick={() => Navigate(Routes.artificialIntelligence)}
              >
                <span className="blog-date">Learn More</span>
                <svg
                  fill="#43BAFF"
                  height="20px"
                  width="20px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 330 330"
                  xmlSpace="preserve"
                >
                  <path
                    id="XMLID_27_"
                    d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
  s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
  c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
 
export default Blog;
