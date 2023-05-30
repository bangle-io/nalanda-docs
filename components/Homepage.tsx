import React, { useState } from "react";
import { motion } from "framer-motion";

export const Homepage = () => {
  const [lavaLamps, updateLamps] = useState();

  const [showLamps, updateShowLamps] = useState(false);

  React.useEffect(() => {
    updateShowLamps(true);
    updateLamps(
      Array(4)
        .fill(null)
        .map((_, i) => (
          <motion.div
            className="absolute rounded-full bg-indigo-700 z-1"
            initial={{ scale: 0.5, opacity: 0.5, y: -100 }}
            animate={{
              y: "100%",
              scale: [0.8, 1.2, 0.6, 1.0],
              opacity: [1, 0.8, 0.6, 0.8],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: Math.random() * 100 + 100,
              height: Math.random() * 100 + 100,
              top: Math.random() * window.innerHeight,
              left: Math.random() * window.innerWidth,
            }}
          />
        ))
    );
  }, [updateShowLamps]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="shadow-xl rounded-lg overflow-hidden">
        <div className="relative overflow-hidden">
          <img
            className="w-full h-64 object-cover filter blur-md"
            src="https://placekitten.com/1024/1024"
            alt="hero placeholder"
          />
        </div>
        <div className="p-6">
          <h2 className="font-bold text-2xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-pink-200 to-yellow-500">
            Nalanda
          </h2>
          <p className="text-gray-700">
            Nalanda is a state management library for JavaScript applications.
          </p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            WIP
          </button>
        </div>
      </div>
    </div>
  );
};
