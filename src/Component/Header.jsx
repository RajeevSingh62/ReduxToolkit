import React from 'react'

const Header = () => {
  const productHandler = () => {
    console.log('Products Clicked')
  }
  return (
    <>
      <div style={{ height: "50px" }}>
        <ul style={{ display: 'flex', alignItems: "center", content: "space-around" }}>
          <li>home</li>
          <li>cart</li>
          <li>

            <button style={{ width: "70px", height: "30px", background: "blue", borderRadius: "10px" }} onClick={productHandler}>Products</button>

          </li>
        </ul>
      </div>
    </>
  )
}

export default Header