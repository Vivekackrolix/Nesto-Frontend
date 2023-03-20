import axios from "axios";
import { builderDetailActions } from "../builderDetailSlice";

export const getBuilderDetail = () => {
  return async (dispatch) => {
    //HTTP REQ
    const getData = async () => {
      const response = await axios.get(
        "http://13.234.136.165:3000/api/v1/builder/getAllBuilder",
        {
          headers: {
            Authorization:
              "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwNjkwNTY1MzJmMjU2OTQ3OWZjOWQiLCJpYXQiOjE2Nzg3OTc1ODMsImV4cCI6MTY4NjU3MzU4M30.8QjZtAmk342PMxa0CvGdqfp36BWk6lJ4QFyN6f1MO_A",
          },
        }
      );

      return response.data;
    };

    //CALL HTTP REQ AND USE REDUX
    try {
      const data = await getData();
      if (data.code !== 200) {
        console.log("Permission not available");
      } else {
        const builderData = data.data.filter(
          //   (itm) => itm.phoneNumber === localStorage.getItem("phone")
          (itm) => itm._id === "64107bce7b4c4240671aeb94"
        );
        // console.log(builderData);
        dispatch(builderDetailActions.setDetails({ details: builderData }));
      }
    } catch (err) {
      console.log("BuilderDetail Get Request Error");
    }
  };
};

// export const fetchAllData = (userEmail) => {
//     return async (dispatch) => {
//         const getData = async () => {
//             const response = await axios.get(`.json`);
//             if (response.statusText !== 'OK') {
//                 throw new Error('GET REQ FAILED');
//             }
//             return response.data;
//         }

//         try {
//             let data = await getData();
//             if (data === null) {
//                 // console.log("Firebase is empty");
//             } else {
//                 const inbox = data.filter((itm) => itm.rEmail === userEmail && !itm.rDelete);
//                 const outbox = data.filter((itm) => itm.sEmail === userEmail && !itm.sDelete);
//                 dispatch(mailActions.replaceMailState({ mails: data, inbox: inbox, outbox: outbox }));
//             }
//         } catch (err) {
//             console.log("MAIL-SLICE GET ERROR");
//         }
//     }
// }