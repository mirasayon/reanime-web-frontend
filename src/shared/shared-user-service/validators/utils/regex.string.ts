/**
 * Checks if a string contains only Latin letters (A–Z, a–z),
 * digits (0–9), underscores (_), dots (.), and hyphens (-).
 *
 * @param str - The input string to validate.
 * @returns `true` if the string is valid; otherwise, `false`.
 *
 * @example
 * isValidString("user_name-123"); // true
 * isValidString("user$name");     // false
 */
export function isLatinAlphanumeric(str: string): boolean {
    return /^[A-Za-z0-9_.-]+$/.test(str);
}
