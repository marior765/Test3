import React from 'react';
import Item from './Item';

const ListItem = props => {
    return(
        <div>
            {props.template.map(item => (
                <Item
                    id={item.id}
                    img={props.img}
                    key={item.id}
                    name={item.name}
                    surname={item.surname}
                    desc={item.desc}
                    />)).slice(props.position, props.position + 5)}
        </div>
    )
}

export default ListItem;