import type { PluginInput } from "@opencode-ai/plugin";
import { type ToolDefinition } from "@opencode-ai/plugin/tool";
import type { BeadsConfig } from "../../config";
export interface BeadsToolOptions {
    config: BeadsConfig;
    ctx: PluginInput;
}
export declare function createBeadsTools(options: BeadsToolOptions): Record<string, ToolDefinition>;
