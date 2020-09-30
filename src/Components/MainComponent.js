import React, {Component} from 'react';
import {Navbar, NavbarBrand } from 'reactstrap';
import Menu from './menuComponents';
import DishDetails from './DishdetailsComponents';
import { DISHES } from '../Shared/Dishes';


class Main extends Component{

  constructor(props){
    super(props);

    this.state ={
      dishes : DISHES,
      selectedDish : null,
    }

  }

   // trigger after click a menu dish
   onDishSelect(dishId){
    this.setState({
        selectedDish : dishId,
    })

}

  render(){
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Amar Resturant</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />

        <DishDetails dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
         
      </div>
    );
  }

}

export default Main;
