import './index.css'

const EmojiCard = props => {
  const {emojisListDetails, emojiClicked} = props
  const {id, emojiUrl, emojiName} = emojisListDetails

  const clickEmoji = () => {
    emojiClicked(id)
  }

  return (
    <li className="emoji-card-list">
      <button className="button-value" type="button" onClick={clickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-card-image" />
      </button>
    </li>
  )
}

export default EmojiCard
