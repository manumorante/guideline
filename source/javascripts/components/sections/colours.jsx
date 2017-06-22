import React from 'react';

class Colours extends React.Component {
  render () {
    return (
      <section className="section">
        <h1 className="title-section">Colours</h1>

        <p>There are several global color to set text and background colors. <br/> Use the class <code>.text-*</code> for text colors and <code>.bg-*</code> for background colors.</p>

        <h3 className="h3">Primary</h3>

        <div className="example">
          <div className="color-block">
            <div className="color-block__circle bg-primary-light"></div>
            <div className="code">primary-light</div>
          </div>

          <div className="color-block">
            <div className="color-block__circle bg-primary"></div>
            <div className="code">primary</div>
          </div>

          <div className="color-block">
            <div className="color-block__circle bg-primary-dark"></div>
            <div className="code">primary-dark</div>
          </div>

          <div className="color-block">
            <div className="color-block__circle bg-primary-darkest"></div>
            <div className="code">primary-darkest</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Colours;
