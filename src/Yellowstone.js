import React, { Component } from "react";
import yellowstone from "./yellowstone.jpg";

class Yellowstone extends Component {
  render() {
    return (
      <div>
        <h2>Yellowstone</h2>

        <img
          src={yellowstone}
          alt="Yellowstone National Park landscape"
          title="Yellowstone National Park"
          width="250"
        />
        <p>
        Image from{" "}
        <a
            href="https://pixabay.com/photos/yellowstone-park-national-park-2472492/"
            target="_blank"
            rel="noreferrer"
        >
            Pixabay
        </a>
        </p>
        <p>
        Yellowstone National Park is a national park of the United States located in the northwest corner of the state of Wyoming, with small portions extending into Montana and Idaho. It was established by the 42nd U.S. Congress through the Yellowstone National Park Protection Act and signed into law by President Ulysses S. Grant on March 1, 1872.Yellowstone was the first national park in the US, and is also widely understood to be the first national park in the world.
        </p>
        <p>
  Source:{" "}
  <a
    href="https://en.wikipedia.org/wiki/Yellowstone_National_Park"
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

export default Yellowstone;
