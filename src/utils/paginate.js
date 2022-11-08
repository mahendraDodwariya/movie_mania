import _ from "lodash";

export function paginate(itemsArr, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;

  return _(itemsArr).slice(startIndex).take(pageSize).value();
  // _.slice(items,startIndex);
  // _.take()
}
