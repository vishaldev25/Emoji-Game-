import './index.css'

const WinOrLoseCard = props => {
  const {isWon, clickedLength, playAgain} = props
  const wordNeed = isWon ? 'Won' : 'Lose'
  const best = isWon && 'Best'

  return (
    <div className="win-or-lose-card">
      <div className="decision-text-container">
        <h2 className="win-or-lose-heading"> You {wordNeed}</h2>
        <p className="win-or-lose-para"> {best} Score</p>
        <p className="win-or-lose-score">{clickedLength}/12</p>
        <button
          type="button"
          onClick={playAgain}
          className="win-or-lose-button"
        >
          Play Again
        </button>
      </div>
      {isWon ? (
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win or lose"
          className="win-or-lose-image"
        />
      ) : (
        <img
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          alt="win or lose"
          className="win-or-lose-image"
        />
      )}
    </div>
  )
}

export default WinOrLoseCard
