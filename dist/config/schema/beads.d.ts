import { z } from "zod";
export declare const BeadsConfigSchema: z.ZodObject<{
    enabled: z.ZodDefault<z.ZodBoolean>;
    auto_init: z.ZodDefault<z.ZodBoolean>;
    backend: z.ZodDefault<z.ZodEnum<{
        cli: "cli";
        mcp: "mcp";
        auto: "auto";
    }>>;
    sync_on_idle: z.ZodDefault<z.ZodBoolean>;
    beads_command: z.ZodDefault<z.ZodString>;
}, z.core.$strip>;
export type BeadsConfig = z.infer<typeof BeadsConfigSchema>;
