import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Muhammed Hasan</h1>
      <p>Front end developer</p>
      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Youessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
r Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} alt="p" />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} alt="ai" />
    </div>
  </div>
);

export default Header;