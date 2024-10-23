import React from 'react';
import './Projects.css';
import ticTacToeIcon from '../assets/tic-tac-toe.png';  // Add your Tic Tac Toe icon here
import matchingPairIcon from '../assets/matching.png';  // Add your Matching Pair icon here
import rockPaperIcon from '../assets/rock-paper.png';  // Add your Rock, Paper, Scissors icon here

function Projects() {
  return (
    <section id="projects" className="projects">
      <h1>Projects</h1>
      <ul>
        {/* First Game Project (Tic Tac Toe) */}
        <li>
          <a href="https://obi.kean.edu/~patelhen@kean.edu/game1/game1.html" target="_blank" rel="noopener noreferrer">
            <img src={ticTacToeIcon} alt="Tic Tac Toe Icon" className="project-icon" />
          </a>
          <h3>Tic Tac Toe Game – Halloween Theme</h3>
          <p>Designed and developed a fun Tic Tac Toe game with a spooky Halloween theme.</p>
          <a href="https://obi.kean.edu/~patelhen@kean.edu/game1/game1.html" target="_blank" rel="noopener noreferrer">Play Tic Tac Toe</a>
        </li>

        {/* Second Game Project (Matching Pair Game) */}
        <li>
          <a href="https://obi.kean.edu/~patelhen@kean.edu/game3/game3.html" target="_blank" rel="noopener noreferrer">
            <img src={matchingPairIcon} alt="Matching Pair Game Icon" className="project-icon2" />
          </a>
          <h3>Matching Pair Game – Angry Birds Theme</h3>
          <p>Created a matching pair game using the Angry Birds theme.</p>
          <a href="https://obi.kean.edu/~patelhen@kean.edu/game3/game3.html" target="_blank" rel="noopener noreferrer">Play Matching Pair Game</a>
        </li>

        {/* Third Game Project (Rock, Paper, Scissors) */}
        <li>
          <a href="https://obi.kean.edu/~patelhen@kean.edu/game2/game2.html" target="_blank" rel="noopener noreferrer">
            <img src={rockPaperIcon} alt="Rock Paper Scissors Icon" className="project-icon" />
          </a>
          <h3>Rock, Paper, Scissors Game</h3>
          <p>Developed a Rock, Paper, Scissors game with a creative theme.</p>
          <a href="https://obi.kean.edu/~patelhen@kean.edu/game2/game2.html" target="_blank" rel="noopener noreferrer">Play Rock, Paper, Scissors</a>
        </li>
      </ul>
    </section>
  );
}

export default Projects;
