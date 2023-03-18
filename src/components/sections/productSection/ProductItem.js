import {string, array} from "prop-types";

ProductItem.propTypes = {
    products: array,
    category: string,
}

export function ProductItem({ products, category }) {
    return (
        <>
            {
                products && products.map((product, i) =>
                    product.category === category && (
                        <div className="col-lg-6" key={i}>
                            <div className="d-flex h-100">
                                <div className="flex-shrink-0">
                                    <img className="img-fluid"
                                         src={ product.imgSrc }
                                         alt="" style={{width: "150px", height: "85px"}} />
                                    <h4 className="bg-dark text-primary p-2 m-0">
                                        { product.price }
                                    </h4>
                                </div>
                                <div
                                    className="
                                        d-flex
                                        flex-column
                                        justify-content-center
                                        text-start
                                        bg-secondary
                                        border-inner
                                        px-4"
                                    >
                                    <h5 className="text-uppercase">{ product.name }</h5>
                                    <span>{ product.description }</span>
                                </div>
                            </div>
                        </div>
                    )
                )
            }
        </>
    )
}