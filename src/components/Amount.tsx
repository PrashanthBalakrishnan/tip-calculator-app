interface AmountProps {
  tipAmount: number
  total: number
  handleReset: () => void
}

const Amount: React.FC<AmountProps> = ({ tipAmount, total, handleReset }) => {
  return (
    <div className="amount">
      <div className="amount__info">
        <div className="amount__tip">
          <p> Tip Amount / person</p>
          <span>{tipAmount}</span>
        </div>
        <div className="amount__total">
          <p>Total / person</p>
          <span>{total}</span>
        </div>
      </div>
      <button className="amount__btn" onClick={handleReset}>
        Reset
      </button>
    </div>
  )
}
export default Amount
