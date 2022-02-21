import React, { Component} from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle} from 'reactstrap';

class DishDetailComponent extends Component{

    render(){
        const dish = this.props.dish;
        return (
            <div className="row">
                <div className='col-12 col-md-5 m-1'>
                    <card>
                    {this.renderDish(dish)}
                    {this.renderComment(dish)}
                    </card>
                </div>
            </div>
            )
        }

    renderDish(dish) {
        if(dish !=null){
            return(
                <div>
                        <CardImg top src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    renderComment(dish){
        if(dish != null){
            const comments = dish.comments;
            const mapped = comments.map((comment) => {
                return (<div>
                    <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(comment.date))}
                    </p>
                </li>
                </div>
                )
            });
            return mapped;
        }
        else{
            return(
                <div></div>
            )
        }
    }
        
}

export default DishDetailComponent;