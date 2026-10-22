import { useState, useEffect } from "react";
import Button from "./Button";
import useSetting from "./store.js";
import { Spinner } from "spin.js";

/* var opts = {
  lines: 10, // The number of lines to draw
  length: 33, // The length of each line
  width: 16, // The line thickness
  radius: 43, // The radius of the inner circle
  scale: 1.1, // Scales overall size of the spinner
  corners: 1, // Corner roundness (0..1)
  speed: 1, // Rounds per second
  rotate: 19, // The rotation offset
  animation: 'spinner-line-fade-more', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#ffffff', // CSS color or array of colors
  fadeColor: 'transparent', // CSS color or array of colors
  top: '50%', // Top position relative to parent
  left: '50%', // Left position relative to parent
  shadow: '0 0 1px transparent', // Box-shadow for the lines
  zIndex: 2000000000, // The z-index (defaults to 2e9)
  className: 'spinner', // The CSS class to assign to the spinner
  position: 'absolute', // Element positioning
};

var target = document.getElementById('foo');
var spinner = new Spinner(opts).spin(target); */

const App = () => {
  const [comments, setComments] = useState([]);

  const { darkMode, font, darkToggle, nextFont } = useSetting();

  const fonts = [
    { font: `Inter`, name: `Inter` },
    { font: `Consolas`, name: `Consolas` },
    { font: `Comic Sans MS`, name: `Comic Sans` },
  ];

  const dataFetch = () => {
    fetch("https://dummyjson.com/comments")
      .then((res) => res.json())
      .then((v) => {
        setComments((prev) => {
          return v.comments;
        });
      });
  };

  const makeDatas = () => {
    console.log(comments);
    return comments.map((x) => {
      return (
        <div
          style={{
            fontFamily: `${fonts[font].font}`,
            width: `80%`,
            height: `max-content`,
            border: `1px solid ${darkMode ? `white` : `black`}`,
            padding: `10px`,
            margin: `0 auto`,
          }}
        >
          <div style={{ fontSize: `20px`, fontWeight: `bold` }}>
            {x.user.username}
          </div>
          <div style={{ paddingLeft: `5px` }}>{x.body}</div>
          <div>Likes : {x.likes}</div>
        </div>
      );
    });
  };

  return (
    <div
      style={{
        color: darkMode ? `white` : `black`,
        backgroundColor: darkMode ? `black` : `white`,
        minHeight: `95lvh`,
        paddingBlock: `10px`,
      }}
    >
      <div
        style={{
          display: `flex`,
          justifyContent: `space-between`,
        }}
      >
        <Button name="데이터 가져오기" func={dataFetch} />
        <div
          style={{
            width: `300px`,
            display: `flex`,
            justifyContent: `space-around`,
            whiteSpace: `nowrap`,
          }}
        >
          <Button
            name={darkMode ? `다크` : `화이트`}
            func={() => {
              darkToggle();
            }}
          />
          <Button
            name={`폰트: ${fonts[font].name}`}
            func={() => {
              nextFont();
            }}
          />
        </div>
      </div>
      <div
        style={{
          display: `grid`,
          gridTemplateColumns: `repeat( 2, 1fr)`,
          gap: `20px`,
          margin: `20px`,
        }}
      >
        {makeDatas()}
      </div>
    </div>
  );
};

export default App;
