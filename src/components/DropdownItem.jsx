import React from 'react';

export default class DropdownItem extends React.Component {
    constructor(props) {
        super(props)
    }
    clickToSelect = (e) => {
        this.props.onSelect(e.target.innerText);
    }

    render() {
        return (
            <li onClick={this.clickToSelect}>{this.props.item}</li>
        )
    }
}