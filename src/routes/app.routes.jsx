import {Routes, Route} from 'react-router-dom';

import { ConvertNumber } from '../pages/Desafio1';
import { GameOfLife } from '../pages/Desafio2';
import { CalculadoraConta } from '../pages/Desafio3';

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<ConvertNumber/>}/>
            <Route path="/2" element={<GameOfLife/>}/>
            <Route path="/3" element={<CalculadoraConta/>}/>
        </Routes>
    )
}