import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"

const url = 'https://jsonplaceholder.typicode.com/users'

export interface Person{
    id: number
    name: string
}

interface PersonState{
    persons: Person[]
    lastId: number
    loading: boolean
    error: string | null
}

const initialState: PersonState ={
    persons: [],
    lastId: 0,
    loading: false,
    error: null
}

export const fetchPersons = createAsyncThunk('person/fetchPersons', async (_, thunkAPI) => {
    try{
        const response = await axios.get(url)
        return response.data
    }
    catch(error){
        return thunkAPI.rejectWithValue("An error occured in fetching persons!")
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
            return thunkAPI.rejectWithValue("An unexpected error occured in creating a new person entry")
        }

    }
})

export const PersonSlice = createSlice({
    name: "person",
    initialState,
    reducers: {
        addPerson: (state, action: PayloadAction<{name: string}>)=> {
            state.lastId + 1;
            state.persons.push({
                id: state.lastId,
                name: action.payload.name
            })
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchPersons.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(fetchPersons.fulfilled, (state, action) => {
            state.loading = false
            state.persons = action.payload
            // update last id
            const maxId = Math.max(0, ...state.persons.map(person => person.id ))
            state.lastId = maxId
        })
        .addCase(fetchPersons.rejected, (state, action)=> {
            state.loading = false
            state.error = action.payload as string
        })
        // handle create a new person
        .addCase(savePerson.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(savePerson.fulfilled,(state, action) => {
            state.loading = false
            state.lastId += 1
            state.persons.push({
                id: state.lastId,
                name: action.payload.name
            });
        })
        .addCase(savePerson.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload as string
        })

    }
})

export const {addPerson} = PersonSlice.actions
export default PersonSlice.reducer