import React from "react";
import { motion } from "framer-motion";
import { useStore } from "../context/StoreContext";
import useSound from "../hooks/useSound";
import whooshSound from "../assets/sound/whoosh.mp3";



export default function PackSelection({ onSelectPack }) {

    const { deductCoins } = useStore();

    const packs = [
        {
            name: "Bronze",
            gradient: "from-yellow-700 to-orange-600",
            odds: "70 / 25 / 4.5 / 0.5",
            price: 150,
            wave: "bg-gradient-to-r from-yellow-500/40 via-orange-300/30 to-yellow-400/40",
            direction: "wave-lr"
        },
        {
            name: "Silver",
            gradient: "from-gray-400 to-gray-200",
            odds: "40 / 45 / 13 / 2",
            price: 300,
            wave: "bg-gradient-to-r from-gray-300/40 via-gray-200/30 to-gray-100/40",
            direction: "wave-rl"
        },
        {
            name: "Gold",
            gradient: "from-yellow-400 to-yellow-300",
            odds: "20 / 50 / 25 / 5",
            price: 500,
            wave: "bg-gradient-to-r from-yellow-200/70 via-yellow-400/50 to-yellow-300/70",
            direction: "wave-lr"
        },
    ];

    const playOpen = useSound(whooshSound);

    return (
        <div className="mt-4 flex flex-col items-center w-full">
            <h2 className="text-4xl font-extrabold mb-12 text-center text-yellow-400 drop-shadow-lg">
                Choose Your Cricket Pack
            </h2>

            <div className="flex gap-16 md:gap-28 mt-12 justify-center flex-wrap perspective-150">

                {packs.map((pack) => (
                    <div key={pack.name} className="flex flex-col items-center">
                        <motion.div
                            onClick={async () => {
                                playOpen();
                                await new Promise((resolve) => setTimeout(resolve, 1000));
                                deductCoins(pack.price);
                                onSelectPack(pack.name);
                            }}
                            className="relative w-56 h-72 cursor-pointer rounded-3xl overflow-hidden"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                className={`absolute inset-0 rounded-3xl border-2 border-white shadow-2xl ${pack.gradient}`}
                                initial={{ rotateY: 180 }}
                                animate={{ rotateY: 0 }}
                                transition={{ duration: 0.8 }}
                                style={{ transformStyle: "preserve-3d" }}
                            />

                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/20 via-white/0 to-white/20 opacity-40 animate-shimmer pointer-events-none" />

                            <motion.div
                                className={`absolute inset-0 rounded-3xl pointer-events-none ${pack.wave} bg-[length:200%_100%] wave-alternate`}
                            />

                            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white font-bold text-2xl text-center">
                                <span className="text-5xl mb-2 drop-shadow-xl">{pack.name} Pack</span>
                                <div className="w-24 h-2 bg-white/40 rounded-full animate-pulse mb-4 shadow-lg" />
                            </div>

                            <div className="absolute top-3 right-3 text-sm text-white/90 font-semibold bg-black/30 px-2 py-1 rounded-full">
                                Price: {pack.price} coins
                            </div>
                        </motion.div>

                        <div className="mt-8 text-sm text-white/90 font-semibold text-center">
                            Odds: {pack.odds}
                            <div>(Common/Rare/Elite/Legend)</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}