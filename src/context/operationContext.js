import { createContext, useContext, useState } from "react";

const rowContext = createContext();

export const RowProvider = ({ children }) => {

    const [rowsList, setRowsList] = useState([
        { operator: '+', value: "", enabled: true }
    ]);

    /* TRACK INPUT NUMBER CHANGING */
    const handleNumber = (index, value) => {
        const newRows = [...rowsList];
        newRows[index].value = parseFloat(value);
        setRowsList(newRows);
    };

    /* TRACK THE OPERATOR '-' or '+' */
    const handleOperator = (e, index) => {
        const newRows = [...rowsList];
        newRows[index].operator = e.target.value;
        setRowsList(newRows);
    }

    /* ADD NEW ROW (new object) */
    const addRow = () => {
        setRowsList([...rowsList, { operator: '+', value: "", enabled: true }]);
    };

    /* REMOVE A SPECIFIC OBJECT FROM THE ROWS FIELD */
    const removeRow = (index) => {
        const newRows = [...rowsList];
        newRows.splice(index, 1);
        setRowsList(newRows);
    };

    /* TOGGLE THE DISABLE & ENABLE btn */
    const disableRow = (index) => {
        const newRows = [...rowsList];
        newRows[index].enabled = !newRows[index].enabled;
        setRowsList(newRows);

        console.log(rowsList[index].enabled)
    };

    /* CALCULATE THE VALUES WITH CONDITION + OR -  */
    const calcValue = () => {
        const enabledRows = rowsList.filter((row) => row.enabled);
        const sum = enabledRows.reduce((total, row) => {
            return row.operator === '+' ? total + row.value : total - row.value;
        }, 0);
        
        return sum;
    };

    const value = {
        rowsList,
        handleNumber,
        handleOperator,
        addRow,
        removeRow,
        disableRow,
        calcValue,
    }

    return (
        <rowContext.Provider value={value}>
            {children}
        </rowContext.Provider>
    )
}

export const useRowContext = () => {
    const context = useContext(rowContext);
    if (context === undefined) {
        throw new Error("must be used within operation");
    } else {
        return context;
    }
}