import type { OhMyOpenCodeConfig } from "../config";
type ModelCacheStateLike = {
    anthropicContext1MEnabled: boolean;
    modelContextLimitsCache?: Map<string, number>;
};
type PluginInput = {
    client: {
        session: {
            messages: (...args: any[]) => any;
            summarize: (...args: any[]) => any;
        };
        tui: {
            showToast: (...args: any[]) => any;
        };
    };
    directory: string;
};
export declare function createPreemptiveCompactionHook(ctx: PluginInput, pluginConfig: OhMyOpenCodeConfig, modelCacheState?: ModelCacheStateLike): {
    "tool.execute.after": (input: {
        tool: string;
        sessionID: string;
        callID: string;
    }, _output: {
        title: string;
        output: string;
        metadata: unknown;
    }) => Promise<void>;
    event: ({ event }: {
        event: {
            type: string;
            properties?: unknown;
        };
    }) => Promise<void>;
};
export {};
