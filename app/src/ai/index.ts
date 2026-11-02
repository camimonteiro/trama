import { mockProvider } from './mock-provider'
import type { AIProvider } from './provider'

export type * from './provider'

// Swap the active provider here once OQ-006 is decided.
export const ai: AIProvider = mockProvider
