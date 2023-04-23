import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Top = () => {
    const [show, setShow] = useState(false)
    const location = useLocation()
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#15294b',
            paddingLeft: '20px',
            color: 'white',
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center',
                columnGap: '30px',
            }}>
                <h2>DS031221</h2>

                <div onClick={() => {
                    setShow(!show)
                }}>
                    {location.pathname === '/' && (
                        !show ? <svg style={{
                            height: '20px',
                            cursor: 'pointer'
                        }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg> : <svg style={{
                            height: '20px',
                            cursor: 'pointer'
                        }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                        </svg>

                    )}
                </div>

                <h2>Data Scientist Program</h2>
            </div>

            {location.pathname === '/' && show && (
                <div>
                    <h3>Select Program</h3>

                    <div style={{
                        display: 'flex',
                        columnGap: '30px',
                    }}>
                        <h3 style={{
                            padding: '5px',
                        }}>ECRD</h3>
                        <h3 style={{
                            padding: '5px',
                        }}>FSR222222</h3>
                        <h3 style={{
                            padding: '5px',
                        }}>DS261121</h3>
                        <h3 style={{
                            color: 'black',
                            backgroundColor: 'white',
                            padding: '5px',
                            borderRadius: '10px',
                        }}>DS031221</h3>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Top