import React, { useEffect, useRef } from 'react';

interface VideoPlayerProps {
  src: string;
  width?: number | string;
  height?: number | string;
  controls?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  width = '100%',
  height = 'auto', 
  muted = false,
  loop = true,
  className = '',
}) => {
  
  const videoRef = useRef<HTMLVideoElement>(null);

  // const handlePlay = () => {
  //   videoRef.current.play();
  // };

  useEffect(()=> {
    videoRef.current?.play()
  }, [])

  return (
    <div className={`video-container ${className}`}>
      <video
          style={{ borderRadius: "42px" }}
          ref={videoRef} 
          width={width}
          height={height}
          controls={false} 
          // autoPlay={autoPlay}
          muted={muted} // We're using custom controls 
          loop={loop}
        >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;