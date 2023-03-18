import {string} from "prop-types";
import cc from 'classcat';

FactsItem.propTypes = {
    heading: string,
    number: string,
    icon: string,
}

export function FactsItem({ heading, number, icon }) {
    return (
        <div className="col-lg-3 col-md-6">
            <div className="d-flex">
                <div
                    className="
                        bg-primary
                        border-inner
                        d-flex
                        align-items-center
                        justify-content-center
                        mb-3
                    "
                    style={{width: '60px', height: '60px'}}>
                    <i className={cc([icon, 'text-white'])} />
                </div>
                <div className="ps-4">
                    <h6 className="text-primary text-uppercase">
                        { heading }
                    </h6>
                    <h1
                        className="display-5 text-white mb-0"
                        data-toggle="counter-up"
                    >
                        { number }
                    </h1>
                </div>
            </div>
        </div>
    )
}