import React from 'react';

export default class DropdownButton extends React.Component {
    constructor(props) {
        super(props)
    }
    handleClick = (e) => {
        this.props.onDropdownToggle(e.target.innerText);
    }

    render() {
        return (
            <button onClick={this.handleClick}>Открыть список</button>
        )
    }
}