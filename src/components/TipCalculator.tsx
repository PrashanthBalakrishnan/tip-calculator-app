import { useState } from 'react'
import data from '../data'
import TipItems from './TipItems'
import Amount from './Amount'
import dollar from '../assets/icon-dollar.svg'
import person from '../assets/icon-person.svg'
import clsx from 'clsx'

const TipCalculator = () => {
  const [bill, setBill] = useState('')
  const [tip, setTip] = useState(data[0].tipPercentage)
  const [people, setPeople] = useState('')
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
    setPeople('')
  }
  return (
    <div className="app">
      <div className="tipCal">
        <div className="tipCal__bill">
          <label>Bill</label>
          <div className="container">
            <img src={dollar} alt="dollar" />
            <input
              className="tipCal__bill--input"
              type="number"
              placeholder="0"
              value={bill}
              onChange={(e) => setBill(e.target.value)}
            />
          </div>
        </div>
        <div className="tipCal__tip">
          <label>Select Tip %</label>
          {data.map((item) => (
            <div key={item.id}>
              <TipItems
                percentage={item.tipPercentage}
                setTip={setTip}
                label={item.label}
                tip={tip}
              />
            </div>
          ))}
          <input
            type="number"
            placeholder="Custom"
            onChange={handleCustomTip}
          />
        </div>
        <div className="tipCal__people">
          <div className="tipCal__people--label">
            <label>Number of People</label>
            <span className={clsx(people !== '0' && 'zeroError')}>
              Can't be zero
            </span>
          </div>
          <div className="container">
            <img src={person} alt="dollar" />
            <input
              className={clsx('tipCal__bill--input', people === '0' && 'red')}
              type="number"
              value={people}
              onChange={(e) => setPeople(e.target.value)}
            />
          </div>
        </div>
      </div>
      <Amount tipAmount={tipAmount} total={total} handleReset={handleReset} />
    </div>
  )
}
export default TipCalculator
