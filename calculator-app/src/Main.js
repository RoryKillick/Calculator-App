import React from 'react'

function Main() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='key'>7</div>
                <div className='key'>8</div>
                <div className='key'>9</div>
                <div className='key'>DEL</div>
            </div>
            <div className='row'>
                <div className='key'>4</div>
                <div className='key'>5</div>
                <div className='key'>6</div>
                <div className='key'>+</div>
            </div>
            <div className='row'>
                <div className='key'>1</div>
                <div className='key'>2</div>
                <div className='key'>3</div>
                <div className='key'>-</div>
            </div>
            <div className='row'>
                <div className='key'>.</div>
                <div className='key'>0</div>
                <div className='key'>/</div>
                <div className='key'>x</div>
            </div>
            <div className='row'>
                <div className='key'>RESET</div>
                <div className='key'>=</div>
            </div>
        </div>
    )
}

export default Main;