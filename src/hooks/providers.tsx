import React from "react"
import { AuthProvider } from "./useAuth/useAuth"

interface Props {
  children: React.ReactNode
}

export const Providers = ({ children }: Props) => (
  <AuthProvider>{children}</AuthProvider>
)
