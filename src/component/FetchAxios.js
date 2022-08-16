import React, { useEffect, useState } from 'react'
import { Card ,Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';



function FetchAxios() {
    const [post,setPost]=useState();
    const baseURL = "https://jsonplaceholder.typicode.com/posts";

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    }, []);
    
return (
    <Container>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
    <h3>Using Axios Library</h3>
    <Row>
            <div className="App flexicard">
                {/* 5. Returning an img element for each url, again with the value of our src set to the image url */}
                
                {post &&
                post.map(({ id, title,body }) => (
                    <Col md={4}  style={{ margin:'10px' }} key={id}>
                        <Card >
                        <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                        {body}
                        </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                ))}
            </div>
    </Row>
    </Container>
)
}

export default FetchAxios;