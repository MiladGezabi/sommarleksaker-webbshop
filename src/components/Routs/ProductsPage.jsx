import { useEffect, useMemo, useState } from "react"
import getProducts from "../../utils/getProducts"
import { useRecoilState } from "recoil"
import { Products, loginState } from "../Atoms"
import { NavLink } from "react-router-dom"


const ProductsPage = () => {
    const [products, setProducts] = useRecoilState(Products)
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState)
    const [query, setQuery] = useState("")

    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            return product.name.toLowerCase().includes(query.toLowerCase())
        })
    }, [products, query])

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
            
            <form className="search-form" placeholder="Sök" action="">
                <input type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)} />
            </form>

            <div className="sorting-box">
                <button>
                    Sortera <i className="fa fa-sort"></i>
                </button>
            </div>
        </section>

        <section className="products-card-box">
            <ul>
                {products && filteredProducts.map(product =>
                    <li key={product.id}
                    className="product-card">
                        <NavLink className="navlink">
                        <div className="image-box">
                            <img src={product.picture} alt={product.name} />
                        </div>
                        <div className="name-and-price-box">
                        <h3>
                            {product.name}
                        </h3>
                        <p>
                            {product.price} KR
                        </p>
                        </div>
                        </NavLink>
                        <button className="buybtn">
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