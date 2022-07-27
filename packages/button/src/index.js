import React from "react";
import PropTypes from "prop-types";

const Button = ({ label, backgroundColor, size, textColor, onClick }) => {
    let scale = 1;
    if (size === "sm") {
        scale = 0.75;
    }
    if (size === "lg") {
        scale = 1.75;
    }

    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor,
                padding: `${scale * 0.5}rem ${scale * 1}rem`,
                border: "none",
                color: textColor,
                cursor: "pointer",
            }}
        >
            {label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string,
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    size: PropTypes.oneOf(["md", "sm", "lg"]),
    onClick: PropTypes.func,
};

Button.defaultProps = {
    backgroundColor: "red",
    size: "md",
    textColor: "white",
    label: 'Button'
};

export default Button;
