import React, { Component } from 'react';
import { Responsive } from 'semantic-ui-react';

export class ProfileGridLayout extends Component {
    render() {
        var desktop = (
            < div >
                <div className="profileGrid">
                    <h2 className="profileGrid-name">{this.props.data.fields.name}</h2>
                    <div className='profileGrid-underline' />
                    <div className="profileGrid-body">
                        <img alt='Profile' src={this.props.data.fields.profile.fields.file.url} className="profileGrid-pic"></img>
                        <h5 className="profileGrid-quote" dangerouslySetInnerHTML={{ __html: this.props.data.fields.quote }} />
                        <h5 className="profileGrid-quoted">-{this.props.data.fields.name}</h5>
                        <p className='profileGrid-bio' dangerouslySetInnerHTML={{ __html: this.props.data.fields.bio }} />
                    </div>
                </div>
            </div >
        )

        var mobile = (
            < div >
                <div className="profileGridM">
                    <h2 className="profileGrid-name">{this.props.data.fields.name}</h2>
                    <div className='profileGrid-underlineM' />
                    <div className="profileGrid-body">
                        <img alt='Profile' src={this.props.data.fields.profile.fields.file.url} className="profileGrid-picM"></img>
                        <h5 className="profileGrid-quoteM" dangerouslySetInnerHTML={{ __html: this.props.data.fields.quote }} />
                        <h5 className="profileGrid-quotedM">-{this.props.data.fields.name}</h5>
                        <p className='profileGrid-bioM' dangerouslySetInnerHTML={{ __html: this.props.data.fields.bio }} />
                    </div>
                </div>
            </div >
        )

        return (
            <div className='ourTeamWrapper'>
                <Responsive {...Responsive.onlyMobile}>
                    {mobile}
                </Responsive>
                <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                    {desktop}
                </Responsive>
            </div>
        )
    }
}

export default ProfileGridLayout
