import { Button } from "react-bootstrap";
import submit from "../../../Images/submit.png";

const SubmitPop = () => {
  return (
    <>
      <img src={submit} alt="" />
      <h2>Request Submitted</h2>
      <h3>
        Changes suggested by you will be live.Post review ny Nestohub team
      </h3>
      <Button
        type="submit"
        variant="primary"
        className="w-50 rounded-pill bg-color-primary"
      >
        Done
      </Button>
    </>
  );
};
export default SubmitPop;
