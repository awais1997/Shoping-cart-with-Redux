import React from 'react'
import Counter from '../Counter'

export const CountersList = ({ counters, resetCounters }) => {
    return (
        <table className="table table-sm table-responsive">
          <thead>
            <tr>
              <th>Product name</th>
              <th>Quantity</th>
              <th>Increase</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {counters &&
              counters.length > 0 &&
              counters.map((counter, index) => {
                return <Counter index={index} key={counter.id} counter={counter} />;
              })}
            <button className="btn btn-primary m-2" onClick={() => resetCounters()}>
              Reset Cart
            </button>
          </tbody>
        </table>
      );
}

export default  CountersList;