import CountersList from "./CountersList";
import { connect } from "react-redux";
import { resetCounters } from "../../actions";

const mapStateToProps = (state) => {
  return { counters: state.counters };
};

const mapDispatchToProps = {
  resetCounters,
};

export default connect(mapStateToProps, mapDispatchToProps)(CountersList);
