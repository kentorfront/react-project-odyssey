import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: []
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload)
        },
        setUsers: (state, action) => {
            state.users = action.payload
        },
        addPassword: (state, action) => {
            const { id, password } = action.payload;
            const user = state.users.find(user => user.id === id);
            if (user) {
                user.password = password;
            }
        },
        setPassword: (state, action) => {
            const { id, password } = action.payload;
            const user = state.users.find(user => user.id === id);
            if (user) {
                user.password = password;
            }
        }
    }
})

export const { addUser, setUsers, addPassword, setPassword } = usersSlice.actions;
export default usersSlice.reducer;
