import React , {Component} from 'react';
import { Card, CardImg, CardTitle,CardText,CardBody } from 'reactstrap';

class DishDetails extends Component{

    constructor(props){
        super(props);

    }

    // display selected menu dish
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

    renderComments(selectedDishComments){
      
        if(selectedDishComments != null){
            let list = selectedDishComments.comments.map((comment)=>{
                return(
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>--{comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                    </li>
                )

            });
            return(
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {list}
                    </ul>
                </div>
            )
           
        }else{
            return(
                <div></div>
            )
        }
       
    }

    render(){
        return(
            <div className="row mt-2">
                <div className="col-12 col-md-6">
                    {this.renderDish(this.props.selctedDish)}
                </div>
                <div className="col-12 col-md-6">
                    
                    {this.renderComments(this.props.selctedDish)}
                </div>
            </div>
        );
    }

}

export default DishDetails;