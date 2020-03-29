import React, { Component } from 'react'

export class ProfileGridLayout extends Component {
    render() {
        return (
            < div >
                <div className="profileGrid">
                    <h2 className="profileGrid-name">{this.props.data.fields.name}</h2>
                    <div className="profileGrid-body">
                        <img alt='Profile' src={this.props.data.fields.profile.fields.file.url} className="profileGrid-pic"></img>
                        <h5 className="profileGrid-quote">"{this.props.data.fields.quote}"</h5>
                        <h5 className="profileGrid-quoted">-{this.props.data.fields.name}</h5>
                        <p className="profileGrid-bio">{this.props.data.fields.bio}</p>
                    </div>
                </div>
            </div >
        )
    }
}

export default ProfileGridLayout
