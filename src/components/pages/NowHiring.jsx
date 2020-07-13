import React from 'react';
import Page from './Page';
import Position from '../Position'
import { Image } from 'semantic-ui-react';

class NowHiring extends Page {
    CONTENTFUL_ID = '3GqbEX3xQv8dfVqM2bwXql';
    PAGE_NAME = 'now-hiring';

    childRender() {
        var positions;
        if (this.state.data) {
            var photos = this.state.data.fields.footer.fields.photos;
            positions = this.state.data.fields.availablePositions;

            var Title = this.state.data.fields.pageTitle
            var picFooter = this.state.data.fields.footer.fields.title
            var headerPhoto = < Image src={this.state.data.fields.headerPicture.fields.file.url} alt="StoreFront" />
            var storeFront = <Image src={photos["1"].fields.file.url} alt="StoreFront" />
            var desk = <Image className='picBM' src={photos["0"].fields.file.url} alt="desk" />
            var bar = <Image className='picTM' src={photos["2"].fields.file.url} alt="desk" />
            var door = <Image src={photos["4"].fields.file.url} alt="desk" />
            var hairWash = <Image src={photos["3"].fields.file.url} alt="desk" />
        }

        const loadPositions = () => {
            var position = null;
            if (this.state.data) {
                for (position in positions) {
                    return <Position key={positions[position].fields.title} data={positions[position].fields} />
                }
            }
        }

        return (
            <div>
                <div className='imageBox'>
                    <div className='headerPhoto'>{headerPhoto}</div>
                </div>
                <div className='margins'>
                    <h1 className='NHtitle'>{Title}</h1>
                    <div className="partUnderline"></div>
                    <div className='positions'>
                        {loadPositions()}
                    </div>
                    <h2 className='ourSalon'>{picFooter}</h2>
                    <div className='footerPhotos'>
                        <div className="picRow">
                            <div className='picLeft'>{storeFront}</div>
                        </div>
                        <div className="picRow">
                            <div className='picTM'>{bar}</div>
                            <div className='picBM'>{desk}</div>
                        </div>
                        <div className="picRow">
                            <div className='picTR'>{door}</div>
                            <div className='picBR'>{hairWash}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NowHiring;
