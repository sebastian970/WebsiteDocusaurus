
const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function HelloWorld(props) {
  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <h1>Hello World!</h1>
        <p>This is my first page!</p>

        <meta property="og:description" content="My Custom Description"/>
        <meta name="description" content="My Custom Description"/>
      </Container>
    </div>
  );
}

module.exports = HelloWorld;
