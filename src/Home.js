import React, { Component } from 'react';
import IngredientList from './IngredientList';
import axios from 'axios';

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      recipes: []
    };
    this.loadRecipesFromServer = this.loadRecipesFromServer.bind(this);
  }

  loadRecipesFromServer(e){
    console.log('loading the recipes from the database');
    axios.get('/recipes')
      .then(response => {
        this.setState({recipes: response.data.recipes});
      })
      .catch(function(error){
        console.log(error);
      });
  }

  componentDidMount(){
    this.loadRecipesFromServer();
  }

  displayRecipes(){
    let resultsArray = [];

    this.state.recipes.map((recipe) => {
      return resultsArray.push(
        <div key={recipe['_id']} className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <div className="caption">
              <h3>{recipe.name}</h3>
              <p>{recipe.description}</p>
              <IngredientList recipe={recipe} />
            </div>
          </div>
        </div>
      );
    });
    return resultsArray;
  }
  render() {
    return(
      <div className="container">
          <h2>Home</h2>
          <div className="row">
            {this.displayRecipes()}
          </div>
      </div>
    )
  }
}

export default Home;
