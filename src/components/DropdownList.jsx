import React from 'react';
import DropdownItem from '../components/DropdownItem';

export default class DropdownList extends React.Component {
    constructor(props) {
        super(props)
    }

    onClickSelect = (e) => {
        this.props.onSelect(e);
    }

    render() {
        return (
            <div className="dropdown__list">
                <div>Выбрано: {this.props.selected}</div>
                {this.props.list.map(item => <DropdownItem item={item} onSelect={this.onClickSelect} />)}
            </div>
        )
    }
}