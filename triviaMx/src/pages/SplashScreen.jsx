import { useState, useEffect, useRef } from 'react';
import logo from '../images/cosmicTrivia-logo.png';
import introAudio from '../sounds/piano15secs.mp3';
import '../styles/SplashScreen.css';

const SplashScreen = ({ onComplete }) => {
  const audioRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [splashStarted, setSplashStarted] = useState(false);

  // Iniciar el splash screen con interacción del usuario
  const startSplash = () => {
    setSplashStarted(true);
    
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.warn('Reproducción de audio fallida:', error);
      });
    }
    
    // Iniciar la barra de progreso
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + (100 / 15);
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 1000);
    
    // Configurar el temporizador para completar
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => onComplete(), 500);
    }, 15000);
    
    // Guardar las referencias para limpiarlas después
    return { interval, timer };
  };

  useEffect(() => {
    let interval;
    let timer;
    
    if (splashStarted) {
      const handlers = startSplash();
      interval = handlers.interval;
      timer = handlers.timer;
    }

    return () => {
      if (interval) clearInterval(interval);
      if (timer) clearTimeout(timer);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, [splashStarted, onComplete]);

  // Botón para saltar la intro
  const handleSkip = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setLoading(false);
    setTimeout(() => onComplete(), 500);
  };

  return (
    <div className={`splash-container ${loading ? '' : 'fade-out'}`}>
      <div className="logo-container">
        <img src={logo} alt="TriviaMx Logo" className="splash-logo" />
      </div>
      
      {!splashStarted ? (
        <button 
          className="start-button"
          onClick={() => setSplashStarted(true)}
        >
          Iniciar Aplicación
        </button>
      ) : (
        <>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
          </div>
          <button className="skip-button" onClick={handleSkip}>
            Saltar Intro
          </button>
        </>
      )}
      
      <audio ref={audioRef} src={introAudio} preload="auto" />
    </div>
  );
};

export default SplashScreen;