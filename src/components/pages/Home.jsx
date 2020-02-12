import React from 'react';
import Page from './Page';

class Home extends Page {
  CONTENTFUL_ID = 'vCdkXXRVwLWXms4PgZAPK';
  PAGE_NAME = 'home';

  childRender() {
    return (
      <div className="home">
        <h2>Home</h2>
      </div>
    );
  }
}

export default Home;
