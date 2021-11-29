import * as React from "react";
import { useForm } from "react-hook-form";
import Headers from "./Header";
import "./styles.css";

let renderCount = 0;

type FormValues = {
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    developer: string;
};

export default function App() {
    renderCount++;
    const { register, handleSubmit } = useForm<FormValues>();

    return (
        <form onSubmit={handleSubmit((data) =>{console.log(data)})}>
            <Headers
                renderCount={renderCount}
                description="Performant, flexible and extensible forms with easy-to-use validation."
            />
            <label htmlFor="firstName">First Name:</label>
            <input {...register("firstName")} id="firstName" />

            <label htmlFor="lastName">Last Name:</label>
            <input {...register("lastName")} />

            <label htmlFor="age">Age</label>
            <input type="number" {...register("age")} id="age" />

            <label htmlFor="gender"></label>
            <select {...register("gender")} id="gender">
                <option value="">Select...</option>
                <option value="male">male</option>
                <option value="female">female</option>
            </select>

            <label htmlFor="developer">Are you a developer?</label>
            <input {...register("developer")} value="yes" type="checkbox" />

            <input type="submit" />
        </form>
    );
}
