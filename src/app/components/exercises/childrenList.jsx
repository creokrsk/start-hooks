import React from "react";
import PropTypes from "prop-types";

const ChildrenList = ({ children }) => {
    return React.Children.map(children, (child, i) => {
        console.log(i, child);
        return (
            <>
                <div className="d-flex">
                    {child} № {i + 1}
                </div>
            </>
        );
    });
};

ChildrenList.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default ChildrenList;
