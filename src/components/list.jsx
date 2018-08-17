import React from 'react';
import ListItem from './listItem';

const List = props => {
    const { items } = props;

    return(
        <ul>
            {items.map(el => <ListItem key={el.id} item={el}/>)}
        </ul>
    );
};

export default List;