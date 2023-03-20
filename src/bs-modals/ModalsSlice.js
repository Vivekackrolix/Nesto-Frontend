import { createSlice } from '@reduxjs/toolkit/dist';

export const modalsSlice = createSlice({
  name: 'bsModal',
  initialState: {
    isEnterOtpPopup: false,
  },

  reducers: {
    openEnterOtpPopup: state => {
      state.isEnterOtpPopup = true;
    },
  },
});

export const { openEnterOtpPopup } = modalsSlice.actions;
export default modalsSlice.reducer;
