import React from 'react'
import { withRouter } from 'react-router-dom';
import Page from './Page';
import ProfileGridLayout from '../ProfileGridLayout';

export class ProfileGrid extends Page {
    CONTENTFUL_ID = '3TUOPNwXzsUDOY45XnYE0g';
    PAGE_NAME = 'our-team';

    toOtherBio = (profile, index) => {
        var url = '/our-team/' + profile;
        this.setState({ currentEmployee: index })
        this.props.history.push(url)
    }

    childRender() {
        var isPaused = true;
        var employees = [];
        var currentEmployee = 0;
        if (this.state.data) {
            var employee = this.props.match.params.employee;
            var item = null;
            for (item in this.state.data.fields.subItems) {
                employees.push(this.state.data.fields.subItems[item])
            }
        }

        const loadProfile = () => {
            var item = null;
            for (item in employees) {
                if (employees[item].fields.name === employee) {
                    isPaused = false;
                    return employees[item];
                }
                currentEmployee = currentEmployee + 1;
            }
        }

        const loadBio = () => {
            var profile = loadProfile();
            if (!isPaused) {
                return (
                    <ProfileGridLayout key={profile.fields.name} data={profile} employees={employees} currentEmployee={currentEmployee} />
                )
            }
        }

        const nextBio = () => {
            if (employees[parseInt(currentEmployee) + 1]) {
                var employeeName = employees[currentEmployee + 1].fields.name
                return <h5 className='nextBio' onClick={() => this.toOtherBio(employeeName)}>{employeeName} &#8594;</h5>
            }
        }

        const prevBio = () => {
            if (employees[parseInt(currentEmployee) - 1]) {
                var employeeName = employees[currentEmployee - 1].fields.name
                return <h5 className='prevBio' onClick={() => this.toOtherBio(employeeName, currentEmployee - 1)}>&#8592; {employeeName}</h5>
            }
        }

        return (
            <div className='profilePages'>
                {loadBio()}
                <div className="bioNavigators">
                    {nextBio()}
                    {prevBio()}
                </div>
            </div>
        )
    }
}

export default withRouter(ProfileGrid)
