import { ClassName } from "types/general"

/**
 * Combines sass class names into one string.
 * @params Each class name is a param.
 * @returns String of classes combined.
 */
export const classes = (...items: ClassName[]) => {
  return items.join(" ")
}
