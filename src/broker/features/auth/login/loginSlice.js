import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'otp',
  initialState: {
    loginData: { phoneNumber: '', otp: '' },
    // other fields for the Community feature
  },
  reducers: {
    // action to open the popup and set the message
    openPopup: (state, action) => {
      state.popup.isOpen = true;
      state.popup.message = action.payload;
    },
    // action to close the popup
    closePopup: state => {
      state.popup.isOpen = false;
    },

    showMyQuestionsMyAnswers: state => {
      state.myQuestionsMyAnswers = true;
    },

    hideMyQuestionsMyAnswers: state => {
      state.myQuestionsMyAnswers = false;
    },

    showQuestionDetailsPage: state => {
      state.questionDetails = true;
    },
  },
});

export const {
  openPopup,
  closePopup,
  showMyQuestionsMyAnswers,
  hideMyQuestionsMyAnswers,
  showQuestionDetailsPage,
} = loginSlice.actions;

export default loginSlice.reducer;
