import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    topScore: 0,
    clickedLists: [],
    isGameinProgress: true,
  }

  playAgain = () => {
    this.setState({
      clickedLists: [],
      isGameinProgress: true,
    })
  }

  renderGameOverTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (currentScore > newTopScore) {
      newTopScore = currentScore
    }

    this.setState({
      topScore: newTopScore,
      isGameinProgress: false,
    })
  }

  renderWinOrLose = () => {
    const {emojisList} = this.props
    const {clickedLists} = this.state
    const isWon = emojisList.length === clickedLists.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        playAgain={this.playAgain}
        clickedLength={clickedLists.length}
      />
    )
  }

  emojiClicked = id => {
    const {emojisList} = this.props

    const {clickedLists} = this.state
    const isPresent = clickedLists.includes(id)
    const clickedEmojisLength = clickedLists.length
    if (isPresent) {
      this.renderGameOverTopScore(clickedEmojisLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisLength) {
        this.renderGameOverTopScore(emojisList.length)
      }
      this.setState(prev => ({
        clickedLists: [...prev.clickedLists, id],
      }))
      console.log(clickedLists)
    }
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojisList = () => {
    const shuffledEmojisList = this.getShuffledEmojisList()
    return (
      <ul className="unordered-emojis">
        {shuffledEmojisList.map(each => (
          <EmojiCard
            emojisListDetails={each}
            key={each.id}
            emojiClicked={this.emojiClicked}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {topScore, isGameinProgress, clickedLists} = this.state
    return (
      <div className="app">
        <NavBar
          topScore={topScore}
          currentScore={clickedLists.length}
          isGameinProgress={isGameinProgress}
        />
        <div className="emojis-holder">
          <div className="emojis-container">
            {isGameinProgress
              ? this.renderEmojisList()
              : this.renderWinOrLose()}
          </div>
        </div>
      </div>
    )
  }
}

export default EmojiGame
