import "./index.css";

const Tokenomics = () => {
  return (
    <div className="tokenomic">
      <div>
        <h1>Tokenomics</h1>
        <div className="tokenomic-container">
            <img className="tokenomics-img" src="https://i.imghippo.com/files/NEGV41729082250.png" alt="pie"/>
            <div className="tokenomic-description">
                <div className="tokenomic-description-1">
                    <div className="tokenomic-description-1-item">
                        <p>Names</p>
                        <p>:EthaAi</p>
                    </div>
                    <div className="tokenomic-description-1-item">
                        <p>Token Name</p>
                        <p>:$EthaAi</p>
                    </div>
                    <div className="tokenomic-description-1-item">
                        <p>Token Standard</p>
                        <p>:ERC20</p>
                    </div>
                    <div className="tokenomic-description-1-item">
                        <p>Blockchain</p>
                        <p>:Ethereum</p>
                    </div>
                    <div className="tokenomic-description-1-item">
                        <p>Total Supply</p>
                        <p>:100million</p>
                    </div>
                    <div className="tokenomic-description-1-item">
                        <p>Tax</p>
                        <p>:5%/5%</p>
                    </div>
                </div>
                <div className="tokenomic-description-2">
                    <div className="tokenomic-description-1-item">
                        <p>Team</p>
                        <p>:35%</p>
                    </div>
                    <div className="tokenomic-description-1-item">
                        <p>Marketing</p>
                        <p>:5%</p>
                    </div>
                    <div className="tokenomic-description-1-item">
                        <p>Liquidity Pool</p>
                        <p>:90%</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
