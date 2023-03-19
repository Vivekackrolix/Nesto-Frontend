import axios from "axios";

export const getBuilderDetail = async () => {
  debugger;
  const response = await axios.get(
    "http://13.234.136.165:3000/api/v1/builder/getAllBuilder",
    {
      headers: {
        Authorization:
          "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwNjkwNTY1MzJmMjU2OTQ3OWZjOWQiLCJpYXQiOjE2Nzg3OTc1ODMsImV4cCI6MTY4NjU3MzU4M30.8QjZtAmk342PMxa0CvGdqfp36BWk6lJ4QFyN6f1MO_A",
      },
    }
  );
  console.log(response.data);
};
