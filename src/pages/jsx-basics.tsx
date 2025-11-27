





export default function JsxBasics() {

const name = "Grantyy";


const user = {
    name: "Grantyy",
    lastName: "Doe",
    age: 25,
    isStudent: true
}

const formatName = (user: {name: string, lastName: string}) => {
    return `${user.name} ${user.lastName}`;
}

const getGreeting = (user: {name: string, lastName: string}) => {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    } else {
        return <h1>Hello, Stranger.</h1>;
    }
}


    return (
        <>
            <h1>Hi I'm {name}, I'm {user.age} years old, {user.isStudent ? "I'm a student" : "I'm not a student"}</h1>

            <h2>Formatted Name: {formatName(user)}</h2>

            {getGreeting(user)}
        </>
    )
}