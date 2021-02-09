import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
    return (
      <table>
        <tbody>
          <Statistic name = 'good' value = {props.good} /> 
          <Statistic name = 'neutral' value = {props.neutral} />
          <Statistic name = 'bad' value = {props.bad} />
          <Statistic name = 'all' value = {props.total} />
          <Statistic name = 'average' value = {props.average} />
          <Statistic name = 'positive' value = {props.positive} text = '%' />
        </tbody>
      </table>
    )
}

const Statistic = (props) => {
  return (
    <tr>
      <td> {props.name} </td>
      <td> {props.value} {props.text} </td>
    </tr>  
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total] = [good + neutral + bad]
  const [average] = [(good - bad) / total]
  const [positive] = [(good / total) * 100]
  

  const increaseGood = () => setGood(good +1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad +1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={increaseGood} text='good' />
      <Button handleClick={increaseNeutral} text='neutral' />
      <Button handleClick={increaseBad} text='bad' />

      <h1>statistics</h1>   
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive} />

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))



