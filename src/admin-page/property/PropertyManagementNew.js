import { Col, Row } from "react-bootstrap";
import { GoPlus } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";
import Toggle from "react-toggle";

const PropertyManagementNew = () => {
  return (
    <Row>
      <Col xs={12}>{/* <Sidebar /> */}</Col>
      <Col xs={12} style={{ backgroundColor: "#F5F5F5" }} className="py-4">
        <div className="pb-3">
          <h3>Property Listingfbb</h3>
        </div>
        <div className="d-flex gap-2 property-listing-menu">
          <div className="content gap-2 border">
            <span>life</span>
            <RxCross1 className="" style={{ color: "black" }} size={12} />
          </div>
          <div className="content gap-2 border">
            <span>health</span>
            <RxCross1 className="" style={{ color: "black" }} size={12} />
          </div>
          <div className="content gap-2 border">
            <span>helong-term disabilityalth</span>
            <RxCross1 className="" style={{ color: "black" }} size={12} />
          </div>
          <div className="content gap-2 border">
            <span>helong-term disabilityalth</span>
            <RxCross1 className="" style={{ color: "black" }} size={12} />
          </div>
          <div className="content text-primary gap-2 border">
            <GoPlus
              style={{ color: "black" }}
              className="text-primary"
              size={12}
            />
            <span>Add Filter</span>
          </div>
          <div className="content text-primary gap-2 border">
            <span>Delete All</span>
          </div>
        </div>
        <div className="my-4">
          <h6>Showing 10 Property Listing</h6>
        </div>
        <table class="table propery-management-table">
          <thead className="">
            <tr>
              <th scope="col " className="heading">
                <div className="d-flex gap-2  justify-content-center align-items-center">
                  <input type="checkbox" name="" id="" />
                  <span>
                    # <img src="/assets/column-sorting.png" alt="" />
                  </span>
                </div>
              </th>
              <th scope="col " className="heading">
                Property Type
              </th>
              <th scope="col " className="heading">
                Location
              </th>
              <th scope="col " className="heading">
                Price
              </th>
              <th scope="col " className="heading">
                Brokerage
              </th>
              <th scope="col " className="heading">
                Tags
              </th>
              <th scope="col " className="heading">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <div className="d-flex gap-2 justify-content-center align-items-center">
                  <input type="checkbox" name="" id="" />
                  <span>1</span>
                </div>
              </th>
              <td>
                <div>2 BHK</div>
              </td>
              <td>
                {" "}
                <div>Sec-29</div>
                <p className="num">Gurugram</p>
              </td>
              <td>
                <div className="property-price">-₹270.00</div>
              </td>
              <td>
                <div className="property-price">-₹270.00</div>
              </td>
              <td>
                <div>
                  <select name="" id="" className="property-tags">
                    <option value="">Recent</option>
                    <option value="">Featured</option>
                    <option value="">Best Seller</option>
                    <option value="">Promotional</option>
                  </select>
                </div>
              </td>
              <td>
                <div>
                  <label>
                    <Toggle
                      // defaultChecked={this.state.tofuIsReady}
                      icons={false}
                      // onChange={this.handleTofuChange}
                    />
                  </label>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <div className="d-flex gap-2 justify-content-center align-items-center">
                  <input type="checkbox" name="" id="" />
                  <span>1</span>
                </div>
              </th>
              <td>
                <div>2 BHK</div>
              </td>
              <td>
                {" "}
                <div>Sec-29</div>
                <p className="num">Gurugram</p>
              </td>
              <td>
                <div className="property-price">-₹270.00</div>
              </td>
              <td>
                <div className="property-price">-₹270.00</div>
              </td>
              <td>
                <div>
                  <select name="" id="" className="property-tags">
                    <option value="">Recent</option>
                    <option value="">Featured</option>
                    <option value="">Best Seller</option>
                    <option value="">Promotional</option>
                  </select>
                </div>
              </td>
              <td>
                <div>
                  <label>
                    <Toggle
                      // defaultChecked={this.state.tofuIsReady}
                      icons={false}
                      // onChange={this.handleTofuChange}
                    />
                  </label>
                </div>
              </td>
            </tr>
          </tbody>
        </table>{" "}
      </Col>
    </Row>
  );
};

export default PropertyManagementNew;
