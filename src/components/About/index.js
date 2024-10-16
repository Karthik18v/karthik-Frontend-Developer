import "./index.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <h1>About EthaAi</h1>
        <p className="about-description">
          At EthAi, we’re all about making crypto trading easier and more
          intuitive. We provide tools that help traders keep up with all new
          market trends, track top traders’ movements.
        </p>
        <button className="read-btn">Read more</button>
        <div className="about-section-1">
          <div className="about-card">
            <img
              src="https://i.imghippo.com/files/obF1n1729081189.png"
              alt="logo"
            />
            <h3>Stay Ahead</h3>
            <p>
              No more guesswork—get clear,
              <br /> trustable insights.
            </p>
          </div>
          <div className="about-card">
            <img
              src="https://i.imghippo.com/files/obF1n1729081189.png"
              alt="logo"
            />
            <h3>Know Your Assets</h3>
            <p>Always stay on top of how your investments are performing.</p>
          </div>
          <div className="about-card">
            <img
              src="https://i.imghippo.com/files/obF1n1729081189.png"
              alt="logo"
            />
            <h3>Simple, Not Overwhelming</h3>
            <p>
              Our tools are designed to make complex market analysis easy to
              understand and act on.
            </p>
          </div>
          <div className="about-card">
            <img
              src="https://i.imghippo.com/files/obF1n1729081189.png"
              alt="logo"
            />
            <h3>Future-Proof</h3>
            <p>
              We’re constantly improving, adding new features to help you make
              the most informed decisions possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
