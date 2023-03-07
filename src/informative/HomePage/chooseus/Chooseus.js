
import Heading from '../heading/Heading';
import './chooseus.css';
export default function ChooseUs() {
  return (
    <>
      <div className="container">
      
<Heading
               title="Trusted by Millions"
               sub="Why Choose Us"
/>

        <div className="row py-4 mb-4 gx-4 flex">
          <div className="col-md-3 text-center">
            <div className="px-2 shadow choose-card">
              <div className="mt-2 mb-4">
                <img src="./assets/choose1.png" alt="" />
              </div>
              <div className="text-center card-heading ">
                <h5 className="my-2"> Trusted By Thousands</h5>
              </div>
              <div className="text-center card-desc mb-2 ">
                With over 1 million+ homes for sale available on the website,
                Trulia can match you with a house you will want to call home.
              </div>
            </div>
          </div>
          <div className="col-md-3 text-center">
            <div className="px-2 shadow choose-card">
              <div className="mt-2 mb-4">
                <img src="./assets/choose4.png" alt="" />
              </div>
              <div className="text-center card-heading ">
                <h5 className="my-2"> Wide Range Of Properties</h5>
              </div>
              <div className="text-center card-desc mb-2 ">
                With over 1 million+ homes for sale available on the website,
                Trulia can match you with a house you will want to call home.
              </div>
            </div>
          </div>
          <div className="col-md-3 text-center">
            <div className="px-2 shadow choose-card">
              <div className="mt-2 mb-4">
                <img src="./assets/choose3.png" alt="" />
              </div>
              <div className="text-center card-heading ">
                <h5 className="my-2"> Financing Made Easy</h5>
              </div>
              <div className="text-center card-desc mb-2 ">
                With over 1 million+ homes for sale available on the website,
                Trulia can match you with a house you will want to call home.
              </div>
            </div>
          </div>
          <div className="col-md-3 text-center">
            <div className="px-2 shadow choose-card">
              <div className="mt-2 mb-4">
                <img src="./assets/choose4.png" alt="" />
              </div>
              <div className="text-center card-heading ">
                <h5 className="my-2"> See Neighborhoods</h5>
              </div>
              <div className="text-center card-desc mb-2 ">
                With over 1 million+ homes for sale available on the website,
                Trulia can match you with a house you will want to call home.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
