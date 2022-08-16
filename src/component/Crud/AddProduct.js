import { Form ,Container,Row,Button,Col,Table,InputGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState,useReducer,useEffect  } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import ProductReducer from './ProductReducer';

const initialState = {
    products: {},  
    error: ''
};




function AddProduct() {
    const initialvalues = {productname:"",sku:"",description:"",price:""}
    const [proValues, setRegValues] = useState(initialvalues);
    const [proErrors, setRegErrors] = useState({});
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
            navigate("/products"); 
    }

  useEffect(() => {
        axios.get("https://62f37b4aa84d8c9681244fcd.mockapi.io/api/v1/products").then((response) => {
            setPost(response.data);
            console.log(response.data);
          });
  }, []);



    const onSubmit = (e) => {
      e.preventDefault();
              let error = validate(proValues)
              setRegErrors(error);
              if(Object.keys(error).length === 0){ 
                // axios.post("https://62f37b4aa84d8c9681244fcd.mockapi.io/api/v1/products", {
                //     productname: proValues.productname,
                //     sku: proValues.sku,
                //     description: proValues.description,
                //     price: proValues.price,

                //   })
                //   .then((response) => {
                //     console.log(response);
                //   });
                //  // navigate("/products");
                  const newProduct = {
                    productname: proValues.productname,
                    sku: proValues.sku,
                    description: proValues.description,
                    price: proValues.price,
                  };
                  addProduct(newProduct);

              }
    }
  
  const handleChange = (e) =>{
      const{name,value} = e.target;
      setRegValues({...proValues, [name]:value});
  }
  
    const validate = (values) =>{
      const errors = {}
    
    if(!values.productname){
      errors.productname = "Field is required";
    }
    
    if(!values.sku){
        errors.sku = "Field is required";
    }
    
    if(!values.description){
        errors.description = "Field is required";
    }
    
    if(!values.price){
        errors.price = "Field is required";
    }
    return errors;
      
  };

return (
    <><Container>
    <Row>

      <Col md={{ span: 6, offset: 3 }}>
        <h2 className='text-middle'>Create New Product</h2>
        <Form className="formbox" onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" name="productname" value={proValues.productname} onChange={handleChange} placeholder="Enter Product Name" />
            {proErrors.productname && <div className="errorMsg">{proErrors.productname}</div>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicSku">
            <Form.Label>Product SKU</Form.Label>
            <Form.Control type="text" name='sku' value={proValues.sku} onChange={handleChange} placeholder="Enter SKU Number" />
            {proErrors.sku && <div className="errorMsg">{proErrors.sku}</div>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDesc">
            <Form.Label>Product Description</Form.Label>
            <Form.Control as="textarea" name="description" value={proValues.description} onChange={handleChange} aria-label="With textarea" placeholder="Enter Short Description" />
            {proErrors.description && <div className="errorMsg">{proErrors.description}</div>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Product Price</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text>$</InputGroup.Text>
              <Form.Control aria-label="Amount (to the nearest dollar)" name="price" value={proValues.price} onChange={handleChange} />
              <InputGroup.Text>.00</InputGroup.Text>
            </InputGroup>
            {proErrors.price && <div className="errorMsg">{proErrors.price}</div>}
          </Form.Group>

          <Button variant="primary" className="btn-main" type="submit">
            Add Product
          </Button>
        </Form>
      </Col>
    </Row>
  </Container></>
)
}



export default AddProduct;