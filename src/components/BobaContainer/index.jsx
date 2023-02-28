import React from 'react';
import bobalist from './bobalist.jsx'

const BobaContainer = () =>{
    return (
        <div>
            <div>
                {bobalist.map((boba) => (<div key={boba.name}>
                    <div>{boba.name}</div>
                    <div>{boba.price}</div>
                    <div>{boba.description}</div>
                </div>))}
            </div>
        </div>
    )
}

export default BobaContainer
