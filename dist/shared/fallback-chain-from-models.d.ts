import type { FallbackEntry } from "./model-requirements";
export declare function parseFallbackModelEntry(model: string, defaultProviderID: string): FallbackEntry | undefined;
export declare function buildFallbackChainFromModels(fallbackModels: string | string[] | undefined, defaultProviderID: string): FallbackEntry[] | undefined;
