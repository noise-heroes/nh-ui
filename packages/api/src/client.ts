import type { 
  ApiClient, 
  ApiResponse, 
  ApiError,
  User,
  Project,
  CreateProjectData,
  ListParams
} from "./types"

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.noiseheroes.com"

class NoiseHeroesAPI implements ApiClient {
  private baseUrl: string
  
  constructor(baseUrl: string = API_URL) {
    this.baseUrl = baseUrl
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const token = typeof window !== "undefined" ? localStorage.getItem("nh_token") : null
    
    const headers: HeadersInit = {
      "Content-Type": "application/json",
      ...options.headers,
    }
    
    if (token) {
      headers["Authorization"] = `Bearer ${token}`
    }

    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        ...options,
        headers,
      })

      const data = await response.json()

      if (!response.ok) {
        const error: ApiError = {
          message: data.message || "Request failed",
          code: data.code,
          status: response.status,
          details: data.details,
        }
        return { data: null as any, error }
      }

      return { data }
    } catch (err) {
      const error: ApiError = {
        message: err instanceof Error ? err.message : "Network error",
        code: "NETWORK_ERROR",
      }
      return { data: null as any, error }
    }
  }

  auth = {
    me: () => this.request<User>("/api/v1/auth/me"),
    
    updateProfile: (data: Partial<User>) =>
      this.request<User>("/api/v1/auth/profile", {
        method: "PATCH",
        body: JSON.stringify(data),
      }),
  }

  projects = {
    list: (params?: ListParams) => {
      const queryParams = new URLSearchParams()
      if (params) {
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined) {
            queryParams.append(key, String(value))
          }
        })
      }
      const query = queryParams.toString()
      return this.request<Project[]>(`/api/v1/projects${query ? `?${query}` : ""}`)
    },

    get: (id: string) => this.request<Project>(`/api/v1/projects/${id}`),

    create: (data: CreateProjectData) =>
      this.request<Project>("/api/v1/projects", {
        method: "POST",
        body: JSON.stringify(data),
      }),

    update: (id: string, data: Partial<CreateProjectData>) =>
      this.request<Project>(`/api/v1/projects/${id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
      }),

    delete: (id: string) =>
      this.request<void>(`/api/v1/projects/${id}`, {
        method: "DELETE",
      }),
  }
}

export const api = new NoiseHeroesAPI()