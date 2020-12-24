import React from "react";

const Counter = (props) => {
    const { counter, index, incrementCounter, deleteCounter } = props
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
              onClick={() => incrementCounter(index)}
            >
              Increment
            </button>
          </td>
          <td>
            <button className="btn btn-danger m-2" onClick={() => deleteCounter(index)}>
              Delete
            </button>
          </td>
        </tr>
      );
}
export default  Counter