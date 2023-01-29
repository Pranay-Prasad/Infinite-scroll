import { useState } from 'react'
import './App.css'
const DURATION = 15000;
const ROWS = 5;
const TAGS_PER_ROW = 5;
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort( () => .5 - Math.random() );

const Slider = ({children,duration,reverse = false}) => {
  return(
    <div className="loop_slider" style={{ '--duration':`${duration}ms`,'--direction': reverse?'reverse':'normal'}}>
      <div className="inner_slider">
        {children}
        {children}
      </div>
    </div>
  )
};

const Tag = ({text}) => (
  <div className="tag"><span>#</span>{text}</div>
)

function App() {
  const COLORS = ['#bbf7d0', '#99f6e4', '#bfdbfe', '#ddd6fe', '#f5d0fe', '#fed7aa', '#fee2e2'];
  const TAGS = ['HTML', 'CSS', 'JavaScript', 'Typescript', 'Tailwind', 'React', 'Next.js', 'Gatsby', 'UI/UX', 'SVG', 'animation', 'webdev'];

  return (
    <div className="App">
      <header>
        <h1>Innfinite scroll animation</h1>
      </header>
      <div className="tag-list">
        {[...new Array(ROWS)].map((_,i) => (
          <Slider key={i} duration={random(DURATION- 5000, DURATION + 5000)} reverse = {i%2}>
            {shuffle(TAGS).slice(0,TAGS_PER_ROW).map(tag=>(
              <Tag text={tag} key= {tag} />
            ))}
          </Slider>
        ))}
        <div className="fade"></div>
      </div>
    </div>
  )
}

export default App