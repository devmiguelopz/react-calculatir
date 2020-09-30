import PropTypes from "prop-types";

const applyConfigProps = (component) => {
  component.propTypes = {
    value: PropTypes.string.isRequired
  }

  component.defaultProps = {
    value: 0
  }

}

export default applyConfigProps;