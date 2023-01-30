import { runAppleScript } from "run-applescript";
import { closeMainWindow, showToast, Toast } from "@raycast/api";
import { execSync } from "child_process";

const scriptFinderPath = `
  if application "Finder" is not running then
      return "Finder not running"
  end if

  tell application "Finder"
      return POSIX path of ((insertion location) as alias)
  end tell
`;

/**
 * 获取finder当前路径
 */
export const getFocusFinderPath = async () => {
  try {
    return await runAppleScript(scriptFinderPath);
  } catch (e) {
    await showToast({
      title: "",
      style: Toast.Style.Failure,
      message: "Finder not running",
    });
  }
};

export const openWithVScode = async (path: string) => {
  try {
    // TODO: 兼容windows
    const cmd = `zsh -l -c "code --folder-uri ${path}"`;
    execSync(cmd, {
      timeout: 3000,
      windowsHide: true,
      encoding: "utf-8",
    });
    await closeMainWindow();
  } catch (e: any) {
    await showToast({
      title: "",
      style: Toast.Style.Failure,
      message: e.message,
    });
  }
}