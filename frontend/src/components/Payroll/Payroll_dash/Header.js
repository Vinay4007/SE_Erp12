import React from 'react'

function Header({ setIsAdding }) {
    return (
        <header>
            <div style={{ marginTop: '18px', marginBottom: '18px', width: '200px', borderTopRightRadius: '100px'}}>
            <div style={{color:"black"}}><h2>Faculty List</h2></div>
                <button onClick={() => setIsAdding(true)} className='round-button'>Add Faculty</button>
            </div>
        </header>
    )
}

export default Header