import {Container} from "../../core/Container";
import {array} from "prop-types";

TestimonialSection.propTypes = {
    testimonials: array,
}

export function TestimonialSection({testimonials}) {
    return (
        <Container fluid classNames="py-5">
            <Container>
                <div
                    className="section-title position-relative text-center mx-auto mb-5 pb-3"
                    style={{ maxWidth: "600px" }}
                >
                    <h2 className="text-primary font-secondary">Testimonial</h2>
                    <h1 className="display-4 text-uppercase">Our Clients Say!!!</h1>
                </div>
                <div className="owl-carousel testimonial-carousel">
                    {
                        testimonials && testimonials.map((testimonial, i) =>
                            (
                                <div className="testimonial-item bg-dark text-white border-inner p-4" key={i}>
                                    <div className="d-flex align-items-center mb-3">
                                        <img
                                            className="img-fluid flex-shrink-0"
                                            src={ testimonial.imgSrc }
                                            style={{ width: "60px", height: "60px" }}
                                            alt=""
                                        />
                                            <div className="ps-3">
                                                <h4 className="text-primary text-uppercase mb-1">
                                                    { testimonial.name }
                                                </h4>
                                                <span>{ testimonial.profession }</span>
                                            </div>
                                    </div>
                                    <p className="mb-0">
                                        { testimonial.message }
                                    </p>
                                </div>
                            )
                        )
                    }
                </div>
            </Container>
        </Container>
    )
}