import React  from 'react';
import { Card, CardImg, CardTitle,CardText,CardBody } from 'reactstrap';


    // display selected menu dish
    function RenderDish( {dish} ){
        
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

        }else{
            return(
                <div></div>
            )
        }
    }

    function RenderComments( {selectedDishComments} ){
       
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

   const DishDetails = (props) => {
        return(
            <div className="container">
                <div className="row mt-2">
                    <div className="col-12 col-md-6">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-6">
                        <RenderComments selectedDishComments={props.dish} />
                    </div>
                </div>
            </div>
            
        );
    }



export default DishDetails;