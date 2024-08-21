import { useEffect } from "react"
// import Add from "./components/Add"
// import List from "./components/List"
import { useAppDispatch } from "./store/store"
import { fetchPersons } from "./store/features/personSlice"
import Products from "./components/Products"
import Cart from "./components/Cart"

function App() {
  const dispatch = useAppDispatch()

  useEffect(() =>{
    dispatch(fetchPersons())
  }, [dispatch])

  return (
    <>
      {/* <Add/> */}
      {/* <List/> */}
      <Products/>
      <Cart/>
    </>
  )
}

export default App
