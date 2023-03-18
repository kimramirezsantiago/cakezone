import {Container} from "../../core/Container";
import {Grid} from "../../core/Grid";
import {FactsItem} from "./FactsItem";

export function FactsSection() {
    return (
        <Container fluid backgroundImage classNames="py-5 mb-5 bg-img">
            <Container classNames="py-5">
                <Grid classNames="gx-5 gy-4">
                    <FactsItem
                        heading="Our Experience"
                        number="123"
                        icon="fa fa-star"
                    />
                    <FactsItem
                        heading="Cake Specialist"
                        number="456"
                        icon="fa fa-users"
                    />
                    <FactsItem
                        heading="Complete Project"
                        number="789"
                        icon="fa fa-check"
                    />
                    <FactsItem
                        heading="Happy Clients"
                        number="345"
                        icon="fa fa-mug-hot"
                    />
                </Grid>
            </Container>
        </Container>
    )
}