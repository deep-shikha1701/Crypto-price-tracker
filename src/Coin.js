import React from 'react'

function Coin({name,image, symbol,price,volume,priceChange,marketCap}) {
    return (
        <div className="container flex justify-center">
            <div className="flex flex-row justify-items-start h-14 items-center border-b-2 border-gray-800 w-10/12">
                <div className="flex items-center px-10 text-white">
                    <img className="h-10" src={image} alt="crypto"/>
                    <h1 className="text-xl text-left ml-12 w-72 font-poppins">{name}</h1>     
                    <p className="uppercase ">{symbol}</p>
                </div>
                <div className="text-white items-center flex text-center justify-between w-full">
                    <p className="w-30">INR {price}</p>
                    <p className="w-50" >INR {volume.toLocaleString()}</p>
                    { priceChange < 0 ? (   
                            <p className="text-red-600">{priceChange.toFixed(2)}%</p>
                        ) : (<p className="text-green-600">{priceChange.toFixed(2)}%</p>)
                    }
                    <p className="w-60">Mkt Cap: INR {marketCap.toLocaleString()}</p>
                </div>
            </div>
        </div>
    )
}

export default Coin
