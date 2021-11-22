import React, { useEffect, useState, useContext } from 'react'
import { Card, Button, Nav, Navbar, NavDropdown, Form, FormControl, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate, useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_COUNTRY } from '../../config';
import { Bas } from '../Bas/Bas';


export default function MyNav() {

    const[data, setData] = useState([])
    const[text, setText] = useState('')
    const navigate = useNavigate()
    const {town} = useParams()
    const Bass = useContext(Bas)


    useEffect(() => {
        axios.get(API_COUNTRY)
        .then((res) => {
            setData(res.data.meals)

        })
    }, [])

    const inpV = (e) => setText(e) 
    const Town = (v) => navigate(`/Drop/${v.strArea}`)
    const SearchBtn = () => navigate(`/Search/${text}`)
    const HomeBtn = () => navigate('/')
    const BasketBtn = () => navigate('/Basket/')


  

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/">Food</Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll >
                        <Nav.Link onClick={() => HomeBtn()} href="/" >Home</Nav.Link>
                        <Nav.Link onClick={() => BasketBtn()} >Basket({Bass.basket.length})</Nav.Link>
                        <NavDropdown title="Country" id="navbarScrollingDropdown">
                            { data.map((v) => {
                                return(
                                    <NavDropdown.Item onClick = {() => Town(v)}>{v.strArea}</NavDropdown.Item>
                                )
                            })}
                            
                        </NavDropdown>    
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                        onChange={(e) => inpV(e.target.value)}
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button onClick={() => SearchBtn()} variant="outline-success">Search</Button>
                    </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
