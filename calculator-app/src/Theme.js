import React from 'react';

function Theme() {
    return (
        <div className='theme'>
            <p>Theme</p>
            <div className='theme-toggle'>
                <label className='custom-radio-button'>
                    <input id='1' name='toggle-state' type='radio' defaultChecked/>
                    <span className='checkmark'></span>
                </label>
                <label className='custom-radio-button'>
                    <input id='2' name='toggle-state' type='radio'/>
                    <span className='checkmark'></span>
                </label>
                <label className='custom-radio-button'>
                    <input id='3' name='toggle-state' type='radio'/>
                    <span className='checkmark'></span>
                </label>
            </div>
        </div>
    )
}

export default Theme;