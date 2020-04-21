import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from "react-bootstrap";

class SearchBar extends Component {
  state= {
    searchTerm : '',
  }

handleChange = (event) => {
  this.setState({
    searchTerm: event.target.value
  })
}

handleSubmit = (event) => {

  const {searchTerm} = this.state;
  const {onFormSubmit} = this.props;
  onFormSubmit(searchTerm);

  event.preventDefault();
}

  render(){
    return (
      <div className="searchbar-wrap shadow">
      <Form onSubmit = {this.handleSubmit}>
      <Form.Control size="lg" onChange={this.handleChange} type="text" placeholder="Search..." />
    </Form>
      </div>
    );
  }

}

export default SearchBar;
