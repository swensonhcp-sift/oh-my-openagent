import type { BeadsConfig } from "../../config";
import type { BdIssue, BdCreateOptions, BdUpdateOptions, BdCloseOptions, BdDependencyType, BdResult } from "./types";
export interface BeadsWrapperOptions {
    config: BeadsConfig;
}
export declare class BeadsWrapper {
    private config;
    constructor(options: BeadsWrapperOptions);
    private buildCommand;
    private exec;
    private execJson;
    private execBoolean;
    ready(): Promise<BdResult<BdIssue[]>>;
    create(title: string, options?: BdCreateOptions): Promise<BdResult<BdIssue>>;
    update(id: string, options?: BdUpdateOptions): Promise<BdResult<BdIssue>>;
    close(id: string, options?: BdCloseOptions): Promise<BdResult<BdIssue>>;
    sync(): Promise<BdResult<void>>;
    depAdd(id: string, depId: string, type: BdDependencyType): Promise<BdResult<void>>;
    depRemove(id: string, depId: string): Promise<BdResult<void>>;
    init(): Promise<BdResult<void>>;
    claim(id: string, assignee?: string): Promise<BdResult<BdIssue>>;
    block(id: string): Promise<BdResult<BdIssue>>;
    reopen(id: string): Promise<BdResult<BdIssue>>;
}
