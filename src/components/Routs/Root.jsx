import Header from "../Header"
import { Outlet } from "react-router-dom"

const Root = () => {


  return (
  <div>
    
    
      <Header />
    
    <main>
      <Outlet />
    </main>
  </div>

  )
}

export default Root