export default function ProfileCard() {

    const user = {
        name: "Grantyy",
        lastName: "Doe",
        age: 25,
        isStudent: true
    }

    return (
        <div className="profile-card">
            <h1> Hi I'm {user.name}, I'm {user.age} years old, </h1>
        </div>
    )
}