import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import ErrorMessage from "../errorMessage";
import CharacterPage from "../characterPage/characterPage";
import HousePage from "../housePage/HousePage";
import BookPage from "../bookPage/BookPage";
import BookItem from "../bookPage/BookItem";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
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
      <Router>
        <div className="app">
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
            <Route path="/characters" component={CharacterPage} />
            <Route path="/" exact component={HousePage} />
            <Route path="/books" exact component={BookPage} />

            <Route
              path="/books/:id"
              render={({ match }) => {
                console.log(match);
                return <BookItem selectedBook={match.params.id} />;
              }}
            />
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
