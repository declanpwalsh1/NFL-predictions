import React from 'react';
import {useForm} from '../hooks/useForm';

import axios from 'axios';

const Register = () => {
    const [values, handleChange] = useForm({email: "", password: "", name:""});
    // const [final, handleSubmit] = useState(false);
    // const [finalForm, setFinalForm] = useState({email:"", password: "", name:""}); 

    // useEffect(() => {
    //     console.log('render')

    //     return () => {
    //         console.log('unmount');
    //     }
    // }, [values.email])
    const submitForm = (e) => {
        e.preventDefault();
        //post data
        axios.post('http://localhost:5000/api/user/register/',
                values
            )
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })

        console.log(values);
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <label>Email</label>
                <input 
                    name="email" 
                    value={values.email} 
                    onChange={handleChange}
                />
                <label>Name</label>
                <input 
                    name="name" 
                    value={values.name} 
                    onChange={handleChange}
                />
                <label>Password</label>
                <input 
                    type='password' 
                    name='password'
                    value={values.password} 
                    onChange={handleChange}
                />
                <input type="submit" value="submit"></input>
            </form>
            <p>Email: {values.email}</p>
            <p>Name: {values.name}</p>
            <p>Password: {values.password}</p>

        </div>
    )
}

export default Register;