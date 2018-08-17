import React, { PureComponent} from 'react';

class ListItem extends PureComponent {
    render() {
        const { item } = this.props;
        return (
            <li id={item.id}>
                Title: <a href={`https://www.reddit.com/${item.permalink}`} target="_blank">{item.title}</a><br/>
                Author: {item.author}<br/>
                Score: {item.score}
            </li>
        );
    }
}

export default ListItem;