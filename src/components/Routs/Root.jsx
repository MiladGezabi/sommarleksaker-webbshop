import Header from "../Header"
import Footer from "../Footer"
import { Outlet } from "react-router-dom"
import { Products } from "../Atoms"
import { useRecoilState } from "recoil"
import { useEffect } from "react"
import getProducts from "../../utils/getProducts"


const Root = () => {
  const [products, setProducts] = useRecoilState(Products)
  

  useEffect(() => {
    let mounted = true;
    getProducts().then((product) => {
      if (mounted) {
        setProducts(product);
      }
    });
    return () => (mounted = false);
  }, []);
 
  

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