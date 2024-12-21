import React, {useState, useEffect} from "react"

const DrumPad = ({...props}) => {
  const { pad, keys, effects, setContent} = props;
  const [isActive, setIsActive] = useState(false);

  const playSound = () => {
    setIsActive(true);

    const audioElement = document.getElementById(keys);
    if (audioElement) {
      audioElement.currentTime = 0; 
      audioElement.play().catch((err) => console.error("Error playing audio:", err)); 
    }

    setTimeout(() => setIsActive(false), 200); 
  };

  const handleKeyDown = (event) => {
    if (event.code === `Key${keys.toUpperCase()}`) {
      playSound();
    }
  };

  useEffect(() => {
    // Добавляем слушатель для клавиш
    window.addEventListener("keydown", handleKeyDown);
    if (isActive) {
      setContent(pad);
    }

    // Убираем слушатель при размонтировании
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isActive, pad, setContent]);

  return (
    <div 
      className={`drum-pad ${isActive ? "active" : ""}`}
      id={pad} 
      role="button"
      onClick={playSound}>
        
    {keys}

    <audio 
    className="clip"
    id={keys}
    src={effects} 
    >

    </audio>
    </div>
  );
};
export default DrumPad;