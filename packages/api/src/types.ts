export interface ApiError {
  message: string
  code?: string
  status?: number
  details?: Record<string, any>
}

export interface ApiResponse<T> {
  data: T
  error?: ApiError
  metadata?: {
    page?: number
    limit?: number
    total?: number
  }
}

export interface ApiClient {
  auth: {
    me: () => Promise<ApiResponse<User>>
    updateProfile: (data: Partial<User>) => Promise<ApiResponse<User>>
  }
  projects: {
    list: (params?: ListParams) => Promise<ApiResponse<Project[]>>
    get: (id: string) => Promise<ApiResponse<Project>>
    create: (data: CreateProjectData) => Promise<ApiResponse<Project>>
    update: (id: string, data: Partial<CreateProjectData>) => Promise<ApiResponse<Project>>
    delete: (id: string) => Promise<ApiResponse<void>>
  }
}

export interface User {
  id: string
  email: string
  username?: string
  createdAt: string
  updatedAt: string
}

export interface Project {
  id: string
  name: string
  description?: string
  userId: string
  createdAt: string
  updatedAt: string
}

export interface CreateProjectData {
  name: string
  description?: string
}

export interface ListParams {
  page?: number
  limit?: number
  search?: string
  sort?: string
  order?: "asc" | "desc"
}