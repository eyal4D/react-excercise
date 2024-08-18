import React from "react";
import { useNavigate } from "react-router-dom";


function LoginForm(){

    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const name1 = formData.get('name1');
        const name2 = formData.get('name2');

        if(name1 === name2){
            alert("Names should be unique")
        } else{
            navigate(`/game?name1=${encodeURIComponent(name1)}&name2=${encodeURIComponent(name2)}`);
        }

    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Player 1 Name:
                <input type="text" name="name1" />
            </label>
            <label>
                Player 2 Name:
                <input type="text" name="name2" />
            </label>
            <input type="submit" value="Start"/>
        </form>
    );
}
export default function Login(){
    return (
        <LoginForm/>
    )
}