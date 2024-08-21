import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"

const url = 'https://jsonplaceholder.typicode.com/users'

export interface Person{
    id: number
    name: string
}

interface PersonState{
    persons: Person[]
}

const initialState: PersonState ={
    persons: [],
}

export const fetchPersons = createAsyncThunk('person/fetchPersons', async (_, thunkAPI) => {
    try{
        const response = await axios.get(url)
        return response.data
    }
    catch(error){
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

// create a new person entry
export const savePerson = createAsyncThunk('person/savePerson', async (name:string, thunkAPI) => {
    try{
        const response = await axios.post(url, {name})
        return response.data
    }
    catch(error){
        if(axios.isAxiosError(error)){
            return thunkAPI.rejectWithValue(error.response?.data || "An error occured")
        }
        else{
            return thunkAPI.rejectWithValue("An unexpected error occured")
        }

    }
})

export const PersonSlice = createSlice({
    name: "person",
    initialState,
    reducers: {
        addPerson: (state, action: PayloadAction<{name: string}>)=> {
            state.persons.push({
                id: state.persons.length,
                name: action.payload.name
            })
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPersons.fulfilled, (state, action) => {
            state.persons = action.payload
        })

    }
})

export const {addPerson} = PersonSlice.actions
export default PersonSlice.reducer