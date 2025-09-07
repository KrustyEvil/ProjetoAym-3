import React from "react";
import { FaHeart } from "react-icons/fa"; // Instale react-icons se ainda não tiver: npm install react-icons

export default function HomePage({ onStart }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-rose-100 to-pink-100">
      <h1 className="text-5xl font-bold text-black mb-6 drop-shadow-lg animate-fade-in">
        Bem-vinda ao nosso cantinho especial ❤️
      </h1>
      <p className="text-xl text-black mb-8 max-w-xl text-center animate-fade-in">
        Hoje quero te mostrar algo diferente... algo que vem do coração.
      </p>
      <button
        onClick={onStart}
        className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold rounded-full shadow-lg border-2 border-rose-600 hover:scale-105 hover:from-pink-500 hover:to-rose-500 transition-all duration-300 animate-bounce"
      >
        <FaHeart className="text-2xl animate-pulse" />
        Começar
      </button>
    </div>
  );
}