import {Container} from "../../core/Container";
import {Grid} from "../../core/Grid";
import {string} from "prop-types";

HeroSection.propTypes = {
    orangeHeading: string,
    mainHeading: string,
    subHeading: string,
    readMoreLabel: string,
    videoSource: string,
    playLabel: string,
}

export function HeroSection({
    orangeHeading = "Super Crispy",
    mainHeading = "CakeZone",
    subHeading = "The Best Cake In London",
    readMoreLabel = "Read More",
    videoSource = "https://www.youtube.com/embed/DWRcNpR6Kdc",
    playLabel = "Play Video",
}) {
    return (
        <Container fluid classNames="bg-primary py-5 mb-5 hero-header">
            <Container classNames="py-5">
                <Grid classNames="justify-content-start">
                    <div className="col-lg-8 text-center text-lg-start">
                        <h1 className="font-secondary text-primary mb-4">{ orangeHeading }</h1>
                        <h1 className="display-1 text-uppercase text-white mb-4">{ mainHeading }</h1>
                        <h1 className="text-uppercase text-white">{ subHeading }</h1>
                        <div className="
                            d-flex
                            align-items-center
                            justify-content-center
                            justify-content-lg-start
                            pt-5
                        ">
                            <a
                                href="https://example.com/"
                                className="btn btn-primary border-inner py-3 px-5 me-5"
                            >
                                { readMoreLabel }
                            </a>
                            <button
                                type="button" className="btn-play" data-bs-toggle="modal"
                                data-src={videoSource}
                                data-bs-target="#videoModal"
                            >
                            <span />
                            </button>
                            <h5 className="font-weight-normal text-white m-0 ms-4 d-none d-sm-block">
                                { playLabel }
                            </h5>
                        </div>
                    </div>
                </Grid>
            </Container>
        </Container>
    )
}