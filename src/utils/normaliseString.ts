/** Takes a string and returns it all lowercase with white space removed.
 * @param text string to be normalised.
 * @return normalised string.
 */
export const normaliseString = (text: string) => {
  return String(text).trim().toLocaleLowerCase()
}
