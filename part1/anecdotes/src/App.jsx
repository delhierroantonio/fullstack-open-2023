import { useState } from "react";

const App = () => {
  
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length));
  
  function randomNum() {
    let num = Math.floor(Math.random() * 7);
    console.log(num);
    return num;
  }

  const handleNextAnecdote = () => {
    if (selected < anecdotes.length - 1) {
      let number = randomNum();
      setSelected(Number(number));
      // console.log(number);
    }
  };
  const handleVote = () => {
    const copy = [...votes];
    copy[selected] ++;
    setVotes(copy);
  }
  
  let maxVoted = votes.indexOf(Math.max(...votes));

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <span>Selected: {selected}</span>
      <br />
      <span>Anecdote: {anecdotes[selected]}</span>
      <br />
      <span>This anecdote has: {votes[selected]} votes</span>
      <br />
      <button onClick={handleNextAnecdote}>Next Anecdote</button>
      <button onClick={handleVote}>Vote</button>
      <h2>Most voted anecdote with {votes[maxVoted]} votes was: {anecdotes[maxVoted]}</h2>
    </div>
  );
};

export default App;
