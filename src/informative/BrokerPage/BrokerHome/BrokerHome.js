import './BokerHome.css'
export default function BrokerHome(){
    return (
      <>
        <div className="main-body pt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-7 d-flex text-left">
                <div>
                  <div className="banner-heading mt-5">
                    <h2>Welcome to India's Largest Network Of Brokers</h2>
                  </div>
                  <div className="mt-5">
                    <p>
                      Broker Network app is a suite of services specifically
                      designed for Indian real estate brokers and developers to
                      maximize their business.
                    </p>
                  </div>
                  <div className="">
                    <a href="" className="btn btn-primary mt-5">
                      Get Started
                    </a>
                  </div>
                </div>
                <img className="broker-img" src="./assets/broker.png" alt="" />
              </div>
              <div className="col-md-5">
                <form className="submit-form text-center" action="">
                  <div>
                    <h3>Best Platform for Broker</h3>
                  </div>
                  <div className="mb-4">
                    <h5>Enter your details below</h5>
                  </div>
                  <div className="my-4">
                    <input
                      className="form-input"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                  <div className="my-4">
                    <input
                      className="form-input"
                      type="number"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="my-4">
                    <input
                      className="form-input"
                      type="mail"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="my-4">
                    <select className="form-input">
                      <option value="Ford">Property Type</option>
                      <option value="Volvo">Volvo</option>
                      <option value="Fiat">Fiat</option>
                    </select>
                  </div>
                  <div className="my-4">
                    <select className="form-input">
                      <option value="Ford">Location Of Property</option>
                      <option value="Volvo">Volvo</option>
                      <option value="Fiat">Fiat</option>
                    </select>
                  </div>
                  <div className="my-4">
                    <input
                      className="form-input"
                      type="text"
                      placeholder="Brief Description"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}