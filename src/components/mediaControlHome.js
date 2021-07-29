import React, {useState, useEffect, useRef} from 'react';
import './mediaControlHome.scss';
import {FaBackward, FaForward, FaPlay, FaPause} from 'react-icons/fa';

const MediaControlHome= () => {
  const tracks = [
    {name:'Nice piano and ukulele', artist: 'Royalty', img: 'https://www.bensound.com/bensound-img/buddy.jpg', audio:'https://www.bensound.com/bensound-music/bensound-buddy.mp3', duration: '2:02'},
    {name:'Gentle acoustic', artist: 'Acoustic', img: 'https://www.bensound.com/bensound-img/sunny.jpg', audio:'https://www.bensound.com//bensound-music/bensound-sunny.mp3', duration: '2:20'},
    {name:'Corporate motivational', artist: 'Corporate', img: 'https://www.bensound.com/bensound-img/energy.jpg', audio:'https://www.bensound.com/bensound-music/bensound-energy.mp3', duration: '2:59'},
    {name:'Slow cinematic', artist: 'Royalty', img: 'https://www.bensound.com/bensound-img/slowmotion.jpg', audio:'https://www.bensound.com/bensound-music/bensound-slowmotion.mp3', duration: '3:26'}
  ];
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const currentSong = tracks[trackIndex];
  const currentTime='0:00';
  const audioRef = useRef(new Audio(currentSong.audio));

  const updatePlayer = () =>{
    audioRef.current.load();
  }

  const toPrevTrack = () => {
    console.log('TODO go to prev');
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
    updatePlayer();
    if(isPlaying){
      audioRef.current.play();
    }
  }

  const toNextTrack = () => {
    console.log('TODO go to next');
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
    updatePlayer();
    if(isPlaying){
      audioRef.current.play();
    }
  }

  const playOrPause = () =>{
    if(!isPlaying){
      setIsPlaying(true);
      console.log('play');
    }
    else{
      setIsPlaying(false);
      console.log('pause');
    }
  }

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play(); 
    } 
      else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return(
    <div className="card">
      <div className="current-song">

        <div className="img-wrap">
          <img src={ currentSong.img }/>
        </div>
        <span className="song-name">{ currentSong.name }</span>
        <span className="song-autor">{ currentSong.artist }</span>

        <div className="controls">
          <button onClick={toPrevTrack} className="prev prev-next current-btn">
            <FaBackward/>
          </button>
          <button onClick={playOrPause} className="play current-btn">
            { (!isPlaying) ? <FaPlay/> : <FaPause/> }
          </button>
          <button onClick={toNextTrack} className="next prev-next current-btn">
            <FaForward/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default MediaControlHome;
