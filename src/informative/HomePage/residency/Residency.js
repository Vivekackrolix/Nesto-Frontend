import './residency.css';
export default function Residency(){
    return (
      <>
        <div className="residency-main">
          <div className="main"></div>
          <div className="container residency-container">
            <div className="row">
              <div className="col-md-5">
                <img src="./assets/residence.png" alt="" />
                <div className="text-bold">
                  <h2>The Perfect Residency</h2>
                </div>
                <div className="desc text-left">
                  Lorem ipsum dolor sit amet, consectetur adipisic do eiusmod
                  tempor incididunt ut labore etLorem ipsum dolor sit amet,
                  consectetur adipisic do eiusmod tempor incididunt ut labore
                  etLorem ipsum dolor sit amet, consectetur adipisic do eiusmod
                  tempor incididunt ut labore etLorem ipsum dolor sit amet,
                  consectetur adipisic do eiusmod tempor incididunt ut labore
                  etLorem ipsum dolor sit amet.
                </div>
              </div>
              <div className="col-md-7">
                <img
                  className="animation-img"
                  src="./assets/animation.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
}