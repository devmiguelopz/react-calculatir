import PropTypes from "prop-types";

const applyConfigProps = (component) => {
  component.propTypes = {

    onContentClear: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
  }

  component.defaultProps = {
    onContentClear: () => console.info("onContentClear default"),
    onDelete: () => console.info("onDelete default")
  }

}

export default applyConfigProps;