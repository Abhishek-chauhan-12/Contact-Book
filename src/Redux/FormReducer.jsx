import { createSlice } from '@reduxjs/toolkit'
const FormReducer = createSlice({
  name: 'user',
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload)
    },
    remove(state, action) {
      return state.filter((cur, index) => index != action.payload)
    },
    upd(state, action) {
      // return state.map((cur,ind)=>cur.action.ind==action.data? action:state)
      state[action.payload.id] = action.payload.data
    },
  },
})

export const { add, remove, upd } = FormReducer.actions
export default FormReducer.reducer