import { useState } from 'react'
import data from '../data'
import TipItems from './TipItems'
import Amount from './Amount'
import dollar from '../assets/icon-dollar.svg'

const TipCalculator = () => {
  const [bill, setBill] = useState('')
  const [tip, setTip] = useState(data[0].tipPercentage)
  const [people, setPeople] = useState('1')
  console.log(tip, bill, people)

  const tipAmount = Number(bill) * tip

  const total = (Number(bill) + tipAmount) / Number(people)

  const handleCustomTip = (e: React.ChangeEvent<HTMLInputElement>) => {
    const customTip = Number(e.target.value)
    setTip(customTip / 100)
  }
  const handleReset = () => {
    setBill('')
    setTip(data[0].tipPercentage)
    setPeople('1')
  }
  return (
    <div className="app">
      <div className="tipCal">
        <div className="tipCal__bill">
          <label>Bill</label>
          <div className="container">
            <img src={dollar} alt="dollar" />
            <input
              type="text"
              value={bill}
              onChange={(e) => setBill(e.target.value)}
            />
          </div>
        </div>
        <div className="tipCal__tip">
          <label>Select Tip %</label>
          {data.map((tip) => (
            <div key={tip.id}>
              <TipItems percentage={tip.tipPercentage} setTip={setTip} />
            </div>
          ))}
          <input
            type="number"
            placeholder="Custom"
            onChange={handleCustomTip}
          />
        </div>
        <div className="tipCal__people">
          <label>Number of People</label>
          <input
            type="number"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
          />
        </div>
      </div>
      <Amount tipAmount={tipAmount} total={total} handleReset={handleReset} />
    </div>
  )
}
export default TipCalculator
