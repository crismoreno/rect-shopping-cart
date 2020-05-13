import { removeDuplicates } from "./removeDuplicates";
import { countDuplicates } from "./countDuplicates";

const computePrice = (state) => {
  let price = 0;
  const arrayWithoutOccurrances = removeDuplicates(state, "id");
  arrayWithoutOccurrances.forEach((product, index) => {
    return (price += countDuplicates(product.id, state) * product.price);
  });
  return price;
};

export { computePrice };
