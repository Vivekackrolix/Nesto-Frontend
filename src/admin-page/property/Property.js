import React, { useState } from "react";
import {
  BsSearch,
  BsMic,
  BsGeoAlt,
  BsFillQuestionCircleFill,
} from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Admin.css";
import { Link } from "react-router-dom";
import { Container, Nav } from "react-bootstrap";
import { InputGroup, FormControl, Button, Form } from "react-bootstrap";
import { GoPlus } from "react-icons/go";
import Sidebar from "../Sidebar";
import Header from "../Header";
// import NotificationDropdown from "../Builderprofile/notification/NotificationDropdown";
// import property from "../../Images/property.png";
// import Brokerage from "../../Images/brokrage.png";
// import home from "../../Images/Home.png";

export default function Property() {
  return (
    <>
      <Header />
      <Row>
        <Col xs={2}>
          <Sidebar />
        </Col>
        <Col xs={10} style={{ backgroundColor: "#F5F5F5" }} className="py-4">
          <div className="">
            <h3>Property Listing</h3>
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
          <div className="mt-3">
            <h6>Showing 10 Property Listing</h6>
          </div>
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col " className="heading">
                  <div className="d-flex gap-2 justify-content-center align-items-center">
                    <input type="checkbox" name="" id="" />
                    <span>#</span>
                  </div>
                </th>
                <th scope="col " className="heading">
                  Builder
                </th>
                <th scope="col " className="heading">
                  Sub-Builder
                </th>
                <th scope="col " className="heading">
                  Name of Property
                </th>
                <th scope="col " className="heading">
                  Construction Status
                </th>
                <th scope="col " className="heading">
                  Property type
                </th>
                <th scope="col " className="heading">
                  Location
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
                  <div>Ann Culhane</div>
                  <p className="num">5684236526</p>
                </td>
                <td>
                  {" "}
                  <div>Ann Culhane</div>
                  <p className="num">5684236526</p>
                </td>
                <td>
                  <div>Sky Dandelions </div>
                  <p className="num">Apartment</p>
                </td>
                <td>
                  <div>Under Construction</div>
                </td>
                <td>
                  <div>2 BHK</div>
                </td>
                <td>
                  <div>Sec-29</div>
                  <span className="num">Gurugram</span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <div className="d-flex gap-2 justify-content-center align-items-center">
                    <input type="checkbox" name="" id="" />
                    <span>2</span>
                  </div>
                </th>
                <td>
                  <div>Ann Culhane</div>
                  <p className="num">5684236526</p>
                </td>
                <td>
                  {" "}
                  <div>Ann Culhane</div>
                  <p className="num">5684236526</p>
                </td>
                <td>
                  <div>Sky Dandelions </div>
                  <p className="num">Apartment</p>
                </td>
                <td>
                  <div>Under Construction</div>
                </td>
                <td>
                  <div>2 BHK</div>
                </td>
                <td>
                  <div>Sec-29</div>
                  <span className="num">Gurugram</span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <div className="d-flex gap-2 justify-content-center align-items-center">
                    <input type="checkbox" name="" id="" />
                    <span>3</span>
                  </div>
                </th>
                <td>
                  <div>Ann Culhane</div>
                  <p className="num">5684236526</p>
                </td>
                <td>
                  {" "}
                  <div>Ann Culhane</div>
                  <p className="num">5684236526</p>
                </td>
                <td>
                  <div>Sky Dandelions </div>
                  <p className="num">Apartment</p>
                </td>
                <td>
                  <div>Under Construction</div>
                </td>
                <td>
                  <div>2 BHK</div>
                </td>
                <td>
                  <div>Sec-29</div>
                  <span className="num">Gurugram</span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <div className="d-flex gap-2 justify-content-center align-items-center">
                    <input type="checkbox" name="" id="" />
                    <span>4</span>
                  </div>
                </th>
                <td>
                  <div>Ann Culhane</div>
                  <p className="num">5684236526</p>
                </td>
                <td>
                  {" "}
                  <div>Ann Culhane</div>
                  <p className="num">5684236526</p>
                </td>
                <td>
                  <div>Sky Dandelions </div>
                  <p className="num">Apartment</p>
                </td>
                <td>
                  <div>Under Construction</div>
                </td>
                <td>
                  <div>2 BHK</div>
                </td>
                <td>
                  <div>Sec-29</div>
                  <span className="num">Gurugram</span>
                </td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </>
  );
}
