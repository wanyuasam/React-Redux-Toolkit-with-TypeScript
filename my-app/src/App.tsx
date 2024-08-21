import { useEffect } from "react"
import Add from "./components/Add"
import List from "./components/List"
import { useAppDispatch } from "./store/store"
import { fetchPersons } from "./store/features/personSlice"

function App() {
  const dispatch = useAppDispatch()

  useEffect(() =>{
    dispatch(fetchPersons())
  }, [dispatch])

  return (
    <>
      <Add/>
      <List/>
    </>
  )
}

export default App
