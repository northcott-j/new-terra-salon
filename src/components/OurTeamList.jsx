import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

export class OurTeamList extends Component {

    loadProfile = (profile, index) => {
        var url = '/our-team/' + profile;
        this.setState({ currentEmployee: parseInt(index) })
        this.props.history.push(url)
    }
    render() {
        const employeeList = () => {
            return (
                <button onClick={() => this.loadProfile(this.props.data.fields.name, this.props.data)} key={this.props.data.name} className="profile-icon">
                    <img alt='profilePics' src={this.props.data.fields.profile.fields.file.url} className="iconPic"></img>
                    <div className="iconName">{this.props.data.fields.name}</div>
                    <div className="iconTitle">{this.props.data.fields.title}</div>
                </button>
            )
        }

        return (
            <div>
                {employeeList()}
            </div>
        )
    }
}

export default withRouter(OurTeamList)
