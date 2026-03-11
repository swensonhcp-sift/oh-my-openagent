import type { PluginInput } from "@opencode-ai/plugin";
import type { BeadsConfig } from "../../config";
export declare const HOOK_NAME: "beads-sync";
export interface BeadsSyncHookOptions {
    config: BeadsConfig;
    ctx: PluginInput;
}
export declare function createBeadsSyncHook(options: BeadsSyncHookOptions): {
    event: (input: {
        event: {
            type: string;
            properties?: Record<string, unknown>;
        };
    }) => Promise<void>;
};
