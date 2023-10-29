interface AmountProps {
  tipAmount: number
  total: number
  handleReset: () => void
}

const Amount: React.FC<AmountProps> = ({ tipAmount, total, handleReset }) => {
  return (
    <div className="amount">
      <div className="amount__info">
        <div className="amount__val">
          <div>
            <p> Tip Amount</p>
            <p className="amount__person">/ person</p>
          </div>
          <span className="price">${tipAmount.toFixed(2)}</span>
        </div>
        <div className="amount__val">
          <div>
            <p>Total</p>
            <p className="amount__person">/ person</p>
          </div>
          <span className="price">
            ${Number.isNaN(total) ? '0.00' : total.toFixed(2)}
          </span>
        </div>
      </div>
      <button className="amount__btn" onClick={handleReset}>
        Reset
      </button>
    </div>
  )
}
export default Amount
