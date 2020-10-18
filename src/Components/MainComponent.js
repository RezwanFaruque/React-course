import React, {Component} from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Menu from './menuComponents';
import Contact from './ContactComponents';
import DishDetails from './DishdetailsComponents';
import AboutUs from './AboutComponent';
import {addComments} from '../redux/ActionCreator';

import {Switch , Route , Redirect , withRouter} from 'react-router-dom';
import {connect} from 'react-redux';



const mapDispatchToProps = dispatch => ({
  
  addComments: (dishId, rating, author, comment) => dispatch(addComments(dishId, rating, author, comment))

});

const mapStateToProps = state =>{
    
  return{
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}


class Main extends Component{

  constructor(props){
    super(props);

    

  }


 

  render(){

    const HomePage = ()=>{
      return(
        <Home 
        dish = {this.props.dishes.filter((dish) => dish.featured)[0]}
        leader = {this.props.leaders.filter((leader) => leader.featured)[0]}
        promotion = {this.props.promotions.filter((promo) => promo.featured)[0]}
        />
      )
    }

    const About = ()=>{
     return(
      <AboutUs leaders={this.props.leaders} /> 
     )
     
    }

    const DishWithId = ({match}) => {
      return(
          <DishDetails dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            addComments ={this.props.addComments}
            />
      );
    };

    return (
      <div className="App">
        <Header />
        <Switch>
           <Route path='/home' component={HomePage} />
           <Route exact path='/menu' component={()=><Menu dishes={this.props.dishes} />} />
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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
