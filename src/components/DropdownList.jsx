import React from 'react';
import DropdownItem from '../components/DropdownItem';

export default class DropdownList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedItem: '',
        }
    }

    onClickSelect = (e) => {
        this.setState(state => {
            return {
                selectedItem: e
            }
        })
    }

    render() {
        return (
            <div className="dropdown__list">
                {this.props.list.map(item => <DropdownItem item={item} onSelect={this.onClickSelect} />)}
            </div>
        )
    }
}