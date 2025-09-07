import { useState, useRef } from 'react';
import BotaoNao from './components/BotaoNao';
import BotaoSim from './components/BotaoSim';
import Galeria from './components/Galeria';
import confetti from 'canvas-confetti';
import './App.css';
import HomePage from './HomePage';
import IntroducaoPage from './introducaopage';

function App() {
  // estados possíveis: 'home' -> 'introducao' -> 'pedido'
  const [tela, setTela] = useState('home'); 
  const [aceitou, setAceitou] = useState(false);
  const audioRef = useRef(null);

  // função chamada quando clicar em "Sim"
  const handleSimClick = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log("Erro ao tocar música:", e));
    }
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff1493', '#ff69b4', '#db2777']
    });
    setAceitou(true);
  };

  // Página inicial -> leva para introdução
  if (tela === 'home') {
    return <HomePage onStart={() => setTela('introducao')} />;
  }

  // Página de introdução -> leva para o pedido
  if (tela === 'introducao') {
    return <IntroducaoPage onContinue={() => setTela('pedido')} />;
  }

  // Página do pedido
  if (tela === 'pedido') {
    return (
      <div className="app-container relative min-h-screen overflow-hidden">
        <audio 
          ref={audioRef}
          loop
          src={`${import.meta.env.BASE_URL || ''}musica.mp3`}
          className="hidden"
        />
        {aceitou && (
          <img
            src="public/fundo.jpg"
            alt="Fundo"
            className="absolute inset-0 w-full h-full object-cover -z-10"
            style={{ transform: "rotate(-90deg)" }}
          />
        )}
        {!aceitou ? (
          <>
            <h1 className="main-title animate-fade-in text-black">
              Quer namorar comigo? 💘
            </h1>
            <div className="button-group">
              <BotaoSim onClick={handleSimClick} />
              <BotaoNao />
            </div>
            <p className="text-gray-600 text-sm">* Não aceitar é crime!!!</p>
          </>
        ) : (
          <div className="acceptance-message animate-fade-in relative z-10">
            <h2 className="acceptance-title text-black">Ebaaa! Você disse SIM! 🎉</h2>
            <p className="acceptance-text text-black">Você acabou de fazer meu dia perfeito! 💖</p>
            <Galeria />
          </div>
        )}
      </div>
    );
  }

  return null; // fallback (não deve chegar aqui)
}

export default App;
