export const addToCart = () => {
  console.log("Action is called ");
  return {
    type: "AddToCart",
    data: "1 item",
  };
};
