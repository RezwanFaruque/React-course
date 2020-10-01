import React, {Component} from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
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
        <Header />
          <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />

          <DishDetails dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
         
          <Footer />
      </div>
    );
  }

}

export default Main;
