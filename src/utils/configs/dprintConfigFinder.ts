// 中身イメージ
import * as vscode from "vscode";
import { DPRINT_CONFIG_FILEPATH_GLOB } from "../../constants";
import { Logger } from "../../logger";

/**
 * find dprint config file from current workspace
 *
 * @param {Logger} logger
 *
 * @returns {Promise<vscode.Uri | undefined>}
 */
export async function findDprintConfigUri(logger: Logger): Promise<vscode.Uri | undefined> {
  const configFiles = await vscode.workspace.findFiles(
    /* include */ DPRINT_CONFIG_FILEPATH_GLOB,
    /* exclude */ "**/node_modules/**",
    /* maxResults */ 1,
  );
  const logMessage = `[dprint/vscode] found dprint config file: ${configFiles[0] ?? "none"}`;
  logger.logDebug(logMessage);
  return configFiles[0];
}
