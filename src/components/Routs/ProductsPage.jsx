

const ProductsPage = () => {

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

        </section>
        </>
    )
}

export default ProductsPage