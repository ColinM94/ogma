import { Children } from "types"

export interface CardProps {
  children?: Children
  className?: string
  onClick?: () => void
}
