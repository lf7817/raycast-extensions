import { getPreferenceValues } from "@raycast/api";
import { Preferences } from "./types";
import { getFocusFinderPath, openWithVScode } from "./utils";

export default async function main() {
  const path = await getFocusFinderPath();

  if (path) {
    const { build } = getPreferenceValues<Preferences>();
    await openWithVScode({ path, build });
  }
}
