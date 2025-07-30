export interface User {
  id: string
  email: string
  username?: string
  createdAt: string
  updatedAt: string
}

export interface AuthContextType {
  user: User | null
  loading: boolean
  error: Error | null
  login: (email: string, password: string) => Promise<void>
  register: (email: string, password: string, username?: string) => Promise<void>
  logout: () => Promise<void>
  refreshToken: () => Promise<void>
}