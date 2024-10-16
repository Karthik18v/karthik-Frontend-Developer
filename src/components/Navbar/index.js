import "./index.css";

const Navbar = () => {
  return (
    <div className="nav-bar-container">
      <div className="nav-logo-container">
        <img className="nav-logo"
          src="https://i.ibb.co/LPZ2P7N/Group-20.png"
          alt="Group-20"
          border="0"
        />
        <h2>EthaAi</h2>
      </div>
      <ul className="nav-items">
        <li>Features</li>
        <li>Why Us</li>
        <li>Tokenomics</li>
        <li>Roadmap</li>
      </ul>
      <div className="login-container">
        <p>Login</p>
        <button type="button" className="white-paper">
          Whitepaper
        </button>
      </div>
    </div>
  );
};

export default Navbar;
