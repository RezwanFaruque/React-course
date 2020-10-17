import React,{Component} from 'react';
import { Card,Button, CardImg, CardTitle,CardText,CardBody,Breadcrumb,Label ,Row,Col,Form,FormGroup,Input, BreadcrumbItem, Modal, ModalHeader, ModalBody, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LocalForm,Control,Errors } from 'react-redux-form';



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

    const maxLength = (len) => (val) => !(val) || (val.length <= len);
    const minLength = (len) => (val) => val && (val.length >= len);

   class DishDetails extends Component {

    constructor(props){
        super(props);
        this.state={
            isCommentOpen : false,
        }

        this.toggleComentForm = this.toggleComentForm.bind(this);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);

    }


    toggleComentForm(){
        this.setState(
            {
                isCommentOpen : !this.state.isCommentOpen,
            }
            
        )
    }

    handleCommentSubmit(values){
        this.toggleComentForm();
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{this.props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row mt-2">
                    <div className="col-12 col-md-6">
                        <RenderDish dish={this.props.dish} />
                    </div>
                    <div className="col-12 col-md-6">
                        <RenderComments selectedDishComments={this.props.comments} />
                        <Button outline  onClick={this.toggleComentForm}>
                            <span className="fa fa-pencil fa-lg">Submit Comment</span>
                        </Button>
                        <Modal isOpen={this.state.isCommentOpen} toggle={this.toggleComentForm}>
                            <ModalHeader toggle={this.toggleComentForm}>Submit Comment</ModalHeader>
                            <ModalBody>
                              <LocalForm onSubmit={(values) => this.handleCommentSubmit(values)}>
                                <Row className="form-group">
                                    <Label htmlFor="rating" md={12}>Rating</Label>
                                    <Col md={12}>
                                        <Control type="number" model=".rating" id="rating" name="rating"
                                            placeholder="Rating"
                                            className="form-control"
                                           
                                            />
                                       
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="name" md={12}>Name</Label>
                                    <Col md={12}>
                                        <Control.text model=".name" id="name" name="name"
                                            placeholder="Name"
                                            className="form-control"
                                            validators={{
                                                 minLength: minLength(3), maxLength: maxLength(15)
                                            }}
                                            />
                                            <Errors className="text-danger"
                                            model=".name"
                                            show="touched"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be greater than 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }} />
                               
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="comment" md={12}>Comment</Label>
                                    <Col md={12}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="8"
                                        className="form-control" />
                                       
                                    </Col>
                                </Row>

                                <Row className="form-group">
                                <Col md={{size:12}}>
                                    <Button type="submit" color="primary">
                                     Submit 
                                    </Button>
                                </Col>
                            </Row>
                              </LocalForm>
                            </ModalBody>
                        </Modal>

                    </div>
                </div>
            </div>
            
        );
    }
        
    }



export default DishDetails;