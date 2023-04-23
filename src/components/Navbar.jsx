import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div className='navbar__main'>
                <h1 style={{
                    color: 'blue',
                }}>Edyoda</h1>

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '20%',
                }}>
                    <p>Hi Test Learner</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar