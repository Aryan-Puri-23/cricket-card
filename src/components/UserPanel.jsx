import React from "react";
import { useStore } from "../context/StoreContext";

export default function UserPanel({ onShowCollection }) {
  const { coins } = useStore();
  const { mute, setMute } = useStore();

  return (
    <div className="flex justify-center items-center gap-4 mb-4 mt-8">
      <span className="text-xl font-semibold">
        Coins: <span className="text-yellow-400">{coins}</span>
      </span>
      <button
        onClick={onShowCollection}
        className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition cursor-pointer"
      >
        My Collection
      </button>
      <button
      onClick={() => setMute(!mute)}
      className="px-3 py-1 rounded bg-gray-700 hover:bg-gray-600 cursor-pointer text-white"
    >
      {mute ? "🔇" : "🔊"}
    </button>
    </div>
  );
}
