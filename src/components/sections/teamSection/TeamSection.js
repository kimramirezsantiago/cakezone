import {Container} from "../../core/Container";
import {string, array} from "prop-types";
import {Grid} from "../../core/Grid";

TeamSection.propTypes = {
    subHeading: string,
    mainHeading: string,
    teams: array,
}

export function TeamSection({subHeading , mainHeading , teams}) {
    return (
        <Container fluid classNames="py-5">
            <Container>
                <div
                    className="section-title position-relative text-center mx-auto mb-5 pb-3"
                    style={{ maxWidth: "600px" }}
                >
                    <h2 className="text-primary font-secondary">{ subHeading }</h2>
                    <h1 className="display-4 text-uppercase">{ mainHeading }</h1>
                </div>
            </Container>
            <Grid classNames="g-5">
                {
                    teams && teams.map((team, i) =>
                        (
                            <div className="col-lg-4 col-md-6" key={i}>
                                <div className="team-item">
                                    <div className="position-relative overflow-hidden">
                                        <img
                                            className="img-fluid w-100"
                                            src={ team.imgSrc }
                                            alt=""
                                        />
                                            <div
                                                className="
                                                    team-overlay
                                                    w-100
                                                    h-100
                                                    position-absolute
                                                    top-50
                                                    start-50
                                                    translate-middle
                                                    d-flex
                                                    align-items-
                                                    center
                                                    justify-content-center"
                                            >
                                                <div className="d-flex align-items-center justify-content-start">
                                                    <a
                                                        className="
                                                            btn
                                                            btn-lg
                                                            btn-primary
                                                            btn-lg-square
                                                            border-inner
                                                            rounded-0
                                                            mx-1
                                                        "
                                                        href={ team.socials.twitter }
                                                    >
                                                        <i className="fab fa-twitter fw-normal" />
                                                    </a>
                                                    <a
                                                        className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1"
                                                        href={ team.socials.facebook }
                                                    >
                                                        <i className="fab fa-facebook-f fw-normal" />
                                                    </a>
                                                    <a
                                                        className="
                                                            btn
                                                            btn-lg
                                                            btn-primary
                                                            btn-lg-square
                                                            border-inner
                                                            rounded-0
                                                            mx-1"
                                                        href={ team.socials.linkedin }
                                                    >
                                                        <i className="fab fa-linkedin-in fw-normal" />
                                                    </a>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="bg-dark border-inner text-center p-4">
                                        <h4 className="text-uppercase text-primary">{ team.fullName }</h4>
                                        <p className="text-white m-0">{ team.designation }</p>
                                    </div>
                                </div>
                            </div>
                        )
                    )
                }
            </Grid>
        </Container>
    )
}