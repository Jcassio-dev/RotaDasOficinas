import { useEffect, useState } from "react"
import { toast } from "react-toastify";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Nav } from "../../components/Nav";


import {Container} from './styles'

export function CalculadoraConta(){
    const [consumidores, setConsumidores] = useState([])
    const [foods, setFoods] = useState([]);

    const [inputConsumidor, setInputConsumidor] = useState('');

    const [nmrPratos, setNmrPratos] = useState(1);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [pratoConsumidores, setPratoConsumidores] = useState([]);

    const [taxaConsumidores, setTaxaConsumidores] = useState([]);

    const [result, setResult] = useState([]);

    function handleAddConsumidor(consumidor){
        consumidores.includes(consumidor)
        setConsumidores(prevState => [...prevState, consumidor]);
        setInputConsumidor('')
    }
    function handleRemoveConsumidor(consumidor){
        setConsumidores(prevState => prevState.filter(prevState => prevState !== consumidor))
    }


    function handlePratoConsumidores(consumidor){
        pratoConsumidores.includes(consumidor) 
        ? setPratoConsumidores(prevState => prevState.filter(prevState => prevState !== consumidor))
        : setPratoConsumidores(prevState => [...prevState, consumidor]);

    }

    function handleTaxaConsumidores(consumidor){
        taxaConsumidores.includes(consumidor) 
        ? setTaxaConsumidores(prevState => prevState.filter(prevState => prevState !== consumidor))
        : setTaxaConsumidores(prevState => [...prevState, consumidor]);

    }
    
    function handleAddPrato(nmrPratos, nome, price, consumidores){
        let preco = Number(price)
        preco = nmrPratos * preco
        const prato = {
            nmrPratos,
            nome,
            price: preco,
            consumidores
        }
        setFoods(prevState => [...prevState, prato]);
        setName('');
        setPrice('');
        setNmrPratos(1);
    }

    function handleRemovePrato(prato){
        setFoods(prevState => prevState.filter(prevState => prevState !== prato))
    }

    function calcularValorPorPrato(){
        setResult([])
        consumidores.map(consumidor => {
            let currentConsumidor = consumidor;
            let foodsConsumidor = [];
            let totalPagar = 0;
            foods.map(food => {
                if(food.consumidores.includes(currentConsumidor)){
                    foodsConsumidor.push(food.nome)
                    totalPagar = totalPagar + (food.price/food.consumidores.length);
                }
            })
            let taxa = 0.1 * totalPagar

            if(taxaConsumidores.includes(consumidor)){
                totalPagar = totalPagar + taxa
            }

            setResult(prevState => [...prevState, `${currentConsumidor} comeu ${foodsConsumidor} e tem que pagar R$${totalPagar.toFixed(2)}`])
        })
    }

    useEffect(() => {
        console.log(pratoConsumidores)
        console.log(consumidores)
        console.log(foods)
    }, [pratoConsumidores, consumidores, foods])

    return(
        <Container>
        <Nav title="Desafio 3" prevPage="/2" nextPage="/"/>
        <h1>Calculadora de contas</h1>
        <div className="input-wrapper">
            <Input type="text" 
            placeholder="Nome dos que consumiram" 
            value={inputConsumidor} 
            onChange={(e) => setInputConsumidor(e.target.value)}/>
            <Button onClick={() => handleAddConsumidor(inputConsumidor)}>+</Button>
        </div>
        
        {consumidores.length > 0 &&
        <>
        <h3>Consumidores:</h3>
        <ul>
            {consumidores.map(consumidor => 
            <li key={consumidor}>
                <button onClick={() => handleRemoveConsumidor(consumidor)} className="remove">
                    X
                </button>
            {consumidor}</li>
            )}
        </ul>
        </>
        }
        <div className="input-wrapper col-4">

            <Input
            type="number"
            placeholder="número"
            value={nmrPratos}
            onChange={e => setNmrPratos(e.target.value)}
            min={1}
            />

            <Input type="text" 
            placeholder="prato" 
            value={name} 
            onChange={(e) => setName(e.target.value)}/>

            <Input type="number" 
            placeholder="preço" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)}/>

            <Button onClick={() => handleAddPrato(nmrPratos, name, price, pratoConsumidores)}>+</Button>
        </div>

        {consumidores.length > 0 &&
        <>
        <h3>Consumiu o prato:</h3>
        <ul>
            {consumidores && consumidores.map(consumidor => 
            <li key={consumidor}>
                <input 
                type="checkbox" 
                onClick={() => handlePratoConsumidores(consumidor)}
                />
                {consumidor}
                </li>)}
        </ul>
        </>
        }

        {foods.length > 0 && 
        <>
        <h3>Pratos pedidos:</h3>
        <ul className="foods">
            {foods && foods.map(food => 
            <li key={String(food.nome)}>
                <button onClick={() => handleRemovePrato(food)} className="remove">
                    X
                </button>
                {food.nmrPratos}x {food.nome} R$ {food.price} | {food.consumidores.map(consumidor => consumidor + " ")} 
            </li>
            )}
        </ul>
        </>
        }

        {foods.length > 0 &&
        <>
        <h3>Vai pagar a taxa:</h3>
        <ul>
            {consumidores && consumidores.map(consumidor => 
            <li key={consumidor}>
                <input 
                type="checkbox" 
                onClick={() => handleTaxaConsumidores(consumidor)}/>
                {consumidor}
                </li>)}
        </ul>
        </>
        }

        <Button onClick={calcularValorPorPrato}>Calcular</Button>
        {result && result.map(result => 
        <h3 key={result}>{result}</h3>
        )}
        </Container>
    )
}