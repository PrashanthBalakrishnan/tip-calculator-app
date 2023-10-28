interface TipItemsProps {
  percentage: number
  setTip: React.Dispatch<React.SetStateAction<number>>
}

const TipItems: React.FC<TipItemsProps> = ({ percentage, setTip }) => {
  return (
    <button onClick={() => setTip(percentage)}>
      <span>{percentage}%</span>
    </button>
  )
}
export default TipItems
