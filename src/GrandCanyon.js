import React, { Component } from "react";
import grandcanyon from "./grandcanyon.jpg";

class GrandCanyon extends Component {
  render() {
    return (
      <div>
        <h2>Grand Canyon</h2>

        <img
          src={grandcanyon}
          alt="Grand Canyon National Park canyon view"
          title="Grand Canyon National Park"
          width="250"
        />
        <p>
        Image from{" "}
        <a
            href="https://pixabay.com/photos/arizona-usa-america-united-country-4271369/"
            target="_blank"
            rel="noreferrer"
        >
            Pixabay
        </a>
        </p>
        <p>
        The Grand Canyon is a steep-sided canyon carved by the Colorado River in Arizona, United States. The Grand Canyon is 277 miles (446 km) long, up to 18 miles (29 km) wide and attains a depth of over a mile (6,093 feet or 1,857 meters).
        </p>

        <p>
        For thousands of years, the area has been continuously inhabited by Native Americans, who built settlements within the canyon and its many caves. The Pueblo people considered the Grand Canyon a holy site, and made pilgrimages to it.
        </p>
        <p>
  Source:{" "}
  <a
    href="https://en.wikipedia.org/wiki/Grand_Canyon"
    target="_blank"
    rel="noreferrer"
  >
    Wikipedia
  </a>
</p>
      </div>
    );
  }
}

export default GrandCanyon;