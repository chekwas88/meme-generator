import React, { Component } from 'react';
// import Header from './Header';

class MemeGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topText: '',
      bottomText: '',
      randomImage: 'https://images.vexels.com/media/users/3/143350/isolated/preview/150164edc7f28a716bfceae9dd58cf2c-coolface-trollface-meme-by-vexels.png',
      allMemeimgs: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then((res) => {
        const { memes } = res.data;
        this.setState({
          allMemeimgs: memes,
        });
      });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { allMemeimgs } = this.state;
    const randomNum = Math.floor(Math.random() * allMemeimgs.length);
    const randomMeme = allMemeimgs[randomNum].url;
    this.setState({
      randomImage: randomMeme,
    });
  }

  render() {
    const { topText, bottomText, randomImage } = this.state;
    return (
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="topText"
            value={topText}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="bottomText"
            value={bottomText}
            onChange={this.handleChange}
          />
          <button type="submit">Gen</button>
        </form>
        <div className="meme">
          <img src={randomImage} alt="random-meme" />
          <h2 className="top">{topText}</h2>
          <h2 className="bottom">{bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
