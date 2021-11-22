import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

export default function Home({ data }) {
    return (
        <div className={'row'}>
            {data.map((v) => {
                return(
                    <div className={'col-3 my-2'} >
                    <Card style={{ width: '17rem' }}>
                        <Link to={`/Categories/${v.strCategory}`} >
                            <Card.Img variant="top" src={v.strCategoryThumb} />
                            <Card.Body>
                                <Card.Title>{v.strCategory}</Card.Title>
                            </Card.Body>
                        </Link> 
                    </Card>
                    </div>
                )
            })}          
        </div>
    )
}
