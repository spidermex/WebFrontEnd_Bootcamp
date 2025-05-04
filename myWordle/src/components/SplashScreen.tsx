import React, { useRef, useState, useEffect } from 'react';
import logo from '../images/WordleLogo2.png';
import introAudio from '../sounds/myWordle15secs.mp3';
import '../styles/SplashScreen.css';

interface SplashScreenProps {
  onComplete: () => void;
}

interface SplashHandlers {
  interval: number;  // Browser's setInterval returns a number
  timer: number;     // Browser's setTimeout returns a number
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [splashStarted, setSplashStarted] = useState(false);

  const startSplash = (): SplashHandlers => {
    setSplashStarted(true);
    
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.warn('Reproducción de audio fallida:', error);
      });
    }
    
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + (100 / 15);
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 1000);
    
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => onComplete(), 500);
    }, 15000);
    
    return { interval, timer };
  };

  useEffect(() => {
    let interval: number | undefined;
    let timer: number | undefined;
    
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