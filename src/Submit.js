import React, { Component } from 'react';
import Ingredients from './Ingredients';
import IngredientList from './IngredientList';
import request from 'superagent';
import axios from 'axios';

class Submit extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      newRecipe: {
        name: "New Recipe",
        description: "Description",
        ingredients: []
      }
    };
    this.submitRecipe = this.submitRecipe.bind(this);
  }
  submitRecipe(){
    console.log('button clicked');
    this.props.history.push('/');
    console.log(this.name.value, this.description.value);
    let newRecipe = this.state.newRecipe;
    newRecipe.name = this.name.value;
    newRecipe.description = this.description.value;
    this.setState({newRecipe});
    //console.log(newRecipe);

    axios.post('/recipes', {recipes: this.state.newRecipe})
    .then(response => {
      console.log(response.config.data);
    });
    console.log(newRecipe);
    this.props.history.push('/');
  }

  addIngredient(quantity, ingredient){
    console.log('add ingredients in submit', quantity, ingredient);
    let newRecipe = this.state.newRecipe;
    newRecipe.ingredients.push({quantity: quantity, ingredient: ingredient});
    this.setState({newRecipe: newRecipe});
    console.log(newRecipe);
  }

  render() {
    return(
      <div className="container">
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
                <IngredientList recipe={this.state.newRecipe}/>
                <Ingredients addIngredient={(quantity, ingredient) => {this.addIngredient(quantity, ingredient)}}/>
                <button type="button" onClick={this.submitRecipe} class="btn btn-default">Submit a recipe</button>
              </form>
            </div>
        </div>
      </div>
    );
  }
}

export default Submit;
