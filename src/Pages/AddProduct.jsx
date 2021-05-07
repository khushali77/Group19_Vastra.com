import React,{useState} from "react";
import "../Css/AddProduct.css";
import Button from 'react-bootstrap/Button'

const AddProduct = () => {

    const [id,setId] = useState();
    const [title,setTitle] = useState();
    const [desc,setDesc] = useState();
    const [price,setPrice] = useState();
    const [discount,setDiscount] = useState();
    const [quantity,setQuantity] = useState();
    const [category,setCategory] = useState();
    const [brand,setBrand] = useState();
    const [isize,setSize] = useState();

    return(
        <div className="addproduct">
        <h2>Welcome to the Admin Page :)</h2>
        <form>
            <p>ID:</p><input type="text" required/>
            <p>Title:</p><input type="text" required/>
            <p>Description:</p><input type="text" required/>
            <p>Price:</p><input type="number" required/>
            <p>Discount(%):</p><input type="number" defaultValue="0"/>
            <p>Quantity:</p><input type="text" required/>
            <p>Category:</p> <select id="category" name="category" required defaultValue="none">
            <option value="None">None</option>
            <option value="men">men</option>
            <option value="women">women</option>
            <option value="kids">kids</option>
            <option value="traditional">traditional</option>
            </select>
            <p>Brand:</p> <select id="brand" name="brand" required defaultValue="none">
            <option value="None">None</option>
            <option value="champion">champion</option>
            <option value="levis">levis</option>
            <option value="chanel">chanel</option>
            <option value="allen solly">allen solly</option>
            <option value="blossom">blossom</option>
            <option value="versace">versace</option>
            <option value="gap">gap</option>
            <option value="zara">zara</option>
            </select>
            <p>Size:</p> <select id="size" name="size" required defaultValue="none">
            <option value="None">None</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
            </select>
            <p><label htmlFor="img">Select image:</label></p>
            <input type="file" id="img" className="uploadimg" name="img" accept="image/*"></input><br/>
            <Button variant="dark" type="submit">Add Product</Button>
        </form>
        </div>
    );
}

export default AddProduct;