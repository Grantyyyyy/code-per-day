export default function ProfileCard() {

    const user = {
        name: "Grantyy",
        lastName: "Doe",
        age: 25,
        isStudent: true
    }

    function Car(props : {brand: string}) {
        return <h2>This is a {props.brand}!</h2>;

    }

    function Phone(props : {model: string}) {
        return <h2>This is a {props.model} phone!</h2>;
    }

    return (
        <div className="profile-card">
            <h1> Hi I'm {user.name}, I'm {user.age} years old, </h1>
        
            <Car brand="Toyota" />
            <Car brand="Honda" />
            <Car brand="Ford" />
        
            <Phone model="iPhone" />
            <Phone model="Samsung" />
            <Phone model="Google Pixel" />
        </div>
    )
}