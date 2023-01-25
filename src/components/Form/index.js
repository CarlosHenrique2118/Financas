import React, {useState } from 'react';
import Grid from '../Grid';
import * as C from "./styles"

const Form = ({handleAdd, setTransactionsList, transactionsList }) => {
    const[desc, setDesc] = useState("");
    const[amount, setAmount] = useState("");
    const[expense, setExpense] = useState();

    const generateID = () => Math.round(Math.random() * 1000);

    const handleSave = () => {
        if (!desc || !amount){
            alert("Informe a descrição e o valor!");
            return;
        }else if (amount < 1) {
            alert("O valor tem que ser positivo!");
            return;
        }
    

    const transaction = {
        id: generateID(),
        desc: desc,
        amount: amount,
        expense: expense,
    };

    handleAdd(transaction);

    setDesc("");
    setAmount("");
};    

    return ( 
        <>
            <C.Container>
            <C.InputContent>
                <C.Label>descrição</C.Label>
                <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
            </C.InputContent>
            <C.InputContent>
                <C.Label>Valor</C.Label>
                <C.Input value={amount} type="number" onChange={(e) => setAmount(e.target.value)} />
            </C.InputContent>
            <C.RadioGroup>
                <C.Input type="radio" id='rIncome' defaultChecked name='group1' onClick={()=>setExpense(false)}/>
                <C.Label htmlFor='rIncome'>Entrada</C.Label>
                <C.Input type="radio" id='rExpenses' defaultChecked name='group1' onClick={()=>setExpense(true)}/>
                <C.Label htmlFor='rExpenses'>Saidas</C.Label>
            </C.RadioGroup>
            <C.Button onClick={handleSave}>Adicionar</C.Button>
        </C.Container>
        <Grid itens={transactionsList} setItens={setTransactionsList} />
        </>
        
        
        
        
    );
}

export default Form;