import React from 'react';

class Cards extends React.Component {
  render () {
    return (
      <section className="section">
        <h1 className="title-section">Cards</h1>

        <p>A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content.</p>

        <h3 className="h3">Single line Card</h3>

        <div className="example dark">
          <div className="card">Sigle line card</div>
        </div>

        <h3 className="h3">Long text card</h3>

        <div className="example dark">
          <div className="card">
            <p>Quisque scelerisque arcu cursus, facilisis elit a, convallis ligula. Proin sodales mattis massa, vitae pharetra quam dapibus sit amet. Vivamus elementum sapien sit amet leo luctus, ultricies pulvinar nulla fringilla. Sed dolor risus, elementum a lectus quis, elementum mollis mauris. Maecenas in lectus elit. Donec commodo commodo.</p>
            <p>Proin nec risus laoreet massa semper dignissim vel nec lorem. Quisque et rutrum ante, eu rhoncus lacus. Sed mattis tortor arcu. Cras ac nisl dolor. Integer a felis quam. Donec aliquam vestibulum maximus. Vestibulum gravida suscipit augue. In et finibus elit. Nam nec tortor malesuada, tempor ex at, vestibulum arcu. Nullam congue.</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Colours;
