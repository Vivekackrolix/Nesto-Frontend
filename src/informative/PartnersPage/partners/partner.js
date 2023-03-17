import './partners.css'
import {FaStar} from 'react-icons/fa'
import {AiOutlineStar} from 'react-icons/ai'
export default function Partner(){
    return (
      <>
        <div className="container my-4">
          <div className="row flex gx-5">
            <div className="col-md-4  text-center">
              <div className="shadow py-5 partner-card" >
                <div>
                  <img className="logo-img" src="./assets/logo.png" alt="" />
                </div>
                <div className="mt-0">
                  <span className='partner-heading'>Puri Construction</span>
                </div>
                <div>
                  <p className="listing">134 properties listed</p>
                </div>
                <div className="flex">
                  <FaStar className="mx-1" fill="#FFB630" size={20} />
                  <FaStar className="mx-1" fill="#FFB630" size={20} />
                  <FaStar className="mx-1" fill="#FFB630" size={20} />
                  <FaStar className="mx-1" fill="#FFB630" size={20} />
                  <AiOutlineStar className="mx-1" color="#FFB630" size={22} />
                </div>
              </div>
            </div>
            <div className="col-md-4  text-center">
              <div className="shadow py-5 partner-card">
                <div>
                  <img className="logo-img" src="./assets/logo.png" alt="" />
                </div>
                <div className=" mt-0">
                  <span className='partner-heading'>Puri Construction</span>
                </div>
                <div>
                  <p className="listing">134 properties listed</p>
                </div>
                <div className="flex">
                  <FaStar className="mx-1" fill="#FFB630" size={20} />
                  <FaStar className="mx-1" fill="#FFB630" size={20} />
                  <FaStar className="mx-1" fill="#FFB630" size={20} />
                  <FaStar className="mx-1" fill="#FFB630" size={20} />
                  <AiOutlineStar className="mx-1" color="#FFB630" size={22} />
                </div>
              </div>
            </div>
            <div className="col-md-4  text-center">
              <div className="shadow py-5 partner-card">
                <div>
                  <img className="logo-img" src="./assets/logo.png" alt="" />
                </div>
                <div className="mt-0">
                                <span className='partner-heading'>Puri Construction</span>

                </div>
                <div>
                  <p className="listing">134 properties listed</p>
                </div>
                <div className="flex">
                  <FaStar className="mx-1" fill="#FFB630" size={20} />
                  <FaStar className="mx-1" fill="#FFB630" size={20} />
                  <FaStar className="mx-1" fill="#FFB630" size={20} />
                  <FaStar className="mx-1" fill="#FFB630" size={20} />
                  <AiOutlineStar className="mx-1" color="#FFB630" size={22} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}