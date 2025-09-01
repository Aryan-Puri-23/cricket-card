import React, { useState, useEffect } from "react";
import Card from "./Card";
import { players } from "../data/players";
import confetti from "canvas-confetti";
import { useStore } from "../context/StoreContext";
import useSound from "../hooks/useSound";
import playepic from "../assets/sound/epic.mp3";
import legendary from "../assets/sound/legendary.mp3";



const PACKS = {
    Bronze: { odds: { Common: 70, Rare: 25, Epic: 4.5, Legend: 0.5 }, price: 150 },
    Silver: { odds: { Common: 40, Rare: 45, Epic: 13, Legend: 2 }, price: 300 },
    Gold: { odds: { Common: 20, Rare: 50, Epic: 25, Legend: 5 }, price: 500 },
};

function pickTier(odds) {
    const r = Math.random() * 100;
    let sum = 0;
    for (const [tier, p] of Object.entries(odds)) {
        sum += p;
        if (r <= sum) return tier;
    }
    return "Common";
}

function pickPlayerByTier(tier) {
    const pool = players.filter((p) => p.tier === tier);
    return pool[Math.floor(Math.random() * pool.length)];
}

export default function PackOpener({ packName, onBack }) {
    const { addToCollection, deductCoins } = useStore();
    const [cards, setCards] = useState([]);
    const [revealed, setRevealed] = useState([]);
    const packPrice = PACKS[packName].price;

    const playEpic = useSound(playepic);

    const legendarySound = useSound(legendary);


    useEffect(() => {
        if (packName) {
            const results = [];
            for (let i = 0; i < 5; i++) {
                const tier = pickTier(PACKS[packName].odds);
                results.push(pickPlayerByTier(tier));
            }
            setCards(results);
            setRevealed([]);
        }
    }, [packName]);

    const revealCard = (idx) => {
        if (revealed.includes(idx)) return;
        setRevealed((prev) => [...prev, idx]);
        addToCollection(cards[idx], packPrice);

        if (cards[idx].tier === "Legend") {
            confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 } });
            legendarySound();
        } else if (cards[idx].tier === "Epic") {
            playEpic();
        }
    };

    const revealAll = () => {
        const remaining = cards.map((_, i) => i).filter((i) => !revealed.includes(i));
        remaining.forEach((i) => revealCard(i));
    };

    return (
        <div className="flex flex-col items-center mt-16 gap-6">
            <div className="flex justify-center gap-12 flex-wrap">
                {cards.map((c, i) => (
                    <Card
                        key={i}
                        player={c}
                        revealed={revealed.includes(i)}
                        onClick={() => revealCard(i)}
                        disabled={revealed.includes(i)}
                    />
                ))}
            </div>

            <div className="flex gap-4 mt-4">
                {revealed.length < cards.length && (
                    <button
                        onClick={revealAll}
                        className="px-6 py-2 rounded-full bg-green-600 mt-4 hover:bg-green-500 transition cursor-pointer"
                    >
                        Reveal All
                    </button>
                )}
                {revealed.length === cards.length && (
                    <button
                        onClick={onBack}
                        className="px-6 py-2 mt-4 rounded-full bg-indigo-600 hover:bg-indigo-500 transition cursor-pointer"
                    >
                        Choose More Packs
                    </button>
                )}
            </div>
        </div>
    );
}
