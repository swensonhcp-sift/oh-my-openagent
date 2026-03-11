import type { PluginEntryInfo } from "./plugin-entry";
/**
 * Sync cache package.json to match opencode.json plugin intent before bun install.
 *
 * OpenCode pins resolved versions in cache package.json (e.g., "3.11.0" instead of "latest").
 * When auto-update detects a newer version and runs `bun install`, it re-resolves the pinned
 * version instead of the user's declared tag, causing updates to silently fail.
 *
 * @returns true if package.json was updated, false otherwise
 */
export declare function syncCachePackageJsonToIntent(pluginInfo: PluginEntryInfo): boolean;
