
export function useFilterItems(items, column, keyword) {
    const filter = new RegExp(`${keyword}`, "gi");
    const result = items.filter((item) => item[column].match(filter));
    return result
}
