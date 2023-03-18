import {string, node} from "prop-types";
import cc from "classcat";

Grid.propTypes = {
    classNames: string,
    children: node,
}

export function Grid({ classNames, children }) {
    return (
        <div className={cc(['row', classNames ?? classNames])}>
            { children }
        </div>
    )
}