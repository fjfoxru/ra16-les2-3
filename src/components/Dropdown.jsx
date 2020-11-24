import React from 'react';
import DropdownList from '../components/DropdownList';
import DropdownButton from '../components/DropdownButton';

export default class Dropdown extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dropdownOpen: false,
            selectedValue: this.props.dropdownSelected,
        }
    }
    toggleButton = () => {
        this.setState(state => {
            return {
                dropdownOpen: !state.dropdownOpen,
            }
        });
    }

    onSelectValue = (e) => {
        this.setState(state => {
            return {
                selectedValue: e,
            }
        });
    }

    render() {
        return (
            <div className="dropdown">
                {this.state.dropdownOpen && <DropdownList list={this.props.list} selected={this.state.selectedValue} onSelect={this.onSelectValue}/>}
                <DropdownButton onDropdownToggle={this.toggleButton}/>
            </div>
        )
    }
}