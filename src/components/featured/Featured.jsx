import React from 'react';
import './Featured.css'

const Featured = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/region/square250/49646.webp?k=b7f38878b9164ee38e0b99c4d4646dbea76b7bf4add8464b1aa75e4c9d0efc6e&o=" alt="" className='featuredImg' />
            <div className="featuredTitles">
                <h1>Dublin</h1>
                <h2>542 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/square250/971346.webp?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=" alt="" className='featuredImg' />
            <div className="featuredTitles">
                <h1>Austin</h1>
                <h2>533 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/region/square250/68606.webp?k=4b43b9128b79beaab4ca2e8c038ddf5709b0b90608afbca222cfbe08fabda7d2&o=" alt="" className='featuredImg' />
            <div className="featuredTitles">
                <h1>Reno</h1>
                <h2>633 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured