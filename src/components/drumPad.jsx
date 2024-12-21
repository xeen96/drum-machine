import React, {useState, useEffect} from "react"

const DrumPad = ({ pad, keys, effects }) => {
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
    if (event.key.toUpperCase() === keys) {
      playSound();
    }
  };

  useEffect(() => {
    // Добавляем слушатель для клавиш
    window.addEventListener("keydown", handleKeyDown);

    // Убираем слушатель при размонтировании
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);


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