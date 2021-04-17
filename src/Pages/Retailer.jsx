import React from 'react'
import { Table, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'




function ProductList() {
  
    
    return (
        <div className="ProductList1 bg-light">
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <Row className='align-items-center'>
                <Col>
                    <h1>Inventory List</h1>
                </Col>
                <LinkContainer to='/AddItem'>
                <Col className='text-right'>
                <button class="btn btn-outline-secondary" type="button">+Add Item</button>
                    {/* <Button className='my-3'>
                        <i className='fas fa-plus'></i> Add Item
                    </Button> */}
                </Col>
                </LinkContainer>
            </Row>
            
            <br></br><br></br>
            <Table bordered hover responsive className="table-sm">
                <thead>
                    <tr>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th> </th>
                    </tr>
                </thead>

                <tbody>
                    <tr class="bg-light">
                        <td>1</td>
                        <td>Green Round neck Tshirt</td>
                        <td>
                            <LinkContainer to='/AddItem'>
                            <button type="button" class="btn btn-default">Edit Item Detail</button>
                            </LinkContainer>

                        </td>
                    </tr>
                    <tr class="bg-light">
                        <td>2</td>
                        <td>Levis Denim Jeans</td>
                        <td>
                            <LinkContainer to='/AddItem'>
                            <button type="button" class="btn btn-default">Edit Item Detail</button>
                            </LinkContainer>

                        </td>
                    </tr>
                    <tr class="bg-light">
                        <td>3</td>
                        <td>Olive Full Sleeves Tshirt</td>
                        <td>
                            <LinkContainer to='/AddItem'>
                            <button type="button" class="btn btn-default">Edit Item Detail</button>
                            </LinkContainer>
                        </td>
                    </tr>
                    <tr class="bg-light">
                        <td>4</td>
                        <td>Puma Gym drycell Tshirt</td>
                        <td>
                            <LinkContainer to='/AddItem'>
                            <button type="button" class="btn btn-default">Edit Item Detail</button>
                            </LinkContainer>
                        </td>
                    </tr>
                    <tr class="bg-light">
                        <td>5</td>
                        <td>Nike Track Pants</td>
                        <td>
                            <LinkContainer to='/AddItem'>
                            <button type="button" class="btn btn-default">Edit Item Detail</button>
                            </LinkContainer>
                        </td>
                    </tr>
                    <tr class="bg-light">
                        <td>6</td>
                        <td>Green Round neck Tshirt</td>
                        <td>
                            <LinkContainer to='/AddItem'>
                            <button type="button" class="btn btn-default">Edit Item Detail</button>
                            </LinkContainer>
                        </td>
                    </tr>
                    <tr class="bg-light">
                        <td>7</td>
                        <td>Black round-neck Tshirt</td>
                        <td>
                            <LinkContainer to='/AddItem'>
                            <button type="button" class="btn btn-default">Edit Item Detail</button>
                            </LinkContainer>
                        </td>
                    </tr>
                    <tr class="bg-light">
                        <td>8</td>
                        <td>Shorts Grey</td>
                        <td>
                            <LinkContainer to='/AddItem'>
                                <button type="button" class="btn btn-default">Edit Item Detail</button>
                            </LinkContainer>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <br></br><br></br><br></br><br></br><br></br>

            
            
        </div>
    )
}

export default ProductList;