import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import { API_ABOUT } from '../../config'
import Item from '../Item'

export default function About() {

    const[data, setData] = useState([])
    const {name} = useParams()

    useEffect(() => {
       axios.get(API_ABOUT + name)
       .then((res) => {
           setData(res.data.meals)
           console.log(res);
       })
    }, [])

    return (
        <div className={"row my-2" }>
            {data.map((v) => {
                return(
                <>
                    <div className={'col-6'}>
                        <img className={'img-fluid'} src={v.strMealThumb} />
                    </div>
                    <div className={'col-6'}>
                        <h3> Name: {v.strMeal} </h3>
                        <h3>Country: {v.strArea} </h3>
                        <h4> {v.strCategory} </h4>
                        <h5> {v.strInstructions} </h5>
                        <a target={'_blank'} href={v.strYoutube}> Link to Youtube</a>

                    </div>
                    
                </>

                )
                
            })}

        </div>
    )
}
