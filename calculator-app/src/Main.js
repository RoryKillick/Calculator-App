import React from 'react'

function Main(updateCalc) {
    return (
        <div className='container'>
                <button className='key' key='7' onClick={() => updateCalc('7')}>7</button>
                <button className='key' key='8' onClick={() => updateCalc('8')}>8</button>
                <button className='key' key='9' onClick={() => updateCalc('9')}>9</button>
                <button className='keyDel' /* onClick={() => updateCalc('')} */>DEL</button>
                <button className='key'key='4' onClick={() => updateCalc('4')}>4</button>
                <button className='key'key='5' onClick={() => updateCalc('5')}>5</button>
                <button className='key'key='6' onClick={() => updateCalc('6')}>6</button>
                <button className='key'key='+' onClick={() => updateCalc('+')}>+</button>
                <button className='key'key='1' onClick={() => updateCalc('1')}>1</button>
                <button className='key'key='2' onClick={() => updateCalc('2')}>2</button>
                <button className='key'key='3' onClick={() => updateCalc('3')}>3</button>
                <button className='key'key='-' onClick={() => updateCalc('-')}>-</button>
                <button className='key'key='.' onClick={() => updateCalc('.')}>.</button>
                <button className='key'key='0' onClick={() => updateCalc('0')}>0</button>
                <button className='key'key='/' onClick={() => updateCalc('/')}>/</button>
                <button className='key'key='*' onClick={() => updateCalc('*')}>x</button>
                <button className='keyReset'key='' onClick={() => updateCalc('')}>RESET</button>
                <button className='keyEquals'/* onClick={() => updateCalc('7')} */>=</button>
        </div>
    )
}

export default Main;