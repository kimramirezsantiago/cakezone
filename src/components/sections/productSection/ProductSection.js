import {Container} from "../../core/Container";
import {Grid} from "../../core/Grid";
import {string, array} from "prop-types";
import cc from "classcat";
import {ProductItem} from "./ProductItem";

ProductSection.propTypes = {
    subHeading: string,
    mainHeading: string,
    products: array,
    categories: array,
}

export function ProductSection({
    subHeading,
    mainHeading,
    products,
    categories,
}) {
    return (
        <Container fluid classNames="about py-5">
            <Container>
                <div className="section-title position-relative text-center mx-auto mb-5 pb-3"
                     style={{maxWidth: "600px"}}>
                    <h2 className="text-primary font-secondary">{ subHeading }</h2>
                    <h1 className="display-4 text-uppercase">{ mainHeading }</h1>
                </div>
                <div className="tab-class text-center">
                    <ul
                        className="
                            nav
                            nav-pills
                            d-inline-flex
                            justify-content-center
                            bg-dark
                            text-uppercase
                            border-inner
                            p-4
                            mb-5"
                    >
                        {
                            categories && categories.map((category, i) => (
                                <li className="nav-item" key={i}>
                                    <a
                                        className={cc([
                                            "nav-link",
                                            "text-white",
                                            category.isActive ?? "active"
                                        ])}
                                        data-bs-toggle="pill"
                                        href={"#tab-" + category.tabNumber}
                                    >
                                        { category.name }
                                    </a>
                                </li> )
                            )
                        }
                    </ul>
                    <div className="tab-content">
                        <div id="tab-1" className="tab-pane fade show p-0 active">
                            <Grid classNames="g-3">
                                <ProductItem products={products} category="birthday" />
                            </Grid>
                        </div>
                        <div id="tab-2" className="tab-pane fade show p-0">
                            <Grid classNames="g-3">
                                <ProductItem products={products} category="wedding" />
                            </Grid>
                        </div>
                        <div id="tab-3" className="tab-pane fade show p-0">
                            <Grid classNames="g-3">
                                <ProductItem products={products} category="custom" />
                            </Grid>
                        </div>
                    </div>
                </div>
            </Container>
        </Container>
    )
}