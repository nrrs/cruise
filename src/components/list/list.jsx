import React from 'react';
import ListItemContainer from './listItemContainer';

const List = props => {
    const 
        { name, items } = props,
        className = `${name} list`;

    return(
        <ul className={className}>
            {items.map(el => <ListItemContainer key={el.id} item={el}/>)}
        </ul>
    );
};

export default List;