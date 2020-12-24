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
      const index = action.payload;
      const counters = [...state.counters];
      counters[index].value = counters[index].value + 1;
      return {
        counters: [...counters],
      };
    }
    case "DELETE": {
      const i = action.payload;
      console.log(i);
      const counters = [...state.counters];
      const DeleteCounter = counters.filter((counter, index) => {
        return index !== i;
      });
      console.log(DeleteCounter);
      return {
        counters: [...DeleteCounter],
      };
    }
    case "RESET": {
      const counters = [...state.counters];
      const ResetCounters = counters?.map((item) => {
        item.value = 0;
        return item;
      });

      return {
        counters: [...ResetCounters],
      };
    }
    default:
      return state;
  }
};

export default counterReducer;
