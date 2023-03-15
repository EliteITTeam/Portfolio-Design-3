import React from "react";
import { MuiTabs } from "../../components";
import "./Home.scss";
import { GrLinkedinOption } from "react-icons/gr";
import { CiBasketball } from "react-icons/ci";
import { FaGithubAlt, FaInstagramSquare, FaFigma } from "react-icons/fa";
import FormInput from "../../FormInput/FormInput";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const Home = () => {
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is Required"),
    name: Yup.string().required("name is Required"),
  });
  return (
    <>
      <div className="about-container">
        <div className="about-container-content">
          <div className="about-container-content-left">
            <div className="about-container-content-left-img1"></div>
            <div className="about-container-content-left-img2"></div>
          </div>
          <div className="about-container-content-right">
            <div className="about-container-content-right-ab-data">
              <h3>ABOUT</h3>
              <span></span>
            </div>
            <h1>Imran Ahmad</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
              quisque leo dictum quis turpis. Felis eget porta sem leo ornare
              nunc lacus.{" "}
            </p>
            <div className="about-container-content-right-ab-data">
              <h3>SKILL</h3>
              <span></span>
            </div>
            <div className="about-container-content-right-skills">
              <div className="about-container-content-right-skills-left">
                <ul>
                  <li>
                    <span>Photoshop</span>
                  </li>
                  <li>
                    <span>illustrator</span>
                  </li>
                  <li>
                    <span>Figma</span>
                  </li>
                </ul>
              </div>
              <div className="about-container-content-right-skills-meddle">
                <ul>
                  <li>
                    <span>HTML</span>
                  </li>
                  <li>
                    <span>CSS</span>
                  </li>
                  <li>
                    <span>JavaScript</span>
                  </li>
                </ul>
              </div>
              <div className="about-container-content-right-skills-right">
                <ul>
                  <li>
                    <span>Bootstrap 4.0</span>
                  </li>
                  <li>
                    <span>React JS</span>
                  </li>
                  <li>
                    <span>Python</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tab-container">
        <div className="tab-container-content">
          <div className="tab-container-content-work">
            <h3>WORK</h3>
            <span></span>
          </div>
          <MuiTabs />
        </div>
      </div>
      <div className="blog-container">
        <div className="blog-container-content">
          <div className="blog-container-content-work">
            <h3>BLOG</h3>
            <span></span>
          </div>
          <div className="blog-container-content-bcard">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </div>
      <div className="contact-container">
        <div className="contact-container-title">
          <h3>CONTACT US</h3>
          <span></span>
        </div>
        <div className="contact-container-content">
          <div className="contact-container-content-left">
            <h1>Let's Talk</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque consequat eget nulla morbi magna enim. Ultricies
              massa arcu ultricies quis.
            </p>
            <div className="contact-container-content-left-icons">
              <GrLinkedinOption className="in" />
              <FaGithubAlt className="git" />
              <FaFigma className="figma" />
              <FaInstagramSquare className="insta" />
              <CiBasketball className="ball" />
            </div>
          </div>
          <div className="contact-container-content-right">
            <Formik
              initialValues={{
                email: "",
                name: "",
              }}
              validationSchema={validate}
            >
              {(formik) => (
                <div>
                  <Form>
                    <FormInput
                      label="Name"
                      name="name"
                      type="text"
                      place="Enter your name"
                    />
                    <FormInput
                      label="Email"
                      name="email"
                      type="email"
                      place="Enter your email"
                    />
                  </Form>
                </div>
              )}
            </Formik>
            <div className="contact-container-content-right-inputfield">
              <label for="textarea">Message</label>
              <textarea
                id="textarea"
                placeholder="Write your message here"
              ></textarea>
              <div className="contact-container-content-right-inputfield-btn">
                <button>Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

const BlogCard = () => {
  return (
    <div className="bcard">
      <div className="bcard-content">
        <div className="bcard-content-r1">
          <h1>lorem ipsum </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
            pellentesque lectus leo arcu. Auctor nulla non est amet, urna a et
            vestibulum.{" "}
          </p>
        </div>
        <h3>Read more</h3>
      </div>
    </div>
  );
};
