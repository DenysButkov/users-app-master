import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    data: [
      {
        id: uuidv4(),
        name: 'Denys',
        pass: '558671',
        email: 'denysbutkov@gmail.com',
      },
      {
        id: uuidv4(),
        name: 'John',
        pass: '123456',
        email: 'john@gmail.com',
      },

      {
        id: uuidv4(),
        name: 'Dave',
        pass: '1111111',
        email: 'dave@gmail.com',
      },

      {
        id: uuidv4(),
        name: 'Ann',
        pass: '123456',
        email: 'ann@gmail.com',
      },

      {
        id: uuidv4(),
        name: 'Alex',
        pass: '123456',
        email: 'alex@gmail.com',
      },
    ],
  },
  reducers: {
    editUser: (state, action) => {
      let currentUserIdx = state.data.findIndex((user) => user.id === action.payload.id);
      state.data[currentUserIdx] = action.payload;
    },

    addUser: (state, action) => {
      state.data.push({ ...action.payload, id: uuidv4() });
    },

    removeUser: (state, action) => {
      state.data.splice(action.payload, 1);
    },
  },
});

export const { editUser, addUser, removeUser } = userSlice.actions;
export const selectAllUsers = (state) => state.users.data;
export default userSlice.reducer;
