import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
// import './wana.js';
import hepburn from "hepburn";

function App() {
  var data = [
    {
      kanji: "上", meaning: "Above", o: "じょう"
    }, {
      kanji: "下", meaning: "Below", o: "か, げ"
    }, {
      kanji: "大", meaning: "Big", o: "たい, だい",
    }, {
      kanji: "工", meaning: "Construction", o: "こう, く"
    }, {
      kanji: "八", meaning: "eight", o: "はち"
    }, {
      kanji: "入", meaning: "enter", o: "にゅう"
    }, {
      kanji: "山", meaning: "mountain", o: "さん"
    }, {
      kanji: "口", meaning: "mouth", o: "こう, く"
    }, {
      kanji: "九", meaning: "nine", o: "く, きゅう"
    }, {
      kanji: "一", meaning: "one", o: "いち, いつ"
    }, {
      kanji: "女", meaning: "woman", o: "じょ"
    }, {
      kanji: "二", meaning: "two", o: "に"
    }, {
      kanji: "三", meaning: "three", o: "さん"
    }, {
      kanji: "十", meaning: "ten", o: "じゅう"
    }, {
      kanji: "七", meaning: "seven", o: "しち"
    }, {
      kanji: "川", meaning: "river", o: false, k: "かわ"
    }, {
      kanji: "力", meaning: "power", o: "りょく, りき"
    }, {
      kanji: "人", meaning: "person", o: "にん, じん"
    }
  ]

  const [char, setChar] = useState(0);
  const [answer, showAnswer] = useState(false);

  const someFunc = () => {
    let aval = char + 1;
    if (!answer) {
      showAnswer(true)
    } else {
      showAnswer(false)
      if (aval < data.length) {
        setChar(char + 1)
      } else {
        setChar(0)
      }
    }
  }

  const shouldShow = () => {
    if (answer) {
      let f = ""
      let e = ""
      if (data[char].o) {
        f = data[char].o
        e = hepburn.fromKana(f)
      } else if (data[char].k) {
        e = hepburn.fromKana(data[char].k)
        f = <span className="blueover">{data[char].k}</span>
      }
      return (
        <div>
          <div className="ans-1">{data[char].meaning}</div>
          <div className="ans-1 ans-2">{f}</div>
          <div className="ans-1 ans-3">{e}</div>
        </div>
      )
    } else {
      return (
        <div>
          <div className="ans-1 empty">&nbsp;</div>
          <div className="ans-1 ans-2 empty">&nbsp;</div>
          <div className="ans-1 ans-3 empty">&nbsp;</div>
        </div>
      )
    }
  }

  return (
    <div className="App" onClick={() => { someFunc() }}>
      <div className="App-wrap">
        <div className="topSec">
          <div className="box">{data[char].kanji}</div>
        </div>
        <div className="botSec">
          {shouldShow()}
        </div>
      </div>
    </div>
  );
}

export default App;