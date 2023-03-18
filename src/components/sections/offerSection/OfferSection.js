import {Container} from "../../core/Container";
import {Grid} from "../../core/Grid";
import {string} from "prop-types";

OfferSection.propTypes = {
    subHeading: string,
    mainHeading: string,
    description: string,
    ctaLabel: string,
    ctaLink: string,
    readMore: string,
    readMoreLink: string,
}

export function OfferSection({subHeading, mainHeading, description, ctaLabel, ctaLink, readMore, readMoreLink}) {
    return (
        <Container fluid classNames="bg-offer my-5 py-5">
            <Container classNames="py-5">
                <Grid classNames="gx-5 justify-content-center">
                    <div className="col-lg-7 text-center">
                        <div
                            className="section-title position-relative text-center mx-auto mb-4 pb-3"
                            style={{ maxWidth: "600px" }}
                        >
                            <h2 className="text-primary font-secondary">{ subHeading }</h2>
                            <h1 className="display-4 text-uppercase text-white">
                                { mainHeading }
                            </h1>
                        </div>
                        <p className="text-white mb-4">{ description }</p>
                        <a href={ ctaLink } className="btn btn-primary border-inner py-3 px-5 me-3">
                            { ctaLabel }
                        </a>
                        <a href={ readMoreLink } className="btn btn-dark border-inner py-3 px-5">
                            { readMore }
                        </a>
                    </div>
                </Grid>
            </Container>
        </Container>
    )
}