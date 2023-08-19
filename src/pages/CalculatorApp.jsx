import Button from "../components/Button";
import RowsList from "../components/RowsList";
import { useRowContext } from "../context/operationContext";

const CalculatorApp = () => {
  const { addRow, calcValue } = useRowContext();
  return (
    <main>
      {/* ADD SINGLE ROW */}
      <section>
        <Button onClick={addRow}>Add row</Button>
      </section>
      {/* THE GENERATOR ROWS FIELD */}
      <section>
        <RowsList />
      </section>
      {/* THE FINAL RESULT */}
      <section className="total">
        <p>Result: {calcValue()}</p>
      </section>
    </main>
  )
}

export default CalculatorApp