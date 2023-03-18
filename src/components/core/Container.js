import {bool, string, node} from "prop-types";
import cc from "classcat";

Container.propTypes = {
    fluid: bool,
    backgroundImage: bool,
    classNames: string,
    children: node,
}

export function Container({ fluid = false, backgroundImage = false, classNames, children }) {
    return (
        <div className={cc([
            fluid ? 'container-fluid' : 'container',
            backgroundImage ?? 'bg-img',
            classNames ?? classNames
            ])}
        >
            { children }
        </div>
    )
}