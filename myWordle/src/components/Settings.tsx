import React, { useState, useEffect } from 'react';
import soundService from '../services/soundService';
import '../styles/Settings.css';
import settingsIcon from '../images/settings_gray.svg';


interface SettingsProps {
    idioma: string;
    setIdioma: (idioma: string) => void;
}

const Settings: React.FC<SettingsProps> = ({ idioma, setIdioma }) => {
    const [open, setOpen] = useState(false);
    const [soundOn, setSoundOn] = useState(soundService.isSoundEnabled());

    useEffect(() => {
        // Leer estado de sonido de localStorage al montar
        const saved = localStorage.getItem('soundOn');
        if (saved !== null) {
            setSoundOn(saved === 'true');
            soundService.setSoundEnabled(saved === 'true');
        }
    }, []);

    const handleIdiomaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setIdioma(e.target.value);
    };

    const toggleSound = () => {
        const newState = soundService.toggleSound();
        setSoundOn(newState);
        localStorage.setItem('soundOn', String(newState));
    };

    return (
        <div className="settings-container">
            <button className="settings-open-btn" onClick={() => setOpen(true)} aria-label="Abrir ajustes">
                <img src={settingsIcon} alt="settings button" />
            </button>
            {open && (
                <div className="settings-modal-overlay" onClick={() => setOpen(false)}>
                    <div className="settings-modal" onClick={e => e.stopPropagation()}>
                        <h2>{idioma === 'esp' ? `Ajustes` : `Settings`}</h2>
                        <div className="settings-group">
                            <label htmlFor="idioma-select">
                                {idioma === 'esp' ? `Idioma:` : `Language:`}</label>
                            <select id="idioma-select" value={idioma} onChange={handleIdiomaChange}>
                                <option value="esp">Español</option>
                                <option value="eng">English</option>
                            </select>
                        </div>
                        <div className="settings-group">
                            <label htmlFor="sound-toggle">
                                {idioma === 'esp' ? `Sonido:` : `Sound:`}
                            </label>
                            {idioma === 'esp' ? <button id="sound-toggle" onClick={toggleSound} aria-pressed={soundOn}>
                                {soundOn ? '🔊 Encendido' : '🔇 Apagado'}
                            </button>
                                :
                                <button id="sound-toggle" onClick={toggleSound} aria-pressed={soundOn}>
                                    {soundOn ? '🔊 On' : '🔇 Off'}
                                </button>}
                        </div>
                        <button className="settings-close-btn" onClick={() => setOpen(false)}>
                            {idioma === 'esp' ? `Cerrar` : `Close`} </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Settings;
