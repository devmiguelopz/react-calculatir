import PropTypes from "prop-types";

const applyConfigProps = (component) => {
  component.propTypes = {

    onClickNumber: PropTypes.func.isRequired,
  }

  component.defaultProps = {
    onClickNumber: () => console.info("onClickNumber default"),
  }

}

export default applyConfigProps;