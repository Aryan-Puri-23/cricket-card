import React, { useState } from "react";
import { useStore } from "../context/StoreContext";
import Card from "./Card";

export default function MyCollection() {
    const { collection } = useStore();
    const [filter, setFilter] = useState("All");

    const filtered = filter === "All" ? collection : collection.filter(c => c.tier === filter);

    return (
        <div className="p-4 max-h-[80vh] overflow-y-auto max-w-6xl mx-auto bg-gray-900 rounded-xl shadow-lg">
            <div className="flex gap-2 mb-4">
                {["All", "Common", "Rare", "Epic", "Legend"].map(t => (
                    <button
                        key={t}
                        onClick={() => setFilter(t)}
                        className={`px-3 py-1 rounded-full ${filter === t ? 'bg-indigo-500 text-white' : 'bg-gray-700 text-white/80'} transition cursor-pointer`}
                    >{t}</button>
                ))}
            </div>
            {filtered.length === 0 ? (
                <p className="text-gray-500">No cards yet.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {filtered.map((c) => (
                        <div key={c.id} className="flex justify-center">
                            <Card player={c} revealed />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
