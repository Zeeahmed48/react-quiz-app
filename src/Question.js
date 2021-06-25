import React from 'react';

const Question = ({ answer, handleChange, checkAnswer, questionIndex }) => {
  return (
    <li>
      <input
        type='radio'
        id={answer}
        onChange={() => handleChange(answer)}
        value={checkAnswer}
        name={questionIndex}
        checked={answer === checkAnswer}
      />
      <label htmlFor={answer}>{answer}</label>
    </li>
  );
};

export default Question;
