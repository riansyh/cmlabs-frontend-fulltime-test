
export function useCapitalFirstLetter(words) {
    return words.charAt(0).toUpperCase() + words.slice(1)
}
