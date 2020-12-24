import React from "react";
import { connect } from "react-redux";
import { incrementCounter, deleteCounter } from "./actions";

const mapStateToProps = (state, ownProps) => {
  return { counters: state.counters, index: ownProps.index };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: (index) => {
      dispatch(incrementCounter(index));
    },
    onDelete: (index) => {
      dispatch(deleteCounter(index));
    },
  };
};
const Counter = ({ counter, index, onIncrement, onDelete }) => {
  const counterValue = () => {
    const { value } = counter;
    return value === 0 ? "Zero" : value;
  };

  return (
    <tr>
      <td>
        <span className="badge badge-primary m-2">{counter.name}</span>
      </td>
      <td>
        {counter.value === 0 ? (
          <span className="badge badge-warning m-2"> {counterValue()}</span>
        ) : (
          <span className="badge badge-primary m-2">{counterValue()}</span>
        )}
      </td>
      <td>
        <button
          className="btn btn-primary m-2"
          onClick={() => onIncrement(index)}
        >
          Increment
        </button>
      </td>
      <td>
        <button className="btn btn-danger m-2" onClick={() => onDelete(index)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
