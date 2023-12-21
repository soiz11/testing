import PropTypes from "prop-types";

const Food = (props) => {
  return <div>I like {props.name}</div>;
};

Food.propTypes = {
  name: PropTypes.string,
};
export default Food;
