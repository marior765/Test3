import React from 'react';

const List = props => {
    return (
        <div className='item'>
            <img src={props.img} alt='avatar' />
            <p>{props.name}{'  '}{props.surname}</p>
            <p>{props.desc}</p>
            <span>{props.id}</span>
        </div>
    )
}

export default List;