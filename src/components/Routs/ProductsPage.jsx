import { useEffect } from "react"
import getProducts from "../../utils/getProducts"
import { useRecoilState } from "recoil"
import { Products, loginState } from "../Atoms"


const ProductsPage = () => {
    const [products, setProducts] = useRecoilState(Products)
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState)

    useEffect(() => {
        let mounted = true
        getProducts()
            .then(product => {
                if(mounted) {
                    setProducts(product)
                }
            })
            return () => mounted = false;
    }, [])

    return (
        <>
        <section className="search-and-filter">
            
            <form className="search-form" placeholder="exempel: vatten pistol" action="">
                <input type="text" />
                <button className="search-button">
                    Sök
                </button>
            </form>

            <div className="sorting-box">
                <button>
                    Sortera <i className="fa fa-sort"></i>
                </button>
            </div>
        </section>

        <section className="products-card-box">
            <ul>
                {products.map(product =>
                    <li key={product.id}>
                        <div>
                            {product.picture}
                        </div>
                        <h3>
                            {product.name}
                        </h3>
                        <p>
                            {product.price}
                        </p>
                        <button>
                            Köp
                        </button>
                        {isLoggedIn === true &&
                        (<button>
                            Ta bort
                        </button>)
                         }
                    </li>)}
            </ul>

        </section>
        </>
    )
}

export default ProductsPage