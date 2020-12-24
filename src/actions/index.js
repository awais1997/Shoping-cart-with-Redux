export const incrementCounter = (index) => {
  return {
    type: "INCREMENT",
    payload: index,
  };
};

export const deleteCounter = (index) => {
  return {
    type: "DELETE",
    payload: index,
  };
};
export const resetCounters = () => {
  return {
    type: "RESET",
  };
};
