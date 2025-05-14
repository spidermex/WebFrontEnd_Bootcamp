import { useState, useEffect, useRef } from 'react';
import logo from '../../images/giraPalabras-logo2a.png';
import introAudio from '../../sounds/mySound15secs.mp3';
import './SplashScreen.css';

const SplashScreen = ({ onComplete, idioma, soundEnabled }) => {
  const audioRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [splashStarted, setSplashStarted] = useState(false);
  const [audioPlayed, setAudioPlayed] = useState(false);
  const intervalRef = useRef(null);
  const timerRef = useRef(null);

  // Función de reproducción de audio con control de estado
  const playAudio = () => {
    if (audioRef.current && !audioPlayed) {
      setAudioPlayed(true); // Marcamos que ya intentamos reproducir
      
      audioRef.current.currentTime = 0;
      audioRef.current.play()
        .then(() => {
        })
        .catch(error => {
          console.warn('Error al reproducir audio:', error);
          setAudioPlayed(false); // Reiniciamos el estado si falla
        });
    }
  };

  // Dividir en dos efectos separados
  useEffect(() => {
    // Este efecto maneja SOLO la reproducción del audio
    if (splashStarted && !audioPlayed && soundEnabled) {
      playAudio();
    }
  }, [splashStarted, audioPlayed]);

  useEffect(() => {
    // Este efecto maneja SOLO los temporizadores y progreso
    if (splashStarted) {      
      // Iniciamos la barra de progreso
      intervalRef.current = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + (100 / 15);
          return newProgress >= 100 ? 100 : newProgress;
        });
      }, 1000);
      
      // Temporizador para completar
      timerRef.current = setTimeout(() => {
        setLoading(false);
        setTimeout(() => onComplete(), 500);
      }, 15000);
      
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    }
  }, [splashStarted, onComplete]); // Nota: audioPlayed NO está en las dependencias

  // Manejador para cuando termina el audio
  const handleAudioEnded = () => {
  };

  // Botón para saltar la intro
  const handleSkip = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    
    // Limpiar intervalos y temporizadores
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timerRef.current) clearTimeout(timerRef.current);
    
    setLoading(false);
    setTimeout(() => onComplete(), 500);
  };

  // Manejar el inicio del splash
  const handleStart = () => {
    setSplashStarted(true);
  };

  return (
    <div className={`splash-container ${loading ? '' : 'fade-out'}`}>
      <div className="logo-container">
        <img src={logo} alt="Gira Palabras Logo" className="splash-logo" />
      </div>
      
      {!splashStarted ? (
        <button 
          className="start-button"
          onClick={handleStart}
        >
         {idioma === 'esp' ? `Iniciar Aplicación` : `Start Application`}
        </button>
      ) : (
        <>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
          </div>
          <button className="skip-button" onClick={handleSkip}>
           {idioma === 'esp' ? `Saltar Intro` : `Skip Intro`}
          </button>
        </>
      )}
      
      <audio 
        ref={audioRef} 
        src={introAudio} 
        preload="auto"
        onEnded={handleAudioEnded}
        onError={(e) => console.error("Error en el elemento de audio:", e)}
      />
    </div>
  );
};

export default SplashScreen;