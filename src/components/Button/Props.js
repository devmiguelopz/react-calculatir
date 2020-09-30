import PropTypes from "prop-types";

const applyConfigProps = (component) => {
  component.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
    clickHandler: PropTypes.func.isRequired
  }

  component.defaultProps = {
    text: "",
    type: "",
    clickHandler: () => console.info("click default")
  }

}

export default applyConfigProps;
