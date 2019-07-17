import React from 'react';

class Map extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <p>Google Map</p>
          <img src="https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap
&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
&markers=color:red%7Clabel:C%7C40.718217,-73.998284
&key=AIzaSyB9xDbZ44YCk37fQ3SZxQe7ERqXKki8XE4"></img>
          <p>"search_query": "seattle",
              "formatted_query": "Seattle, WA, USA",
              "latitude": "47.606210",
              "longitude": "-122.332071"</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Map;