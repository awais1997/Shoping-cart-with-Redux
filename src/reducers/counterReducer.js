const initialState = {
  counters: [
    {
      id: 1,
      name: "Leather-jacket",
      value: 0,
    },
    {
      id: 2,
      name: "black-pant",
      value: 0,
    },
    {
      id: 3,
      name: "nike-shoes",
      value: 0,
    },
  ],
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT": {
      debugger;
      const index = action.payload;
      const Icounters = [...state.counters];
      Icounters[index].value = Icounters[index].value + 1;
      return {
        counters: [...Icounters],
      };
    }
    case "DELETE":
      const Index = action.payload;
      console.log(Index);
      const Dcounters = [...state.counters];
      const DeleteCounter = Dcounters.filter((counter, index) => {
        return index !== Index;
      });
      console.log(DeleteCounter);
      return {
        counters: [...DeleteCounter],
      };
    case "RESET":
      const Rcounters = [...state.counters];
      const ResetCounters = Rcounters?.map((item) => {
        item.value = 0;
        return item;
      });

      return {
        counters: [...ResetCounters],
      };
    default:
      return state;
  }
};

export default counterReducer;
