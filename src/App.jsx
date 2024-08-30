import Header from './components/Header'
import { useState, useEffect } from 'react'
import Resultado from './components/Resultado'


function App() {
  //Hooks useState - Manipuland o estado da variavel
  const [peso,setPeso]=useState(0)
  const [altura, setAltura]=useState(0)
  const [resultado, setResultado]=useState(0)
  const[mostrarresulado, setMostrarResultado]=useState(false)


  //criando a funcao calcularImc
  const calcularImc=()=>{
    const imc = peso/(altura*altura)
    return setResultado(imc.toFixed(2))
  }

  useEffect(() => {
    resultado > 0 ? setMostrarResultado(true) : setMostrarResultado(false);
  }, [resultado]);
  

  return (
    <>
    <div className='container'>
      <div className='box'>
      <Header/>


      <form>
        <div>
          <label htmlFor='altura'>Altura
          <span className='span'>(Ex:1.80)</span>
          <input type='number' 
                id='altura' 
                placeholder='Digite sua altura'
                onBlur={({target}) => parseInt(setAltura(target.value))}
          />
          </label>
        </div>

        <div>
          <label htmlFor='altura'>Peso
          <span className='span'>(Ex:80)</span>
          <input type='number' 
                id='peso' 
                placeholder='Digite seu peso'
                onBlur={({target}) => parseInt(setPeso(target.value))}
          />
          </label>
        </div>
        <button type='submit' onClick={calcularImc}>Calcular</button>
      </form>
    </div>
    {mostrarresulado && (
      <Resultado resultado={resultado}/>
    )}
    </div>
    </>
  )
}

export default App
