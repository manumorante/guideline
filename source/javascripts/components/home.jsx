import React from 'react';
import Header from './header';
import Navigation from './navigation';
import Footer from './footer';
import Typography from './sections/typography'
import Colours from './sections/colours'

const sections = {
  1: Typography,
  2: Colours,
};

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      section: 1
    };

    this.changeSection = this.changeSection.bind(this);
  }

  changeSection(section) {
    this.setState({
      section
    })
  }

  render () {
    const Section = sections[this.state.section];

    return(
      <div className="container">
        {/*<a href="#" className="menu-item" onClick={() => {this.changeSection(1)}}>Typography</a>*/}
        <Header />

        <div className="row">
          <div className="col col-3">
            <Navigation />
          </div>

          <div className="col col-9">
            {/*<Section />*/}
            <Typography />
            <Colours />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Home;