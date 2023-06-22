import './button.component.scss';

const BUTTON_TYPES = {
    invert: 'inverted',
    google: 'google-sign-in'
};

const Button = ({ children, buttonType, ...otherProps }) => {
    return (
        <button
            className={`button-container ${BUTTON_TYPES[buttonType]}`}
            {...otherProps}>
            {children}
        </button>
    );
};

export default Button;