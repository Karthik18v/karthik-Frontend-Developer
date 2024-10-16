import "./index.css";

const Features = () => {
  return (
    <div className="features-container">
      <div className="features">
        <div className="trade-optimizer">
          <img
            className="feature-logo"
            src="https://i.imghippo.com/files/xprz01729069584.png"
            alt="feature"
          />
          <div>
            <h3>Trade Optimizer</h3>
            <p className="feature-description">
              Find the right moments to buy or sell, with personalized trade
              suggestions designed to help you make the most of every
              opportunity.
            </p>
          </div>
        </div>
        <div className="market">
          <div className="market-section-1">
            <div className="market-section-1-container">
              <h2 className="market-section-1-heading">Market Insight</h2>
              <p>
                Stay ahead of the market. Get real-time updates on market
                trends, track top traders' movements, and spot signals from key
                influencers.
              </p>
            </div>
            <img src="https://i.imghippo.com/files/8oOyT1729071323.png" alt="logo"/>
          </div>
          <div className="market-section-2"></div>
        </div>
        <div className="risk-guard-container">
          <img
            className="risk-guard-img"
            src="https://i.imghippo.com/files/bTZey1729078074.png"
            alt="logo"
          />
          <div className="risk-guard-description">
            <h2>Risk Guard</h2>
            <p>
              Get alerts on market swings and potential risks before they impact
              your portfolio. This agent helps you navigate volatility and stay
              prepared for anything.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
