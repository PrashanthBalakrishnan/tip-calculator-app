import clsx from 'clsx'

interface TipItemsProps {
  percentage: number
  setTip: React.Dispatch<React.SetStateAction<number>>
  label: string
  tip: number
}

const TipItems: React.FC<TipItemsProps> = ({
  percentage,
  setTip,
  label,
  tip,
}) => {
  return (
    <button
      className={clsx('tip__btn', tip === percentage ? 'active__btn' : null)}
      onClick={() => setTip(percentage)}
    >
      <span>{label}</span>
    </button>
  )
}
export default TipItems
