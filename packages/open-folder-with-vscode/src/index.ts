import { getFocusFinderPath, openWithVScode } from "./utils";

export default async function main() {
  const path = await getFocusFinderPath();

  if (path) {
    await openWithVScode(path);
  }
}
