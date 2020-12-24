import "./App.css";
import CountersList from "./components/CountersList";
import React from "react";
import Nav from "./Nav";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { counters: state.counters };
};

const App = ({ counters }) => {
  return (
    <div className="App">
      <Nav
        totalCounters={
          counters && counters.length > 0 && counters.filter((i) => i.value > 0)
        }
      />
      <CountersList />
    </div>
  );
};

export default connect(mapStateToProps)(App);
