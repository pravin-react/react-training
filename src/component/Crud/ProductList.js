import { Form ,Container,Row,Button,Col,Table,InputGroup,Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState,useReducer,useEffect  } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import EditProduct from './EditProduct';
const initialState = {
    products: {},  
    error: ''
};
function ProductReducer(state, action) {
    switch (action.type) {
      case "ADD_PRODUCT":
        return {  
          products: action.payload,  
        }  
      case "EDIT_PRODUCT":
        
        return {  
          products: action.payload,  
        } 
  
      case "REMOVE_PRODUCT":
        return {  
          products: action.payload, 
        } 
  
      default:
        return state;
    }
  }




function ProductList() {
    const [modalShow, setModalShow] = useState(false);
    const [selectedItem, setSelectedItem] = useState({});
    const [post,setPost]=useState();
    const navigate = useNavigate();
    
    const [state, dispatch] = useReducer(ProductReducer, initialState);

    function addProduct(product) {
      console.log("data",product);
      axios.post("https://62f37b4aa84d8c9681244fcd.mockapi.io/api/v1/products", { product,})
                  .then((response) => {
                      dispatch({
                        type: "ADD_PRODUCT",
                        payload: response.data.product
                      })
                  });
    }

  
  const clickDelete = (id) => {
      console.log(id);
      axios.delete(`https://62f37b4aa84d8c9681244fcd.mockapi.io/api/v1/products/${id}`)  
      .then(response => {  
        dispatch({
          type: "REMOVE_PRODUCT",
          payload: response.data.product
        })  
      
      })  
  }

  const clickEdit = (id) => {
    navigate("/edit-product/"+ id);     
  }

  const addProd = (id) => {
    navigate("/add-product");     
  }

  useEffect(() => {
        axios.get("https://62f37b4aa84d8c9681244fcd.mockapi.io/api/v1/products").then((response) => {
            setPost(response.data);
            console.log(response.data);
          });
  }, []);

return (
    <><Container>
      <h2 className='text-middle'>Products inventory</h2>
      <Row>
        <Col md={{ span: 10, offset: 1 }} className="addsec">
          <Button
            className='btn-main' onClick={() => addProd()}>
            Add Product
          </Button>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>

          <Table striped bordered hover className="tablecard">
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>SKU</th>
                <th>Description</th>
                <th>Price</th>
                <th style={{ textAlign: 'end' }}>Action</th>
              </tr>
            </thead>

            <tbody>

              {post &&
                post.map(({ product,id }) => (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{product.productname}</td>
                    <td>{product.sku}</td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                    <td style={{ textAlign: 'end' }}><button className="btn btn-warning" onClick={() => clickEdit(id)}>Edit</button>{" "}  
                    <button className="btn btn-danger" onClick={() => { setModalShow(true); setSelectedItem(id) }}>Delete</button>{" "} </td>
                    
                  </tr>
                ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
    {modalShow ? 
    <Modal
    show={modalShow}
    onClick={(e) => {
        setModalShow(false)
        setSelectedItem({})
      }} 
    dialogClassName="modal-90w"
    aria-labelledby="example-custom-modal-styling-title"
  >
    <Modal.Header closeButton>
      <Modal.Title id="example-custom-modal-styling-title">
        Delete  Product
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>
        Are you sure? You want delete this items. 
    </p>
    <button className="btn btn-danger" onClick={() => clickDelete(selectedItem)}>Delete</button>
    </Modal.Body>
  </Modal>
  : null}
  </>
)
}



export default ProductList;