import Header from "../Header"
import Footer from "../Footer"
import { Outlet } from "react-router-dom"

const Root = () => {


  return (
  <div>
    
    <Header />
    
    <main>
      <Outlet />
    </main>

    <Footer />
    
  </div>

  )
}

export default Root