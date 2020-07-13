import React, { Component } from 'react'

export class Position extends Component {
    render() {

        const description = () => {
            return this.props.data.description.content.map((line) =>
                <div className='positionDescr' key={line.content['0'].value}>{line.content['0'].value}</div>
            );
        }

        const offers = () => {
            return this.props.data.offers["TERRA OFFERS:"].map((offer) =>
                <li className='positionOffer' key={offer}>{offer}</li>
            );
        }
        return (
            <div>
                <h1 className='positionTitle'>{this.props.data.title}</h1>
                <h2 className='jobType'>{this.props.data.jobType}</h2>
                <br />
                {description()}
                <br />
                <h3 className='terraOffers'>TERRA OFFERS:</h3>
                <ul className='offers'>
                    {offers()}
                </ul>

            </div >
        )
    }
}

export default Position