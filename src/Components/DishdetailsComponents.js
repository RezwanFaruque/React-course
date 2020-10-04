import React  from 'react';
import { Card, CardImg, CardTitle,CardText,CardBody,Breadcrumb , BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


    // display selected menu dish
    function RenderDish( {dish} ){
        console.log('render dish funcition on');
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
        console.log('render comments funcition on');

        if(selectedDishComments != null){
            let list = selectedDishComments.map((comment)=>{
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
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row mt-2">
                    <div className="col-12 col-md-6">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-6">
                        <RenderComments selectedDishComments={props.comments} />
                    </div>
                </div>
            </div>
            
        );
    }



export default DishDetails;