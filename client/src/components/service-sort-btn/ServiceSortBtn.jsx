import React from 'react'
import { PropTypes } from "prop-types";

// const handleClick = (e) => {
//     console.log(e.target.outerText);
// }

const ServiceSortBtn = (props) => {
    return (
        // <button onClick={(e) => handleClick(e)}>{props.name}</button>
        <button>{props.name}</button>
    )
}

ServiceSortBtn.propTypes = {
    name: PropTypes.string.isRequired
}

export default ServiceSortBtn