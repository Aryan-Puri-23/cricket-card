import { useMemo, useCallback } from "react";
import { useStore } from "../context/StoreContext";

export default function useSound(path) {
  const { mute } = useStore();

  const audio = useMemo(() => new Audio(path), [path]);

  return useCallback(() => {
    if (mute) return;
    audio.currentTime = 0;
    audio.play();
  }, [audio, mute]);
}
