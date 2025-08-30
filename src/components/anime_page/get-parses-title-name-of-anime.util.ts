const hasDigit = (s: string): boolean => /\d/.test(s);
const LenghtLimit = 40;
/**
 * @param data
 * @returns
 */
export function parseTitleNameForAnime(any_title: string) {
    if (any_title.length > LenghtLimit) {
        any_title = `${any_title.slice(0, LenghtLimit)}...`;
    }
    if (hasDigit(any_title)) {
        return any_title;
    }
    return any_title;
}

