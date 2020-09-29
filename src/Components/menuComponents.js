import React, { Component } from 'react';
import {Alert} from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardTitle,CardText,CardBody } from 'reactstrap';
import DishDetails from './DishdetailsComponents';


class Menu extends Component{

    constructor(props) {
        super(props);
        this.state = {
           selctedDish : null,
        }
    }

    // trigger after click a menu dish
    onDishSelect(dish){
        this.setState({
            selctedDish:dish,
        })

    }

    

    render(){

        const menu = this.props.dishes.map((dish)=>{
            return (
                <div  className="col-12 col-md-6 mt-2">
                
                  <Card key={dish.id}
                  onClick={()=>this.onDishSelect(dish)}
                  >
                    <CardImg top width="100%" src={dish.image} alt="Card image cap" />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                  </Card>
                </div>
            );
        })

        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                
                <DishDetails selctedDish ={this.state.selctedDish} />
                  
          </div>
        )
    }


}


export default Menu;