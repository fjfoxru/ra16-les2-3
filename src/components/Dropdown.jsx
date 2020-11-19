import React from 'react';
import DropdownList from '../components/DropdownList';
import DropdownButton from '../components/DropdownButton';

export default class Dropdown extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dropdownOpen: false,
        }
    }
    toggleButton = () => {
        this.setState(state => {
            return {
                dropdownOpen: !state.dropdownOpen,
            }
        });
    }

    render() {
        return (
            <div className="dropdown">
                {this.state.dropdownOpen && <DropdownList list={this.props.list}/>}
                <DropdownButton onDropdownToggle={this.toggleButton}/>
            </div>
        )
    }
}