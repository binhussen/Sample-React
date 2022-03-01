import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, CardBody, CardImg, CardText, CardTitle} from 'reactstrap';

function RenderDish({dish}) {
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

  function RenderComments({dish}) {

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

  const  DishDetail = (props) => {
    const dish = props.dish;
    return (<div className="container">
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
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={dish} onClick={props.onClick} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {/* <RenderComments comments={props.comments} /> */}
                        <RenderComments dish={dish}/>
                    </div>
                </div>
                </div>
            );
    }

export default DishDetail;