import { useRowContext } from '../context/operationContext';
import SingleRow from './SingleRow';
const RowsList = () => {
  const { rowsList } = useRowContext();
  return (
    <div>
      <ul>
        {rowsList.map((row, index) => (
          <SingleRow key={index} index={index} />
        ))}
      </ul>
    </div>
  )
}

export default RowsList