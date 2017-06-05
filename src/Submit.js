import React, { Component } from 'react';
import Ingredients from './Ingredients';

class Submit extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
    this.submitRecipe = this.submitRecipe.bind(this);
  }
  submitRecipe(){
    console.log('button clicked');
    //this.props.history.push('/');
    console.log(this.name.value, this.description.value);
  }

  render() {
    return(
      <div className="row">
        <div className="col-xs-12 col-sm-12">
          <h2>Submit</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text"
                    ref={(input) => {this.name = input;}}
                    className="form-control"
                    id="name"
                    placeholder="Enter the name of the recipe"
                  />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  type="text"
                  ref={(input) => {this.description = input;}}
                  className="form-control"
                  id="name"
                  placeholder="Enter a brief description">
                </textarea>
              </div>
              <Ingredients />
              <button type="button" onClick={this.submitRecipe} class="btn btn-default">Submit a recipe</button>
            </form>
          </div>
      </div>
    );
  }
}

export default Submit;
