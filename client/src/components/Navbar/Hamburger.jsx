import React from 'react'
import { PropTypes } from "prop-types";
import './Hamburger.css'

const Hamburger = (props) => {
    return (
        <div className={`hamburger nav-open-${props.isOpen}`}>
            <div className="burger burger1"></div>
            <div className="burger burger2"></div>
            <div className="burger burger3"></div>
        </div>
    )
}

Hamburger.propTypes = {
    isOpen: PropTypes.bool
}

export default Hamburger