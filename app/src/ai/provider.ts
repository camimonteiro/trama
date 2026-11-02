// Provider-agnostic contract for every model call in the product (ADR-0003).
// Never call a vendor SDK from components; add an adapter that implements AIProvider.
// API keys must never live in the front-end: real adapters call a backend (OQ-005).

export type Role = 'system' | 'user' | 'assistant'

export interface Message {
  role: Role
  content: string
}

export interface CompletionRequest {
  messages: Message[]
  maxTokens?: number
  temperature?: number
}

export interface CompletionResponse {
  text: string
  provider: string
  model: string
}

export interface AIProvider {
  readonly name: string
  complete(request: CompletionRequest): Promise<CompletionResponse>
}
