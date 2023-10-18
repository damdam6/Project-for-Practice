
import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }){
    //자바스크립트 object를 만들어줌!
    return <button className={styles.btn} > {text}</button>;
}

//proptypes 결정
Button.propTypes = {
    text : PropTypes.string.isRequired,
};

export default Button;