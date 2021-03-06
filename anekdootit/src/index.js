import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)
const Most = ({anecdotes, vote}) => {
  console.log (anecdotes)
  let best = 0;
  let i
  for (i = 0; i < 6; i++) {
    if (vote[i] > best) {
      best = i
    }
  }
  console.log ("best", best)
  console.log (anecdotes[best])
  return (
    <div>
      <p>{anecdotes[best]}</p>
    </div>

  )
}
const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(new Array(6).fill(0))

  const handleClick = () => {
    setSelected(Math.floor((Math.random() * 5) + 1))
  }
  const handleVoteClick = () => {
    const copy = [...vote]
    copy[selected] += 1
    setVote (copy)
  }
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>
      {props.anecdotes[selected]}
      </p>
      <p>has {vote[selected]} votes</p>
        <Button onClick={handleVoteClick} text='vote' />
        <Button onClick={handleClick} text='next anecdote' />
      <h1>Anecdote with most votes</h1>
        <Most anecdotes = {props.anecdotes} vote = {vote}/>
    </div>
  )
}
const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
