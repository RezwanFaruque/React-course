import React, { Component } from 'react';
import {Alert} from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardTitle,CardText,CardBody } from 'reactstrap';


class Menu extends Component{

    constructor(props) {
        super(props);
        this.state = {
           selctedDish : null,
        }
    }

    onDishSelect(dish){
        this.setState({
            selctedDish:dish,
        })

    }

    renderDish(dish){
        if(dish != null){
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );

        }
    }

    render(){

        const menu = this.props.dishes.map((dish)=>{
            return (
                <div  className="col-lg-3 col-md-6 col-sm-12 mt-2">
                
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
                <Alert className="mt-3 text-center" color="primary">
                   <h3> List Of Menus In Our Collection</h3>
                </Alert>
                <div className="row">
                    {menu}
                </div>
                <div className="row mt-5">
                    <div className="col-12">
                        {this.renderDish(this.state.selctedDish)}
                    </div>
                </div>
          </div>
        )
    }


}


export default Menu;