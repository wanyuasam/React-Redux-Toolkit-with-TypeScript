import { useRef } from "react"
import { useAppDispatch } from "../store/store"
import { addPerson } from "../store/features/personSlice"

export default function Add() {
    const name=useRef("")
    const dispatch = useAppDispatch()

    // handle submit
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if(name.current.trim() !== ""){
            dispatch(addPerson({name: name.current}))
            name.current = ""
        }
    }
  return (
    <form className="border rounded-md p-2 shadow-md m-2" onSubmit={handleSubmit}>
        <label htmlFor="Person Name"></label>
        <input className="border rounded-md p-2 mx-2" onChange={e => name.current = e.target.value }/>
        <button className="bg-black text-white rounded-md px-4 py-2 cursor-pointer " type="submit">Add a person </button>
    </form>
  )
}
