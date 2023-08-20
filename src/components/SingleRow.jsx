import React from 'react'
import { useRowContext } from '../context/operationContext';
import Button from "./Button";

const SingleRow = ({ myKey, row }) => {
    const { handleNumber, handleOperator, removeRow, disableRow } = useRowContext();

    return (
        <li>
            <select value={row.operator} onChange={(e) => handleOperator(e, myKey)} >
                <option name="plus" value="+">+</option>
                <option name="minus" value="-">-</option>
            </select>
            <input name="number" type="text" value={row.value || ""} onChange={(e) => handleNumber(myKey, e.target.value)} disabled={row.enabled ? false : true} />
            <Button onClick={() => removeRow(myKey)}>Delete</Button>
            <Button onClick={() => disableRow(myKey)}>{row.enabled ? "Disable" : "Enable"}</Button>
        </li>
    )
}

export default SingleRow