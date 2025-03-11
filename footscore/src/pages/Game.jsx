import React, { useState } from 'react';

function Game() {
  const [score, setScore] = useState(0);

  return (
    <div>
      <h1>Score: {score}</h1>
      <button onClick={() => setScore(score + 1)}>Add 1</button>
    </div>
  );
}

export { Game };