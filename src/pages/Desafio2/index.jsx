import { useState, useEffect, useRef } from "react";
import { Container, Cell } from "./styles";

import { Nav } from "../../components/Nav";
import { Button } from "../../components/Button";

export function GameOfLife() {
    const cols = 10;
    const rows = 10;

    const positions = [
        [0, 1],
        [0, -1],
        [1, -1],
        [-1, 1],
        [1, 1],
        [-1, -1],
        [1, 0],
        [-1, 0],
      ]

    const [grid, setGrid] = useState();
    const [start, setStart] = useState(false);
    const startRef = useRef(start)
    startRef.current = start
    const [geracao, setGeracao] = useState(0)

    const randomGrid = () =>{
        const grid = [];
        setGeracao(0)

        for(let i=0; i < rows; i++){
            const row = []
            for(let j = 0; j < cols; j++){
                row.push(Math.floor(Math.random() * 2))
            }

            grid.push(row)
        }
        return grid;
    }

    const runSimulation = () => {
        if(!startRef.current){
            return
        }
        setGeracao(prevState => prevState + 1)
        setGrid(g => {
            const next = g.map((row, i) => {
                return row.map((cell, j) => {
                    let sum = 0;
                    positions.forEach(position => {
                        const x = i + position[0];
                        const y = j + position[1];
                        if(x >= 0 && x < rows && y>=0 && y < cols){
                            sum += g[x][y]
                        }
                    })
                    if(sum < 2 || sum > 3){
                        return 0
                    }
                    if(sum ===3){
                        return 1
                    }
                    return g[i][j];
                })
            })
            return next
        })
    }

    useEffect(() => {
        setGrid(randomGrid())
    }, [])

  return (
    <Container>
    <Nav title="Desafio 2" prevPage="/" nextPage="/3"/>
    <h2>Geração atual <br/> <span>{geracao}</span></h2>
    <div className="controls">
        <Button onClick={() => {
        setStart(!start)
        if (!start) {
            startRef.current = true
        }
            setInterval(() => {
                runSimulation(grid)
            }, 1000)
        }}>
            {start ? "Parar" : 'Rodar'}
        </Button>

        <Button onClick={() => setGrid(randomGrid)}>Restart</Button>
    </div>
    <div className="game">
    { grid &&
        grid.map((rows, i) => 
            rows.map((col, k) => (         
            <Cell key={k} className="ceil" color={grid[i][k] ? '#00BFA6' : ''}/>
            ))
        )
    }
    </div>
    </Container>
  )
}

