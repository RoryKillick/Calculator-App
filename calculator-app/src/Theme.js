import React from 'react';

function Theme() {
    return (
        <div className='theme'>
            <p className='title'>Theme</p>
            <div>
                <div className='numbers'>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                </div>
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
        </div>
    )
}

export default Theme;