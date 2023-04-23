import React, { useState } from 'react'
import Python from './Python'
import Assignment from './Assignment'
import Quiz from './Quiz'

const Module = () => {
  const [screen, setScreen] = useState(0)
  return (
    <div style={{
      width: '100%',
      display: 'flex',
    }}>
      {/* sidebar2 */}
      <div style={{
        width: '20%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#e0e6f2',
        color: '#15294b',
        minHeight: '100vh',
      }}
      >
        <h4 onClick={() => setScreen(0)} style={{
          backgroundColor: screen === 0 ? '#cbd3e1' : '',
          padding: '20px',
          cursor: 'pointer',
        }}>Python</h4>
        <h4 onClick={() => setScreen(1)} style={{
          backgroundColor: screen === 1 ? '#cbd3e1' : '',
          padding: '20px',
          cursor: 'pointer',
        }}>Quiz-1 Data Types</h4>
        <h4 onClick={() => setScreen(2)} style={{
          backgroundColor: screen === 2 ? '#cbd3e1' : '',
          padding: '20px',
          cursor: 'pointer',
        }}>Assignment Operator loops</h4>
      </div>

      <div style={{ width: '80%', height: '100vh' }}>

        {/* screen 0 */}
        {screen === 0 && (
          <div>
            <Python />
          </div>
        )}

        {/* screen 1 */}
        {screen === 1 && (
          <div>
            <Quiz></Quiz>
          </div>
        )}

        {/* screen 2 */}
        {screen === 2 && (
          <div>
            <Assignment></Assignment>
          </div>
        )}
      </div>
    </div >
  )
}

export default Module