import './index.css'

const NavBar = props => {
  const {currentScore, topScore, isGameinProgress} = props
  return (
    <nav className="nav-bar">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt=" emoji logo"
          className="logo-image"
        />
        <h1 className="logo-heading">Emoji Game</h1>
      </div>

      {isGameinProgress && (
        <div className="score-details-container">
          <p className="score-display">Score: {currentScore}</p>
          <p className="score-display">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
