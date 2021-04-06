import { createSlice } from '@reduxjs/toolkit';

type TTnitialState = {
  isOpen: boolean;
};

const initialState = {
  isOpen: false,
} as TTnitialState;

export const modalSlice = createSlice({
  name: 'modal',
  initialState: initialState,
  reducers: {
    doOpenModal(state) {
      state.isOpen = true;
    },
    doCloseModal(state) {
      state.isOpen = false;
    },
  },
});

const { actions, reducer } = modalSlice;
export const { doOpenModal, doCloseModal } = actions;
export default reducer;
