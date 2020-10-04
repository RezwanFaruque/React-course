import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle , Breadcrumb , BreadcrumbItem } from 'reactstrap';
import {Link}  from 'react-router-dom';



 function RenderMenuIteam({dish}){
     return(
        <Card>
            <Link to={`/menu/${dish.id}`} >
                <CardImg top width="100%" src={dish.image} alt="Card image cap" />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
            
        </Card>
     );
 }




    const Menu = (props) => {

        const menu = props.dishes.map((dish)=>{
            return (
                <div  className="col-12 col-md-6 mt-2">
                    <RenderMenuIteam dish={dish} onClick={props.onClick} />
                </div>
            );
        })

        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    {menu}
                </div>  
          </div>
        )
    }



export default Menu;