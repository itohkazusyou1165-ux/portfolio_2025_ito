import React from 'react'

export default function Loading({isVisible}) {
  return (
    <div className={`loading-wrapper ${isVisible?"":"loaded"}`}>
        <div className='"loading-text'>
            <div className="spinner"></div>
            <p style={{fontFamily:"YuMincho", fontSize:30}}>Loading...</p>
        </div>
    </div>
  )
}
