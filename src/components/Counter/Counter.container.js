import Counter from "./Counter";
import { connect } from "react-redux";
import { incrementCounter, deleteCounter } from "../../actions";

const mapStateToProps = (state) => {
  return { counters: state.counters };
};

const mapDispatchToProps = {
  incrementCounter,
  deleteCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
