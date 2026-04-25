import React, { Component } from "react";
import yosemite from "./yosemite.jpg";

class Yosemite extends Component {
  render() {
    return (
      <div>
        <h2>Yosemite</h2>

        <img
          src={yosemite}
          alt="Yosemite National Park mountain landscape"
          title="Yosemite National Park"
          width="250"
        />

        <p>
        Image from{" "}
        <a
            href="https://pixabay.com/photos/yosemite-national-park-america-657421/"
            target="_blank"
            rel="noreferrer"
        >
            Pixabay
        </a>
        </p>

        <p>
          Not just a great valley, but a shrine to human foresight, the strength
          of granite, the power of glaciers, the persistence of life, and the
          tranquility of the High Sierra.
        </p>

        <p>
          First protected in 1864, Yosemite National Park is best known for its
          waterfalls, but within its nearly 1,200 square miles, you can find
          deep valleys, grand meadows, ancient giant sequoias, a vast wilderness
          area, and much more.
        </p>

        <p>
          Source:{" "}
          <a
            href="https://www.nps.gov/yose/index.htm"
            target="_blank"
            rel="noreferrer"
          >
            National Park Service
          </a>
        </p>
      </div>
    );
  }
}

export default Yosemite;