import React, {Component} from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Menu from './menuComponents';
import Contact from './ContactComponents';
import DishDetails from './DishdetailsComponents';
import AboutUs from './AboutComponent';
import { DISHES } from '../Shared/Dishes';
import { COMMENTS } from '../Shared/Comments';
import { LEADERS } from '../Shared/Leaders';
import { PROMOTIONS } from '../Shared/Promotions';
import {Switch , Route , Redirect} from 'react-router-dom';



class Main extends Component{

  constructor(props){
    super(props);

    this.state ={
      dishes : DISHES,
      leaders : LEADERS,
      comments : COMMENTS,
      promotions : PROMOTIONS,
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

    const HomePage = ()=>{
      return(
        <Home 
        dish = {this.state.dishes.filter((dish) => dish.featured)[0]}
        leader = {this.state.leaders.filter((leader) => leader.featured)[0]}
        promotion = {this.state.promotions.filter((promo) => promo.featured)[0]}
        />
      )
    }

    const About = ()=>{
     return(
      <AboutUs leaders={this.state.leaders} /> 
     )
     
    }

    const DishWithId = ({match}) => {
      return(
          <DishDetails dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };

    return (
      <div className="App">
        <Header />
        <Switch>
           <Route path='/home' component={HomePage} />
           <Route exact path='/menu' component={()=><Menu dishes={this.state.dishes} />} />
           <Route exact path='/contactus' component={Contact} />
           <Route exact path='/aboutus' component={()=><About />} />
           <Route path='/menu/:dishId' component={DishWithId} />
           <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }

}

export default Main;
