import {Container} from "../../core/Container";
import {Grid} from "../../core/Grid";
import {string, array, node} from "prop-types";
import cc from "classcat";

AboutSection.propTypes = {
    heading: string,
    mainHeading: string,
    excerpt: string,
    cardInfo: array,
    aboutImage: node,
}

export function AboutSection({
    heading,
    mainHeading,
    excerpt,
    description,
    cardInfo,
    aboutImage
}) {
    return (
        <Container fluid classNames="pt-5">
            <div className="container">
                <div className="section-title position-relative text-center mx-auto mb-5 pb-3"
                     style={{maxWidth: "600px"}}
                >
                    <h2 className="text-primary font-secondary">{ heading }</h2>
                    <h1 className="display-4 text-uppercase">{ mainHeading }</h1>
                </div>
                <Grid className="gx-5">
                    <div className="col-lg-5 mb-5 mb-lg-0" style={{minHeight: "400px"}}>
                        <div className="position-relative h-100">
                            <img className="position-absolute w-100 h-100"
                                 src={aboutImage}
                                 style={{objectFit: "cover"}}
                                 alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 pb-5">
                        <h4 className="mb-4">{ excerpt }</h4>
                        <p className="mb-5">{ description }</p>
                        <div className="row g-5">
                            {
                                cardInfo && cardInfo.map((card, i) =>
                                    (
                                        <div className="col-sm-6" key={i}>
                                            <div
                                                className="
                                                    d-flex
                                                    align-items-center
                                                    justify-content-center
                                                    bg-primary
                                                    border-inner
                                                    mb-4
                                                "
                                                style={{width: "90px", height: "90px"}}
                                            >
                                                <i className={cc([
                                                    card.icon,
                                                    "text-white"
                                                ])} />
                                            </div>
                                            <h4 className="text-uppercase">{ card.heading }</h4>
                                            <p className="mb-0">{ card.description }</p>
                                        </div>
                                    )
                                )
                            }
                        </div>
                    </div>
                </Grid>
            </div>
        </Container>
    )
}