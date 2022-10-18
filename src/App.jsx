import React, { useState } from "react";
import './App.css';
import { MinusCircle, PlusCircle, Bank } from "phosphor-react";

export default function Banco() {
  const [saldo, setSaldo] = useState("0.00");

  function handleAdd() {
    const valor = (document.getElementById("deposito").value).replace(',', '.');
    if (valor) {
      const saldoAtual = parseFloat(saldo.replace(',', '.')) + parseFloat(valor);
      setSaldo(((saldoAtual.toFixed(2)).toString()).replace('.', ','));
      document.getElementById("error").style.display = "none";
      document.getElementById("saldoinsu").style.display = "none";


    } else {
      document.getElementById("error").style.display = "block";
    }


  }

  function handleMinus() {
    const valor = (document.getElementById("saque").value).replace(',', '.');
    if (valor) {
      const saldoAtual = parseFloat(saldo.replace(',', '.')) - parseFloat(valor);
      if (saldoAtual > 0) {
        setSaldo(((saldoAtual.toFixed(2)).toString()).replace('.', ','));
        document.getElementById("error").style.display = "none";
        document.getElementById("saldoinsu").style.display = "none";
      } else {
        document.getElementById("saldoinsu").style.display = "block";
      }

    } else {
      document.getElementById("error").style.display = "block";
    }

  }

  return (
    <div>
      <div className="box">
        <Bank size={90} />
        <p className="title">MyBank</p>
        <h3 className="saldo">Saldo:  <span id="span">R${saldo} </span> </h3>

      </div>


      <div className="input-group">
        <input type="number" id="deposito" required className="input" placeholder="Valor do Depósito" />
        <PlusCircle size={27} className="btn" onClick={handleAdd} />
      </div>
      <div className="input-group">
        <input type="number" id="saque" required className="input" placeholder="Valor do Saque" />
        <MinusCircle size={27} className="btn" onClick={handleMinus} />
      </div>

      <div id="error">
        Digite um valor para realizar <br /> uma Transação Válida!
      </div>

      <div id="saldoinsu">
        Você não tem saldo o suficiente para realizar o saque! <br /> Você pode retirar até {saldo} para uma Transação Válida!
      </div>

    </div>
  )
}