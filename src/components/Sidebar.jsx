import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Sidebar = () => {
    const location = useLocation().pathname.split('/')[1].toUpperCase()
    console.log(location)
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#15294b',
            color: 'white',
            minHeight: '100vh',
        }}>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                columnGap: '30px',
                rowGap: '40px',
                marginTop: '20px',
            }}>
                <Link style={{
                    backgroundColor: location === '' ? 'white' : '',
                    color: location === '' ? '#15294b' : 'white',
                    width: '100%',
                    padding: '10px',
                }} className='nav_links' to='/'>HOME</Link>

                <Link style={{
                    backgroundColor: location === 'MODULE' ? 'white' : '',
                    color: location === 'MODULE' ? '#15294b' : 'white',
                    width: '100%',
                    padding: '10px',
                }} className='nav_links' to='/module'>MODULE</Link>

                <Link style={{
                    backgroundColor: location === 'INSTRUCTOR' ? 'white' : '',
                    color: location === 'INSTRUCTOR' ? '#15294b' : 'white',
                    width: '100%',
                    padding: '10px',
                }} className='nav_links' to='/instructor'>INSTRUCTOR</Link>
            </div>
        </div>
    )
}

export default Sidebar