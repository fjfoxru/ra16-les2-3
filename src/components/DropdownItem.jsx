import React from 'react';

export default class DropdownItem extends React.Component {
    clickToSelect = (e) => {
        return () => { this.props.onSelect(e); }
    }
    render() {
        return (
            <li onClick={this.clickToSelect(this.props.item)}>{this.props.item}</li>
        )
    }
}