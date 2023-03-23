const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    filter: {
        project: [],
    },
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        filterBy: (state, action) => {
            const find = state.filter.project.find(p => p.id === action.payload.id)
            if(find?.id){
                state.filter.project = state.filter.project.filter(p => p.id !== action.payload.id)
            } else {
            state.filter.project.push(action.payload)
            }
        },
    },
});

export default filterSlice.reducer;
export const { filterBy } = filterSlice.actions;
