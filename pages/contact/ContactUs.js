import React, { useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import SetMetaData from "../../components/common/metaData/SetMetaData";

function ContactUs() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  return (
    <>
      <SetMetaData
        title="Expint - Reach Out to Us"
        metaTitle="Expint - Reach Out to Us"
        description="Connect with our pump experts effortlessly. Whether you're seeking assistance, collaboration opportunities, or simply want to say hello, we're here to listen. Drop us a message, and let's work together to address your pumping needs efficiently. Your satisfaction is our priority."
        keyword="Software"
      />
      <div className="contactpage">
        <div className="contact-banner">
          <div className="container">
            <div className="contact-banner-inner">
              <div className="banner-text">
                <h1>Reach Out to Us</h1>
                <p>
                  We are 100+ professional software engineers with more than 10
                  years of experience in delivering World-Class Software
                  Solutions
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <div className="container">
            <div className="cf-inner">
              <div className="cf-left">
                <div className="form-heading">
                  <h2>Get in touch with us</h2>
                  <p>
                    Have questions or inquiries? Reach out to us directly.
                    Whether you are looking for technical support, product
                    information, or want to discuss a customized solution, we
                    are just a message away. Contact us today and let us start
                    the conversation.
                  </p>
                </div>
                <form className="form" method="post">
                  <div className="name-sec">
                    <div className="first-name">
                      <label>First name</label>
                      <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                    <div className="last-name">
                      <label>Last name</label>
                      <input
                        type="text"
                        id="last_name"
                        name="last_name"
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                  </div>
                  <div className="contact-details">
                    <div className="phone">
                      <label>Phone number</label>
                      <input
                        type="tel"
                        id="phone_number"
                        name="phone_number"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="email">
                      <label>Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                  <div className="message">
                    <label>Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="Enter your message..."
                    ></textarea>
                  </div>
                  <button className="blue-btn" type="submit">
                    Send message
                  </button>
                </form>
              </div>
              <div className="cf-right">
                <div className="office-india">
                  <img src="india.png" alt="India" />
                  <h5>Development Center</h5>
                  <p>
                    Radhe Fortune Complex, Bhat, Ahmedabad, Gujarat, India
                    382428
                  </p>
                  <a href="tel:+917265830975">+91 7265830975</a>
                </div>
                <div className="office-europ">
                  <h5>Sales & Marketing</h5>
                  <p>
                    Shed No. -S/4, Plot No.-372/D Kathwada, GIDC, Ahmedabad
                    Gujarat,382330
                  </p>
                  <a href="tel:+917265830975">+91 7265830975</a>
                </div>
              </div>
            </div>
          </div>
          <div className="map-location">
            <div className="google-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.47916496609!2d72.62932707588338!3d23.11615451282833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8159f28faa29%3A0xa6cee10fc4ba657d!2sRadhe%20Fortune!5e0!3m2!1sen!2sin!4v1726387454128!5m2!1sen!2sin"
                width="574"
                height="724"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map: PIONEAR PUMPS AND MOTORS"
              />
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default ContactUs;
