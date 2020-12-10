import React, { useState } from 'react';

function List (props) {
    const FruitItems = props.fruits.map((eachFruit, index) => {
        return <li key={index}>{eachFruit}</li>
    })
    return (
        <div>
            <ul>
                { FruitItems }
            </ul>
        </div>
    )
}

export default List;