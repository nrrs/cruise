import React from 'react';
import ListItemContainer from './listItemContainer';

const List = props => {
    const { items } = props;
    
    return(
        <div>
            <ul>
                {items.map(el => <ListItemContainer key={el.id} item={el}/>)}
            </ul>
        </div>
    );
};

export default List;