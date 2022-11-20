import * as React from "react"

export type HtmlDiv = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export type HtmlButton = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export type HtmlInput = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export type ClassName = string | undefined | false
export type Children = React.ReactNode | React.ReactNode[]
export type SetState<T> = React.Dispatch<React.SetStateAction<T>>
