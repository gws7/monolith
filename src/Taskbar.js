import React from 'react';

export default function Taskbar() {
    return(
        <div className='taskbar'>
            <div className="taskbar-items">
                <div className="taskbar-section-left">
                    <button className="taskbar-item">History</button>
                    <button className="taskbar-item">Gallery</button>
                </div>

                <div className='taskbar-icon'>
                    <img src='/images/monolith_logo.png' alt='Monolith Icon'
                className='taskbar-icon-img' />
                </div>

                <div className="taskbar-section-right">
                    <button className="taskbar-item">Ranks</button>
                    <button className="taskbar-item">Contact</button>
                </div>
            </div>
        </div>
    )
};