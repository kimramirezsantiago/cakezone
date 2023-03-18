import {Container} from "../../core/Container";
import {Grid} from "../../core/Grid";
import {array, string} from "prop-types";

ServicesSection.propTypes = {
    services: array,
    readMore: string,
    ctaHeading: string,
    ctaLabel: string,
    ctaLink: string,
}

export function ServicesSection({services, readMore = 'Read More', ctaHeading, ctaLabel, ctaLink }) {
    return (
        <Container fluid classNames="service position-relative px-5 mt-5 mb-5">
            <Container>
                <Grid classNames="g-5">
                    {
                        services && services.map((service, i) =>
                            (
                                <div className="col-lg-4 col-md-6" key={i}>
                                    <div className="bg-primary border-inner text-center text-white p-5">
                                        <h4 className="text-uppercase mb-3">{ service.name }</h4>
                                        <p>{ service.description }</p>
                                        <a className="text-uppercase text-dark" href={ service.link }>
                                            { readMore }
                                            <i className="bi bi-arrow-right"/>
                                        </a>
                                    </div>
                                </div>
                            )
                        )
                    }
                    <div className="col-lg-12 col-md-6 text-center">
                        <h1 className="text-uppercase text-light mb-4">{ ctaHeading }</h1>
                        <a href={ ctaLink } className="btn btn-primary border-inner py-3 px-5">{ ctaLabel }</a>
                    </div>
                </Grid>
            </Container>
        </Container>
    )
}