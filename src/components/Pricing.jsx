

const Pricing = () => {
  return (
    <div className="Pricing" id="pricing">
      <h1><span>OUR</span> PRICING</h1>
      <div className="card-container">
        <div className="card">
            <div className="top-part">
                <b>BASIC PLAN</b> <br />
                <b>$10</b>
                <p>Monthly</p>
            </div>
            <div className="main">
                <p>2GB SPACE</p>
                <p>200GB BANDWIDTH</p>
                <p>20 MORE THEMES</p>
                <p>LIFETIME SUPPORT</p>
                <button>SIGN UP</button>
            </div>
        </div>
        <div className="card">
        <div className="top-part">
                <b>BUSINESS PLAN</b> <br />
                <b>$10</b>
                <p>Monthly</p>
            </div>
            <div className="main">
                <p>5GB SPACE</p>
                <p>500GB BANDWIDTH</p>
                <p>50 MORE THEMES</p>
                <p>LIFETIME SUPPORT</p>
                <button>SIGN UP</button>
            </div>
        </div>
        <div className="card">
        <div className="top-part">
                <b>PRO PLAN</b> <br />
                <b>$10</b>
                <p>Monthly</p>
            </div>
            <div className="main">
                <p>10GB SPACE</p>
                <p>1TB BANDWIDTH</p>
                <p>100 MORE THEMES</p>
                <p>LIFETIME SUPPORT</p>
                <button>SIGN UP</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
