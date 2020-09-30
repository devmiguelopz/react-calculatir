import PropTypes from "prop-types";

const applyConfigProps = (component) => {
  component.propTypes = {

    onClickOperation: PropTypes.func.isRequired,
    onclickEqual: PropTypes.func.isRequired
  }

  component.defaultProps = {
    onClickOperation: () => console.info("onClickOperation default"),
    onclickEqual: () => console.info("onclickEqual default")
  }

}

export default applyConfigProps;