import React from 'react'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'




function ProductList() {
  
    
    return (
        <div class="bg-light">
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <Row className='align-items-center'>
                <Col>
                    <h1>Product List</h1>
                </Col>
            </Row>
                {/* <Col className='text-right'>
                    <Button className='my-3'>
                        <i className='fas fa-plus'></i> Add Product
                    </Button>
                </Col> */}
            
            <br></br><br></br>
            <Table striped bordered hover responsive className="table-sm">
                <thead>
                    <tr>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th> </th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Green Round neck Tshirt</td>
                        <td>
                            <LinkContainer to='/AddItem'>
                                <Button variant='light' className='btn-sm'>
                                <i className='fas fa-edit'></i>
                                </Button>
                            </LinkContainer>

                            <Button variant='danger' className='btn-sm'>
                                <i className='fas fa-trash'></i>
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Levis Denim Jeans</td>
                        <td>
                            <LinkContainer to='/AddItem'>
                                <Button variant='light' className='btn-sm'>
                                <i className='fas fa-edit'></i>
                                </Button>
                            </LinkContainer>

                            <Button variant='danger' className='btn-sm'>
                                <i className='fas fa-trash'></i>
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Olive Full Sleeves Tshirt</td>
                        <td>
                            <LinkContainer to='/AddItem'>
                                <Button variant='light' className='btn-sm'>
                                <i className='fas fa-edit'></i>
                                </Button>
                            </LinkContainer>

                            <Button variant='danger' className='btn-sm'>
                                <i className='fas fa-trash'></i>
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Puma Gym drycell Tshirt</td>
                        <td>
                            <LinkContainer to='/AddItem'>
                                <Button variant='light' className='btn-sm'>
                                <i className='fas fa-edit'></i>
                                </Button>
                            </LinkContainer>

                            <Button variant='danger' className='btn-sm'>
                                <i className='fas fa-trash'></i>
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Nike Track Pants</td>
                        <td>
                            <LinkContainer to='/AddItem'>
                                <Button variant='light' className='btn-sm'>
                                <i className='fas fa-edit'></i>
                                </Button>
                            </LinkContainer>

                            <Button variant='danger' className='btn-sm'>
                                <i className='fas fa-trash'></i>
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Green Round neck Tshirt</td>
                        <td>
                            <LinkContainer to='/AddItem'>
                                <Button variant='light' className='btn-sm'>
                                <i className='fas fa-edit'></i>
                                </Button>
                            </LinkContainer>

                            <Button variant='danger' className='btn-sm'>
                                <i className='fas fa-trash'></i>
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Black round-neck Tshirt</td>
                        <td>
                            <LinkContainer to='/AddItem'>
                                <Button variant='light' className='btn-sm'>
                                <i className='fas fa-edit'></i>
                                </Button>
                            </LinkContainer>

                            <Button variant='danger' className='btn-sm'>
                                <i className='fas fa-trash'></i>
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Shorts Grey</td>
                        <td>
                            <LinkContainer to='/AddItem'>
                                <Button variant='light' className='btn-sm'>
                                <i className='fas fa-edit'></i>
                                </Button>
                            </LinkContainer>

                            <Button variant='danger' className='btn-sm'>
                                <i className='fas fa-trash'></i>
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <br></br><br></br><br></br>
            
            <Col className='text-right'>
                    <Button className='my-3'>
                        <i className='fas fa-plus'></i> Add Product
                    </Button>
            </Col>
            
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </div>
    )
}

export default ProductList;