import type { PluginInput } from "@opencode-ai/plugin";
import type { ToolExecuteAfterInput, ToolExecuteAfterOutput } from "./types";
export declare function createToolExecuteAfterHandler(input: {
    ctx: PluginInput;
    pendingFilePaths: Map<string, string>;
    autoCommit: boolean;
}): (toolInput: ToolExecuteAfterInput, toolOutput: ToolExecuteAfterOutput) => Promise<void>;
