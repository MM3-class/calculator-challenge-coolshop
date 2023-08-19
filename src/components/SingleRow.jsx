import React from 'react'
import { useRowContext } from '../context/operationContext';
import Button from "./Button";

const SingleRow = ({index }) => {
    const {rowsList, handleNumber, handleOperator, removeRow, disableRow } = useRowContext();

    return (
        <li>
            <select value={rowsList.sign} onChange={(e) => handleOperator(e, index)} >
                <option name="plus" value="+">+</option>
                <option name="minus" value="-">-</option>
            </select>
            <input name="number" type="number" value={rowsList.value} onChange={(e) => handleNumber(index, e.target.value)} disabled={rowsList[index].enabled ? false : true} />
            <Button onClick={() => removeRow(index)}>Delete</Button>
            <Button onClick={() => disableRow(index)}>{rowsList[index].enabled ? "Disable" : "Enable"}</Button>
        </li>
    )
}

export default SingleRow