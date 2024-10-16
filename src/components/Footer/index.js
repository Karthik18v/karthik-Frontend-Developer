import "./index.css";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-container">
        <div className="footer-section1">
          <div className="footer-section">
            <img
              className="footer-logo"
              src="https://i.ibb.co/LPZ2P7N/Group-20.png"
              alt="Group-20"
              border="0"
            />
            <h2>EthaAi</h2>
          </div>
          <div className="social-media">
            <img
              className="social-media-logo"
              src="https://i.imghippo.com/files/ciptd1729090175.png"
              alt="facebook"
            />
            <img
              className="social-media-logo"
              src="https://i.imghippo.com/files/1cPuR1729090374.png"
              alt="facebook"
            />
            <img
              className="social-media-logo"
              src="https://i.imghippo.com/files/iaNpR1729090440.png"
              alt="facebook"
            />
            <img
              className="social-media-logo"
              src="https://i.imghippo.com/files/OaY9X1729090497.png"
              alt="facebook"
            />
          </div>
        </div>
        <div className="footer-section-email">
          <h3>“Designed for traders of today, just like you."</h3>
          <div className="email-input-container">
            <input className="email-input" type="text" placeholder="Enter Your Work Email"/>
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
