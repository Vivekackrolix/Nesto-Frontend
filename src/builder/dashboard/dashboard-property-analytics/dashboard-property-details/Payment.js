import { Container, Table } from "react-bootstrap";
import Slider from "react-slick";
import dlf from "../../../Images/dlf.png";
import "./Payment.css";

const Payment = ({ data }) => {
  // const unitType = data.unitType ? data.unitType : [];

  const PaymentPlan = data.paymentPlan?.map((itm) => (
    <tr>
      <td>{itm.payment}</td>
      <td>{itm.milestone}</td>
    </tr>
  ));
  const milestoneTable = data.milestones?.map((item, index) => (
    <Container
      className="dashboard_wrapper_filter border border_light rounded p-3 mx-5"
      style={{ border: "2.94206px solid #E3E3E7" }}
    >
      {" "}
      <h5>Milestone {index + 1}</h5>
      <div className="d-flex justify-content-between">
        <span>
          <h5 style={{ color: "#8B9199" }}>Condition</h5>
          <h5>{item?.condition}</h5>
        </span>
        <span>
          <h5 style={{ color: "#8B9199" }}>Brokerage%</h5>
          <h5>{item?.brokerage}</h5>
        </span>
      </div>
    </Container>
  ));

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          borderRadius: "50%",
          padding: "1px 0px",
        }}
        onClick={onClick}
      >
        <img className="next-image" src="/assets/next.png" alt="next" />
      </div>
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          borderRadius: "50%",
          padding: "1px 0px",
        }}
        onClick={onClick}
      >
        <img className="prev-image" src="/assets/next.png" alt="next" />
      </div>
    );
  }
  var settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    arrows: true,
    speed: 500,
    centerMode: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };
  // const advertisement = data?.propertyAdvertiseMentDetails?.map(
  //   (iteam, index) => (
  //     <div key={index} className=" border border_light rounded container mx-4">
  //       <div className="d-flex bd-highlight mb-3">
  //         <div className="me-auto p-1 bd-highlight">
  //           {" "}
  //           <img src={dlf} alt="property" />
  //         </div>
  //         <span className="me-auto p-2 bd-highlight">
  //           <h4>{iteam?.name}</h4>

  //           <h6 style={{ color: "#8B9199" }}>{iteam?.location}</h6>

  //           <h6 style={{ color: "#8B9199" }}>{iteam?.distance}</h6>
  //         </span>
  //       </div>
  //     </div>
  //   )
  // );

  const bankData = data.loanApprovedByIds?.map((item) => (
    <img src={item?.image} className="rounded my-3" alt="Home" />
  ));
  return (
    <>
      {/* <div className=" d-flex justify-content-around rounded gap-3 col-lg-12">
        <Slider {...settings}>{advertisement}</Slider>
      </div> */}
      <div className="container BlLocationAdvantageLocations">
        <Slider {...settings}>
          {data?.propertyAdvertiseMentDetails?.map((item) => (
            <div className="container">
              <div className="col-lg-12 BlLocationAdvantageLocations-col gap-3">
                <div className="BlLocationAdvantageLocations-col_child-div">
                  <img
                    src={dlf}
                    className="BlLocationAdvantageLocations-col_child-div_img"
                    alt="property"
                  />
                </div>
                <div className="BlLocationAdvantageLocations-col_child-div">
                  <span className="LocationAdvantageLocations-child-div_span-1">
                    {item?.name}
                  </span>
                  <span className="BlLocationAdvantageLocations-child-div_span-2">
                    {item?.location}
                  </span>
                  <span className="BlLocationAdvantageLocations-child-div_span-3">
                    {item?.distance}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <br></br>
      <br></br>
      <h3>Brokerage Payout plan</h3>
      <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4">
        <br></br>

        <h4>Brokerage {data.brokerageValue}%</h4>
        <p style={{ color: "#7D7F88" }}>
          {/* Platform charges & applicable taxes shall be deducted */}
          {data.brokerageTerms}
        </p>

        <br></br>
      </Container>

      <br></br>
      <br></br>
      <h3>Milestone</h3>
      <br></br>

      <div className="p-1 d-flex justify-content-between  rounded">
        {milestoneTable}
      </div>
      <br></br>

      <br></br>
      <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4">
        <div className="p-2 d-flex justify-content-between">
          <h4>About the Project</h4>
          <i style={{ color: "#FC5C67", textDecorationLine: "underline" }}>
            View Details
          </i>
        </div>
        <hr />
        <span style={{ color: "#7D7F88", alignitems: "cente" }}>
          {data.propertyDescription}
        </span>
        <br></br>
        <br></br>
      </Container>
      <br></br>
      <br></br>
      <h3>Payment Plan</h3>
      <Container className="  border-light rounded shadow-sm ">
        <div className=" d-flex justify-content-around"></div>
        <Table className=" table table-hover profile__transaction ">
          <thead>
            <tr>
              <th>Payment %</th>
              <th>Milestone</th>
            </tr>
          </thead>
          <tbody>{PaymentPlan}</tbody>
        </Table>
      </Container>
      <br></br>
      <br></br>
      <div className="p-4 d-flex justify-content-between">
        <h3>Loan Approved By</h3>
        <i style={{ color: "#FC5C67", textDecorationLine: "underline" }}>
          View All
        </i>
      </div>
      <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4">
        <div className="p-4 d-flex justify-content-around">{bankData}</div>
      </Container>
      <br></br>
      <br></br>

      <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4">
        <div className="p-3 d-flex justify-content-between">
          <h4>About the Builder</h4>
          <i style={{ color: "#FC5C67", textDecorationLine: "underline" }}>
            View Details
          </i>
        </div>
        <hr />
        <span style={{ color: "#7D7F88", alignitems: "cente" }}>
          {data?.builderId?.description}
        </span>
        <br></br>
        <br></br>
      </Container>
      <br></br>
      <br></br>
    </>
  );
};
export default Payment;
