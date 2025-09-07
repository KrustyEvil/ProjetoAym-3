// src/IntroducaoPage.jsx
export default function IntroducaoPage({ onContinue }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 p-6 text-center">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-xl">
        <h1 className="text-3xl font-bold mb-4">Antes de te fazer uma pergunta… ❤️</h1>

        <p className="text-lg text-gray-700 mb-3">
          Desde que você entrou na minha vida, tudo mudou de um jeito que eu nem sei explicar.
          Os dias ficaram mais leves, os sorrisos mais fáceis e até os momentos simples ganharam um brilho diferente.
        </p>

        <p className="text-lg text-gray-700 mb-3">
          Com você eu encontrei paz, alegria e um carinho que faz tudo valer a pena.
          Eu descobri um motivo novo para acreditar no amor de verdade.
        </p>

        <p className="text-lg text-gray-700 mb-3">
          E hoje eu só quero abrir meu coração e dar o próximo passo ao seu lado.
        </p>

        <div className="mt-6 flex gap-4 justify-center">
          <button
            onClick={onContinue}
            className="px-6 py-2 rounded-full bg-pink-500 text-white shadow-lg hover:bg-pink-600 transition"
          >
            Continuar 💖
          </button>
        </div>
      </div>
    </div>
  );
}
