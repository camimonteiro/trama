import type { AIProvider, CompletionRequest, CompletionResponse } from './provider'

// Offline provider for development and demos; no network, no keys.
export const mockProvider: AIProvider = {
  name: 'mock',
  async complete(request: CompletionRequest): Promise<CompletionResponse> {
    const last = request.messages[request.messages.length - 1]?.content ?? ''
    return {
      text: `[mock] Recebi: "${last.slice(0, 80)}"`,
      provider: 'mock',
      model: 'none',
    }
  },
}
