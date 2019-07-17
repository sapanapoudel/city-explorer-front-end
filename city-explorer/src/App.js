import React from 'react';
import logo from './logo.svg';
import './App.css';

//Header
class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <h1>City Explorer</h1>
          <p>Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!</p>
        </header>
      </React.Fragment>
    );
  }
}

//Search 
class Search extends React.Component {
  render() {
    return (
      <React.Fragment>
        <label>Search for the location  </label>
        <input></input>
        <button>Explore!</button>
      </React.Fragment>
    );
  }
}

//Map
class Map extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <p>Google Map</p>
          <img src="https://placehold.it/600x400/111"></img>
          <p>"search_query": "seattle",
              "formatted_query": "Seattle, WA, USA",
              "latitude": "47.606210",
              "longitude": "-122.332071"</p>
        </div>
      </React.Fragment>
    );
  }
}

//Result 
class Result extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section>
          <b>Result: </b>
          <div>Results from the Dark Sky API
            <p>
              "forecast": "Partly cloudy until afternoon.",
              "time": "Mon Jan 01 2001"
              </p>
          </div>
          <div>Results from the Yelp API
          <p> "name": "Umi Sake House",
          "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/c-XwgpadB530bjPUAL7oFw/o.jpg",
          "price": "$$   ",
          "rating": "4.0",
          "url": "https://www.yelp.com/biz/umi-sake-house-seattle?adjust_creative=uK0rfzqjBmWNj6-d3ujNVA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=uK0rfzqjBmWNj6-d3ujNVA"
          </p>
          </div>
          <div>Results from the Eventbrite API
          <p> "link": "https://www.eventbrite.com/Angular-Seattle/events/253595182/",
      "name": "Angular Seattle",
      "event_date": "Tue May 09 2017",
      "summary": "Want to better understand the hottest TypeScript framework?"
          </p>
          </div>
          <div>Results from The Movie DB API
          <p>"title": "Sleepless in Seattle",
      "overview": "A young boy who tries to set his dad up on a date after the death of his mother. He calls into a radio station to talk about his dad’s loneliness which soon leads the dad into meeting a Journalist Annie who flies to Seattle to write a story about the boy and his dad. Yet Annie ends up with more than just a story in this popular romantic comedy.",
      "average_votes": "6.60",
      "total_votes": "881",
      "image_url": "https://image.tmdb.org/t/p/w200_and_h300_bestv2/afkYP15OeUOD0tFEmj6VvejuOcz.jpg",
      "popularity": "8.2340",
    "released_on": "1993-06-24"</p>
          </div>
          <div> Results from the Hiking Project API
           <p>"name": "Rattlesnake Ledge",
     "location": "Riverbend, Washington",
     "length": "4.3",
     "stars": "4.4",
     "star_votes": "84",
     "summary": "An extremely popular out-and-back hike to the viewpoint on Rattlesnake Ledge.",
     "trail_url": "https://www.hikingproject.com/trail/7021679/rattlesnake-ledge",
     "conditions": "Dry: The trail is clearly marked and well maintained.",
     "condition_date": "2018-07-21",
    "condition_time": "0:00:00 "</p>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

//Main
class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Search />
        <Map />
        <Result />
      </React.Fragment>

    );
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
      </React.Fragment>
    )
  }
}

export default App;