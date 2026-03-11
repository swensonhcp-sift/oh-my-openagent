/**
 * Parse a model string in "provider/model" format.
 */
export declare function parseModelString(model: string): {
    providerID: string;
    modelID: string;
} | undefined;
