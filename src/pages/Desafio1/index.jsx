import { useState } from "react";
import { toast } from 'react-toastify'

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Nav } from "../../components/Nav";

import {Container} from './styles'

export function ConvertNumber() {
  const [arabNumber, setArabNumber] = useState();
  const [romNumber, setRomNumber] = useState();
  const [resultado, setResultado] = useState();

  function toRoman(number){
    if(number >= 4000 || number < 1 || !arabNumber){
      return alert("Digite um número entre 1 e 3999");
    }
    const M = ["", 'M', 'MM', 'MMM'];
    const C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    const m = M[parseInt(number/1000)];
    const c = C[parseInt((number % 1000)/100)];
    const x = X[parseInt((number % 100)/10)];
    const i = I[parseInt((number%10))];


    const response = m + c + x + i
    setResultado(response)
    setArabNumber("")
  }

  function toArabic(number){
    const romans = {
      M: 1000,
      D: 500,
      C: 100,
      X: 10,
      I: 1
    };
    
    const NumberUppercase = number.toUpperCase();
    const arrayRomans = [...NumberUppercase];

    const result = arrayRomans.reduce((previousValue, currentValue, currentIndex, array) => 
    romans[array[currentIndex + 1]] > romans[currentValue]
    ? previousValue - romans[currentValue]
    : previousValue + romans[currentValue],
    0
    );
    isNaN(result) ? toast.warn('Digite um número válido') : setResultado(result)
    setRomNumber("")

  }

  return (
    <Container>
      <Nav title="Desafio 1" prevPage="/3" nextPage="/2"/>
      <h1>Arábico para Romano</h1>
      <Input type="number" placeholder="Exemplo: 10" value={arabNumber} onChange={e => setArabNumber(e.target.value)}/>
      <Button onClick={() => toRoman(arabNumber)}>Converter</Button>
      <h1>Romano para Arábico</h1>
      <Input type="text" placeholder="Exemplo: IX" value={romNumber} onChange={e => setRomNumber(e.target.value)}/>
      <Button onClick={() => toArabic(romNumber)}>Converter</Button>

      <h1 className="resultado">O resultado é <br/> <span>{resultado}</span></h1>
    </Container>
  )
}

