import React, { useState, useEffect } from 'react';

const GameTask = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [difficulty, setDifficulty] = useState('Easy');
  const [boxColor, setBoxColor] = useState('');
  const [prevBoxColor, setPrevBoxColor] = useState('');
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(40);

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [mobileNumberError, setMobileNumberError] = useState('');

  useEffect(() => {
    let intervalId;
    let timeoutId;

    const changeBoxColor = () => {
      const colors = ['green', 'red'];
      let randomColor;
      do {
        randomColor = colors[Math.floor(Math.random() * colors.length)];
      } while (randomColor === prevBoxColor);

      setPrevBoxColor(randomColor);
      setBoxColor(randomColor);
    };

    if (gameStarted && !gameOver) {
      // Change color every 1-2 seconds
      intervalId = setInterval(changeBoxColor, Math.floor(Math.random() * 1000) + 1000);

      timeoutId = setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (prevTime === 0) {
            setGameOver(true);
            clearInterval(intervalId);
            clearInterval(timeoutId);
            return prevTime;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
      clearInterval(timeoutId);
    };
  }, [gameStarted, gameOver, prevBoxColor]);

  const handleBoxClick = () => {
    if (boxColor === 'green' && !gameOver) {
      setScore(score + 1);
      const winningScore = getWinningScore();
      if (score + 1 === winningScore) {
        setGameOver(true);
      }
    } else {
      setGameOver(true);
    }
  };

  const getWinningScore = () => {
    switch (difficulty) {
      case 'Easy':
        return 10;
      case 'Medium':
        return 15;
      case 'Hard':
        return 25;
      default:
        return 10;
    }
  };

  const handleStartGame = () => {
    let nameErrorMessage = '';
    let emailErrorMessage = '';
    let mobileNumberErrorMessage = '';

    if (name.length < 3) {
      nameErrorMessage = 'Name should contain more than 3 characters';
    }

    if (!email.includes('@')) {
      emailErrorMessage = 'Enter a valid Email id';
    }

    if (mobileNumber.length !== 10) {
      mobileNumberErrorMessage = 'Mobile Number should be 10 characters';
    }

    setNameError(nameErrorMessage);
    setEmailError(emailErrorMessage);
    setMobileNumberError(mobileNumberErrorMessage);

    if (nameErrorMessage === '' && emailErrorMessage === '' && mobileNumberErrorMessage === '') {
      setGameStarted(true);
    }
  };

  const handleTryAgain = () => {
    setGameStarted(false);
    setGameOver(false);
    setTimeRemaining(40);
    setScore(0);
    setName('');
    setEmail('');
    setMobileNumber('');
    setDifficulty('Easy');
    setNameError('');
    setEmailError('');
    setMobileNumberError('');
    setPrevBoxColor('');
  };
return (
  <div className="container">
    <div className="game-container">
      {!gameStarted && !gameOver ? (
        <div>
          <h1>Game</h1>
          <div className="form-group">
          <label htmlFor="name">Name:</label>
               <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
               {<div className="error">{nameError}</div>}
             </div>
             <div className="form-group">
               <label htmlFor="email">Email:</label>
               <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
               {<div className="error">{emailError}</div>}
             </div>
             <div className="form-group">
               <label htmlFor="mobileNumber">Mobile Number:</label>
               <input type="tel" id="mobileNumber" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
               {<div className="error">{mobileNumberError}</div>}
             </div>
             <div className="form-group">
               <label htmlFor="difficulty">Difficulty Level:</label>
               <select id="difficulty" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                 <option value="Easy">Easy</option>
                 <option value="Medium">Medium</option>
                 <option value="Hard">Hard</option>
               </select>
          </div>
          <button onClick={handleStartGame}>Start Game</button>
        </div>
      ) : (
        gameOver ? (
          <div>
            {difficulty === 'Easy' && score === 10 ? (
              <h2>You won! Score: {score}/10</h2>
            ) : difficulty === 'Medium' && score === 15 ? (
              <h2>You won! Score: {score}/15</h2>
            ) : difficulty === 'Hard' && score === 25 ? (
              <h2>You won! Score: {score}/25</h2>
            ) : (
              <h2>Game Over</h2>
            )}
            <button onClick={handleTryAgain}>Try Again</button>
          </div>
        ) : (
          <div>
            <div
              className="color-box"
              style={{
                backgroundColor: boxColor,
                position: 'relative',
                left: '100px',
              }}
              onClick={handleBoxClick}
            ></div>
            <div className="info">
              <h2>Difficulty: {difficulty}</h2>
              {/* <h2>Score: {score}</h2> */}
              {difficulty === 'Easy' ? (
                <h2>Score: {score}/10</h2>
              ) : difficulty === 'Medium' ? (
                <h2>Score: {score}/15</h2>
              ) : difficulty === 'Hard' ? (
                <h2>Score: {score}/25</h2>
              ) : null}
              <h2>Time Remaining: {timeRemaining}</h2>
            </div>
          </div>
        )
      )}
    </div>
  </div>
);
};

export default GameTask;
