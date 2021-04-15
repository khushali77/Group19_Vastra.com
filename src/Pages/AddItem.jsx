import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
// import { Link } from 'react-router-dom'


function AddProduct() {


    return (
        <div className="Add-Product bg-light">
            <br></br><br></br><br></br><br></br><br></br><br></br>

            {/* <Link to ='/Retailer'>
                Go Back
            </Link>

            <br></br><br></br> */}

            <Row className='align-items-center'>
                <Col className='text-center'>
                    <h1>Add Product</h1>
                </Col>

            </Row>
            
            <br></br><br></br><br></br>

            <Form>
                <Form.Group controID="name">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" className='text-center' />
                    
                </Form.Group>
            </Form>

            <Form>
                <Form.Group controID="price">
                    <Form.Label>Product Price</Form.Label>
                    <Form.Control type="number" placeholder="Price" className='text-center' />
                    
                </Form.Group>
            </Form>

            <Form>
                <Form.Group controID="image">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="file upload" placeholder="Add Image" className='text-center' />
                    
                </Form.Group>
            </Form>

            <Form>
                <Form.Group controID="brand">
                    <Form.Label>Product Brand</Form.Label>
                    <Form.Control type="text" placeholder="Enter Brand" className='text-center' />
                    
                </Form.Group>
            </Form>

            <Form>
                <Form.Group controID="stock">
                    <Form.Label>Stock</Form.Label>
                    <Form.Control type="number" placeholder="Enter Quantity" className='text-center' />
                    
                </Form.Group>
            </Form>

            <Form>
                <Form.Group controID="category">
                    <Form.Label>Catoegory of Product</Form.Label>
                    <Form.Control type="text" placeholder="Enter category" className='text-center' />
                    
                </Form.Group>
            </Form>

            <Form>
                <Form.Group controID="description">
                    <Form.Label>Product Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter Description" className='text-center' />
                    
                </Form.Group>
            </Form>
            
            <br></br><br></br>
            
            <LinkContainer to='/AddItem'>
                <Col className='text-center'>
                    <Button className='my-3'>
                        <i className='fas fa-plus'></i> Update
                    </Button>
                
                </Col>
            </LinkContainer>
            <br></br><br></br>
            
           
        </div>
    )
}

export default AddProduct;
