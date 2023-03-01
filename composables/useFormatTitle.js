
export function useFormatTitle(words) {
    return useCapitalFirstLetter(words.replace("-", " "));
}
