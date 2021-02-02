import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import ErrorMessage from "../errorMessage";
import CharacterPage from "../characterPage/characterPage";

class App extends Component {
  state = {
    hideRandomChar: false,
    error: false,
  };

  onHideChar = () => {
    this.setState(({ hideRandomChar }) => {
      return { hideRandomChar: !hideRandomChar };
    });
  };
  componentDidCatch() {
    this.setState({
      error: true,
    });
  }
  render() {
    const content = this.state.hideRandomChar ? null : <RandomChar />;
    if (this.state.error) {
      return <ErrorMessage />;
    }
    return (
      <>
        <Container>
          <Header />
        </Container>
        <Container>
          <Row>
            <Col lg={{ size: 5, offset: 0 }}>
              {content}
              <button onClick={this.onHideChar}>Hide char</button>
            </Col>
          </Row>
          <CharacterPage />
        </Container>
      </>
    );
  }
}

export default App;
