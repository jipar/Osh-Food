import React, {useState, useEffect, useContext} from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Bas } from './Bas/Bas'


export default function Item({v}) {

    // const[data, setData] = useState([])
    
    const Bass = useContext(Bas)


    return (
        <>
            <Card className ={'col-3 m-2'} style={{ width: '16rem', padding: 10 }}>
                <Link to={`/About/${v.idMeal}`} >
                    <Card.Img className={'img-fluid'} variant="top" src={v.strMealThumb} />
                    <Card.Body>
                        <Card.Title>{v.strMeal}</Card.Title>
                    </Card.Body>
                </Link>
                <Button onClick={() => Bass.Toggle(v)} variant={Bass.basket.includes(v) ? 'danger' : 'primary'}>
                    {Bass.basket.includes(v) ? 'Delete' : 'Add'}
                </Button>
            </Card>     
        </>
    )
}
