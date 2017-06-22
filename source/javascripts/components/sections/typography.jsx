import React from 'react';

class Typography extends React.Component {
  render () {
    return (
      <section className="section">
        <h1 className="title-section">Typography</h1>

        <p>Headers, paragraphs, blockquotes, lists.</p>

        <h2 className="h2">Headers</h2>

        <p>Use <code>.h1</code> through <code>.h6</code> classes in any element.</p>

        <div className="example">
          <h1 className="h1">Header 1</h1>
          <h2 className="h2">Header 1</h2>
          <h3 className="h3">Header 1</h3>
          <h4 className="h4">Header 1</h4>
          <h5 className="h5">Header 1</h5>
          <h6 className="h6">Header 1</h6>
        </div>
      </section>
    );
  }
}

export default Typography;
