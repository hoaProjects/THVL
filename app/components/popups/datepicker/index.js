import React from 'react';
import DayPicker from "react-day-picker";
import '../../../styles/datePicker.scss';

function sundays(day) {
  return day.getDay() === 0;
}

function today() {
  return new Date();
}

export default class PopupDatePicker extends React.Component {

    state = {
        selectedDay: today(),
    }
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
    }
    popupHide=()=>{
        var element = document.getElementById("datePickerPopup");
        element.classList.remove("m-fadeIn");
    }
    handleDayClick(day, { disabled, selected }) {
        if (disabled) {
          return;
        }
        this.setState({
          selectedDay: selected ? null : day
        })
    }
    render() {
        return (
            <section className="Popup-Account" id="datePickerPopup">
                <div className="bg_overlay" onClick={this.popupHide.bind(this)}></div>
                <DayPicker
                    enableOutsideDays
                    initialMonth={ new Date(2017, 1) }
                    selectedDays={ this.state.selectedDay }
                    onDayClick={ this.handleDayClick }
                />
            </section>
        );
    }
}
