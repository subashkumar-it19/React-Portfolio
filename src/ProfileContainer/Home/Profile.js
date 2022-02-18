import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import logo from "../../assets/Home/logo1.png";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="logo-fit">
        <img src={logo} alt="No" />
      </div>
      <div className="profile-parent">
        <div className="profile-details">
          <div class="">
            <div className="profile-details-name">
              <div className="profile-role-tagline">
                Hello
                <div className="wave">👋 </div>
              </div>
              <span className="primary-text">
                {" "}
                I'm <span className="highlighted-text">Subash Kumar</span>
              </span>
              <div className="profile-details-role">
                <span className="primary-text">
                  {" "}
                  <h1>
                    {"  "}
                    <Typical
                      loop={Infinity}
                      steps={[
                        "Full-Stack Developer 💻",
                        1000,
                        "Mobile App Developer 📱",
                        1000,
                        "Designer 😈",
                        1000,
                      ]}
                    />
                  </h1>
                  <span className="profile-role-tagline">
                    Knack of building application with front and back end
                    operations
                  </span>
                </span>
              </div>
              <div class="text-lg">
                <div className="colz">
                  <div className="colz-icon">
                    <a href="https://www.facebook.com/profile.php?id=100024867242789">
                      <i className="fa fa-facebook-square"></i>
                    </a>
                    <a href="https://github.com/subashkumar-it19">
                      <i className="fa fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/subashkumar-n-864244200/">
                      <i className="fa fa-linkedin"></i>
                    </a>
                    <a href="mailto: subashkumar1359@gmail.com?subject = Callback">
                      <i className="fa fa-envelope"></i>
                    </a>
                    <a href="https://wa.me/+917397533482">
                      <i className="fa fa-whatsapp"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="profile-options">
                <a
                  href="SUBASHKUMAR-RESUME.pdf"
                  download="SUBASHKUMAR-RESUME.pdf"
                >
                  <button className="btn highlighted-btn"> Get Resume</button>
                </a>
              </div>
            </div>
          </div>
          <div className="profile-image">
            <div class="">
              <img src={require("../../assets/Home/bg4.png")} />
            </div>
          </div>
        </div>
      </div>
      <span>
        <div></div>
      </span>
    </div>
  );
}
