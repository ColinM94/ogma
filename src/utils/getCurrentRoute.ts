/** Returns just name of current route without full path.
 * @params Full path e.g. "website.com/dashboard/games"
 * @params Pos number, if 2 wil take /games, if 1 will take /dashboard.
 * @return {string} Current route name e.g. "games"
 */
export const getCurrentRoute = (path: string, pos?: number) => {
  const parts = path.split("/")
  const length = parts.length

  if (pos && length > pos) {
    return parts[pos]
  }

  return parts[length - 1]
}
