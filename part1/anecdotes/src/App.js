import "./App.css";
import React, { useState } from "react";

// Button component
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

// Print the anecdotes
const Printanecdote = ({ text, anecdotes, vote }) => {
  return (
    <>
      <p>{text}</p>
      <p>{vote}</p>
      <p>{anecdotes}</p>
    </>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(7).fill(0));

  const [most, setMost] = useState(0);
  const [maxval, setMaxval] = useState(0);
  const anecDotes = () =>
    setSelected(Math.floor(Math.random() * anecdotes.length));
  // console.log(selected);

  // This section of call back function return a function for even handler .This is just my choice of trying to apply (practice )what I have came to learn in part1 of this course

  const handleVote = (selected) => () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
    countmax();
  };

  // Most votes
  // useEffect(() => {
  const countmax = () => {
    let xMax = Math.max(...votes);
    setMaxval(Math.max(...votes));
    const keyy = Object.keys(votes).find((key) => votes[key] === xMax);
    setMost(keyy);
  };
  // }, [votes]);

  return (
    <div>
      <h1>Random Anecdotes</h1>
      <Printanecdote
        anecdotes={anecdotes[selected]}
        vote={votes[selected]}
        text="Votes"
      />

      <Button handleClick={handleVote(selected)} text="Vote" />
      <Button handleClick={anecDotes} text="Next Anecdote" />
      {maxval ? (
        <Printanecdote
          anecdotes={anecdotes[most]}
          vote={votes[most]}
          text="Anecdote with most votes."
        />
      ) : (
        <Printanecdote anecdotes={""} vote={""} text="" />
      )}
    </div>
  );
};

export default App;
