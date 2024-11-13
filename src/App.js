import React, { useEffect, useState } from 'react'

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}>
      <GrowingButton />
    </div>
  )
}

const GrowingButton = () => {
  // KODUNUZ BURAYA GELECEK
  const [size, setSize] = useState(50)
  const [isGrowing, setIsGrowing] = useState(true)

  const min_size = 50

  const max_size = 200

  useEffect(() => {
    const interval = setInterval(() => {
      setSize((prev) => {
        if (isGrowing) {
          if (prev >= max_size) {
            return max_size
          }
          return prev + 2
        } else {
          if (prev <= min_size) {
            return min_size
          }
          return prev - 2
        }
      })
    }, 20)
    return () => clearInterval(interval)
  }, [isGrowing])

  const handleClick = () => {
    setIsGrowing(!isGrowing)
  }

  return (
    <button
      onClick={handleClick}
      style={{
        width: size,
        height: size,
        backgroundColor: '#e0e0e0',
        border: '2px solid #ccc',
        borderRadius: '0',
        cursor: 'pointer',
        transition: '0.1s',
      }}
    >
      {isGrowing ? 'Küçült' : 'Büyült'}
    </button>
  )
}

export default App
