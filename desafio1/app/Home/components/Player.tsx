"use client"

import React, { useState, useRef, useEffect } from "react";
import { parseBlob } from 'music-metadata-browser';
import style from "./player.module.css";
import Image from "next/image";
import im1 from '../assets/images/album.png';

interface PlayerProps {
  songs: string[];
}

const Player: React.FC<PlayerProps> = ({ songs }) => {
    const [play, setPlay] = useState<string>('player_playing__iuDJ_');
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const audioRef = useRef<HTMLAudioElement>(null);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [title, setTitle] = useState<string>('Título Desconhecido');
    const [artist, setArtist] = useState<string>('Artista Desconhecido');

    useEffect(() => {
        const fetchMetadata = async () => {
            const audioElement = audioRef.current;

            if (audioElement) {
                try {
                    const response = await fetch(songs[currentSongIndex]);
                    const blob = await response.blob();
                    const metadata = await parseBlob(blob);
                    setTitle(metadata.common.title || 'Título Desconhecido');
                    setDuration(metadata.format.duration || 0 );
                    setArtist(metadata.common.artist || 'Artista Desconhecido');
                    
                } catch (error) {
                    console.error('Error reading metadata:', error);
                    setTitle('Título Desconhecido');
                }
            }
        };
        fetchMetadata();
    }, [songs, currentSongIndex]);

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
          audio.addEventListener('loadedmetadata', () => {
            setDuration(audio.duration);
          });
    
          audio.addEventListener('timeupdate', () => {
            setCurrentTime(audio.currentTime);
          });
        }
    
        return () => {
          if (audio) {
            audio.removeEventListener('loadedmetadata', () => {});
            audio.removeEventListener('timeupdate', () => {});
          }
        };
      }, []);
    
      // Avançar ou retroceder a reprodução
      const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
        const audio = audioRef.current;
        if (audio) {
          const seekTime = parseFloat(event.target.value);
          audio.currentTime = seekTime;
          setCurrentTime(seekTime);
        }
      };

    const Played = () => {
        setPlay((prev) => (prev === 'player_playing__iuDJ_' ? '' : 'player_playing__iuDJ_'));
    };

    const playAudio = () => {
        audioRef.current?.play();
    };

    const pauseAudio = () => {
        audioRef.current?.pause();
    };

    const playPrevSong = () => {
        setCurrentSongIndex((prevIndex) => (prevIndex === 0 ? songs.length - 1 : prevIndex - 1));
    };
    
    const playNextSong = () => {
        setCurrentSongIndex((prevIndex) => (prevIndex === songs.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className={style.card + " card"}>
            <div className={style.informations}>
                <div className={style.imageCard + " image-card"}>
                    <Image className={style.Image} alt='img-Album' src={im1} />
                </div>
                <div className={style.titleCard + " title-card"}>
                    <h3>{title}</h3>
                    <p>{artist}</p>
                </div>
            </div>
            
            <div className={style.controls}>
                <i className={style.btn + " fas fa-backward"} onClick={playPrevSong} aria-hidden="true"></i>
                <i onClick={() => { Played(); playAudio(); }} className={style.btn + " " + style.play + " fas fa-play " + play} aria-hidden="true"></i>
                <i onClick={() => { Played(); pauseAudio(); }} className={style.btn + " " + style.pause + " fas fa-pause " + play} aria-hidden="true"></i>
                <i className={style.btn + " fas fa-forward"} onClick={playNextSong} aria-hidden="true"></i>
            </div>
        
            <div className={style.player}>
                <audio src={songs[currentSongIndex]} ref={audioRef} />
            </div>

            <div className={style.timeContainer}>
                <div className={style.progressBar}>
                    <input
                        type="range"
                        min="0"
                        max={duration.toString()}
                        value={currentTime.toString()}
                        onChange={handleSeek}
                        className={style.progress}
                    />
                </div>
                <div className={style.time}>
                    <span>{currentTime !== null ? `${Math.floor(currentTime / 60)}:${Math.floor(currentTime % 60) }` : 'Carregando...'}</span>
                    <span>{duration !== null ? `${Math.floor(duration / 60)}:${Math.floor(duration % 60)}` : 'Carregando...'}</span>
                </div>
            </div>
        </div>
    );
};

export default Player;