import React, { useState } from "react"
 import {Form, Input, Rating, Button} from 'semantic-ui-react';

 export const Add_player = ({onNewPlayer})=>{
    const [name, setName] = useState('');
    const [rating, setRating] = useState(1);
    return(
        <Form>
            <Form.Field>
                <Input 
                    placeholder="Player Name"
                    value = {name}
                    onChange={e=>setName(e.target.value)}
                />
            </Form.Field>
        
            <Form.Field>
                <Rating 
                    icon = "star"
                    rating = {rating}
                    maxRating={5}
                    onRate={(_, data)=>{
                        // console.log(data);
                        setRating(data.rating)
                    }}
                />
            </Form.Field>
            <Form.Field>
                    <Button onClick={async()=>{
                        const player = {name,rating};
                        const response = await fetch('/add_player', {
                            method:'POST',
                            headers:{
                                'Content-Type':'application/json'
                            },
                            body:JSON.stringify(player)
                        })
                        if(response.ok){
                            // console.log('response Worked!')
                            onNewPlayer(player);
                            setRating(1);
                            setName("");
                        }
                    }}>
                        Submit
                    </Button>
            </Form.Field>
        </Form>
    );
 }