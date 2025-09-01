import React, { useState } from "react";
import { motion } from "framer-motion";
import useSound from "../hooks/useSound";


const tierStyles = {
    Common: "from-gray-800 via-gray-700 to-gray-600 border-gray-400 shadow-md",
    Rare: "from-blue-800 via-blue-600 to-blue-500 border-blue-300 shadow-lg shadow-blue-500/40",
    Epic: "from-purple-800 via-purple-600 to-purple-500 border-purple-300 shadow-xl shadow-purple-500/50",
    Legend: "from-yellow-500 via-amber-400 to-orange-500 border-yellow-300 shadow-2xl shadow-yellow-400/70 animate-pulse",
};

export default function Card({ player, revealed, onClick, disabled }) {
    const [format, setFormat] = useState("ODI");
    const stats = player.stats[format];

    const playFlip = useSound("/assets/sound/flipcard.mp3");
    const playEpic = useSound("/assets/sound/epic.mp3");
    const playLegendary = useSound("/assets/sound/legendary.mp3");

    return (
        <div className="w-40 sm:w-52 h-[21rem] perspective cursor-pointer">
            <motion.div
                className="relative w-full h-full rounded-2xl border-white"
                initial={{ rotateY: 180 }}
                animate={{
                    rotateY: revealed ? 0 : 180,
                    scale:
                        revealed && player.tier === "Legend" ? 1.05 :
                            revealed && player.tier === "Epic" ? 1.03 :
                                revealed && player.tier === "Rare" ? 1.02 : 1,
                    boxShadow:
                        revealed && player.tier === "Legend"
                            ? "0 0 30px 5px rgba(255, 223, 0, 0.7)"
                            : revealed && player.tier === "Epic"
                                ? "0 0 20px 3px rgba(139, 92, 246, 0.6)"
                                : revealed && player.tier === "Rare"
                                    ? "0 0 15px 2px rgba(59, 130, 246, 0.5)"
                                    : "0 0 0 0 transparent",
                }}
                transition={{
                    duration: revealed ? 1.2 : 0.8,
                    rotateY: { type: "spring", stiffness: 300, damping: 20 },
                    scale: { type: "spring", stiffness: 300, damping: 12 },
                    rotateZ: { type: "spring", stiffness: 500, damping: 10 },
                }}
                style={{ transformStyle: "preserve-3d" }}
                onClick={
                    !disabled
                        ? () => {
                            playFlip();
                            if (player.tier === "Legend") {
                                playLegendary();
                            } else if (player.tier === "Epic") {
                                playEpic();
                            }
                            onClick?.();
                        }
                        : undefined
                }
            >

                <div className="absolute w-full h-full rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-white flex items-center justify-center">
                    <span className="text-white font-bold text-3xl"></span>
                </div>

                <div className={`absolute w-full h-full rounded-2xl backface-hidden bg-gradient-to-br border-2 p-3 text-white ${tierStyles[player.tier]}`}>
                    {(player.tier === "Epic" || player.tier === "Legend") && (
                        <div className="absolute inset-0 rounded-2xl blur-2xl opacity-50 bg-yellow-400 z-0" />
                    )}
                    <div className="relative flex flex-col h-full z-10">
                        <div className="flex-1 flex items-center justify-center">
                            <img src={player.photo} alt={player.name} className="rounded-lg w-24 h-24 object-cover" />
                        </div>
                        <div className="mt-2 text-center">
                            <h3 className="font-bold text-sm">{player.name}</h3>
                            <p className="text-xs opacity-80">{player.role} • {player.team}</p>
                            <p className="text-lg font-extrabold">{player.rating}</p>
                        </div>

                        <div className="flex justify-center gap-2 mt-2">
                            {["Test", "ODI", "T20"].map(f => (
                                <button
                                    key={f}
                                    className={`px-2 py-1 text-xs rounded ${format === f ? "bg-white text-black" : "bg-gray-700 text-white/80"} cursor-pointer`}
                                    onClick={(e) => { e.stopPropagation(); setFormat(f); }}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>

                        <div className="mt-2 text-left text-xs grid grid-cols-2 gap-2 pl-2">
                            {player.role === "BAT" || player.role === "WK" ? (
                                <>
                                    <div className="flex justify-between"><span>Matches : {stats.M}</span></div>
                                    <div className="flex justify-between"><span>Runs : {stats.R}</span></div>
                                    <div className="flex justify-between"><span>Average : {Number(stats.AVG).toFixed(2)}</span></div>
                                    <div className="flex justify-between"><span>SR : {Number(stats.SR).toFixed(2)}</span></div>
                                    <div className="flex justify-between"><span>50s : {stats["50s"]}</span></div>
                                    <div className="flex justify-between"><span>100s : {stats["100s"]}</span></div>
                                </>
                            ) : player.role === "BOWL" ? (
                                <>
                                    <div className="flex justify-between"><span>Matches : {stats.M}</span></div>
                                    <div className="flex justify-between"><span>Wickets : {stats.W}</span></div>
                                    <div className="flex justify-between"><span>Average : {Number(stats.AVG).toFixed(2)}</span></div>
                                    <div className="flex justify-between"><span>Economy : {stats.ECO}</span></div>
                                    <div className="flex justify-between"><span>SR : {Number(stats.SR).toFixed(2)}</span></div>
                                    <div className="flex justify-between"><span>Best : {stats.BB}</span></div>
                                </>
                            ) : (
                                <>
                                    <div className="flex justify-between"><span>Matches : {stats.M}</span></div>
                                    <div className="flex justify-between"><span>Runs : {stats.R}</span></div>
                                    <div className="flex justify-between"><span>Average : {Number(stats.AVG).toFixed(2)}</span></div>
                                    <div className="flex justify-between"><span>Wickets : {stats.W}</span></div>
                                    <div className="flex justify-between"><span>Economy : {stats.ECO}</span></div>
                                    <div className="flex justify-between"><span>SR : {Number(stats.SR).toFixed(2)}</span></div>
                                </>
                            )}
                        </div>






                    </div>
                </div>
            </motion.div>

        </div>
    );
}