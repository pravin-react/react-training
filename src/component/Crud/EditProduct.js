import { Form ,Container,Row,Button,Col,InputGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState,useEffect ,useReducer } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import ProductReducer from './ProductReducer';
const initialState = {
    products: {},  
    error: ''
};
function EditProduct() {
    const params = useParams();
    const initialvalues = {productname:"",sku:"",description:"",price:""}
    const [proValues, setProValues] = useState(initialvalues);
    const [proErrors, setProErrors] = useState({});
    const navigate = useNavigate();

    const [state, dispatch] = useReducer(ProductReducer, initialState);

    useEffect(() => {
        axios.get("https://62f37b4aa84d8c9681244fcd.mockapi.io/api/v1/products/"+ params.id).then((response) => {
            setProValues(response.data.product);
            console.log(response.data);
          });
    }, []);


    const onSubmit = (e) => {
      e.preventDefault();
              let error = validate(proValues)
              setProErrors(error);
              console.log(proValues);
              if(Object.keys(error).length === 0){ 
                axios.put("https://62f37b4aa84d8c9681244fcd.mockapi.io/api/v1/products/"+ params.id, {
                    productname: proValues.productname,
                    sku: proValues.sku,
                    description: proValues.description,
                    price: proValues.price,
                    product:({
                        productname: proValues.productname,
                        sku: proValues.sku,
                        description: proValues.description,
                        price: proValues.price,
                    })

                  })
                  .then((response) => {
                    dispatch({
                        type: "EDIT_PRODUCT",
                        payload: response.data.product
                      })
                  });
                navigate("/products");
              }
    }
  
  const handleChange = (e) =>{
      const{name,value} = e.target;
      setProValues({...proValues, [name]:value});
  }
  
    const validate = (values) =>{
      const errors = {}
      const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    
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
    <Container>
        <Row>
        
        <Col md={{ span: 6, offset: 3 }}>
            <h2 className='text-middle'>Edit Product</h2>
        <Form className="formbox" onSubmit={onSubmit} >
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
                <Form.Control  as="textarea" name="description" value={proValues.description} onChange={handleChange} aria-label="With textarea" placeholder="Enter Short Description" />
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

            <Button variant="primary"  className="btn-main" type="submit">
                Update Product
            </Button>
            </Form>  
            </Col> 
        </Row>
    </Container>
)
}

export default EditProduct;