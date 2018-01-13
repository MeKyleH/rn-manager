import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardSection } from './common';
import { employeeSave, employeeUpdate } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  // iterates over each prop of an employee (name, phone, shift) and
  // updates the form reducer with the values
  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeSave, employeeUpdate })(EmployeeEdit);
