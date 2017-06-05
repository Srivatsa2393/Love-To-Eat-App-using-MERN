import React, { Component } from 'react';

class Submit extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
    this.submitRecipe = this.submitRecipe.bind(this);
  }
  submitRecipe(){
    console.log('button clicked');
    this.props.history.push('/');
  }

  render() {
    return(
      <div className="row">
        <div className="col-xs-12 col-sm-12">
          <h2>Submit</h2>
            <form>
              <div className="form-group">
                <label for="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter the name of the recipe" />
              </div>
              <div className="form-group">
                <label for="description">Description</label>
                <input type="text" className="form-control" id="name" placeholder="Enter a brief description" />
              </div>
              <div className="form-inline form-group">
                <label for="quantity">Quantity</label>
                <input type="text" className="form-control" id="quantity" placeholder="Quantity" />
                <label for="ingredient">Ingredients</label>
                <input type="text" className="form-control" id="quantity" placeholder="Ingredient" />
                <button type="submit" className="btn btn-info">Add</button>
              </div>
              <button type="submit" class="btn btn-default" onClick={this.submitRecipe}>Submit a recipe</button>
            </form>
          </div>
      </div>
    );
  }
}

export default Submit;
