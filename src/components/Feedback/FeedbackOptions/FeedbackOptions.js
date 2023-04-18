import React from "react";
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className="Btn__list">
        {options.map((name, index) => (
            <button
                key={index}
                className={css.button}
                type="button"
                onClick={() => onLeaveFeedback({ name })}
            >
                {name}
            </button>
        ))}
    </div>
    )
    
};

export default FeedbackOptions;