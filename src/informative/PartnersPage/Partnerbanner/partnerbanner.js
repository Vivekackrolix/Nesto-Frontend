import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import './partnerbanner.css'


export default function PartnerBanner(){
    return (
      <>
        <Header/>
        <div className="banner-body">
          <div className="row">
            <div className="col-md-7">
              <div className="banner-content">
                <h3 className="banner-heading px-5">
                  Our Partners, The Companies That
Represent Us.
                </h3>
                <p className="banner-description px-5">
                  Borem ipsum dolor sit amet conse ctetur adipisicing elit sed do eiusmod Eorem ipsum dolor sit amet conse ctetur.
                </p>
                <div>
                  <a href="#" className="banner-button text-decoration-none mx-5">
                    Contact us
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-5 d-flex image-div">
            <img className='dot-curve' src="dotted-curve" alt="" />
             
              <img
                className="building-image"
                src="./assets/partnerbuiding.png"
                alt=""
              />
            </div>
          </div>
        </div>
       <Footer/>
       

      </>
    );
}