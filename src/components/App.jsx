import React from "react";
import Emoji from "../emojipedia";
import Entry from "./Entry";

function emojiDictionary(Emoji) {
  return (
    <Entry
      key={Emoji.id}
      emoji={Emoji.emoji}
      name={Emoji.name}
      meaning={Emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {Emoji.map(emojiDictionary)}
        {/* <Entry
          emoji={Emoji[0].emoji}
          name={Emoji[0].name}
          meaning={Emoji[0].meaning}
        />

        <Entry
          emoji={Emoji[1].emoji}
          name={Emoji[1].name}
          meaning={Emoji[1].meaning}
        />

        <Entry
          emoji={Emoji[2].emoji}
          name={Emoji[2].name}
          meaning={Emoji[2].meaning}
        /> */}
      </dl>
    </div>
  );
}

export default App;
