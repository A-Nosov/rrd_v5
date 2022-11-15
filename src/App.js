import React from 'react'
import { Link, Redirect, Route, Switch, useParams } from 'react-router-dom'

const MainPage = () => {
    return (
        <>
            {/* <Link to="/users">Users list Page</Link> */}
            <h1>MainPage</h1>
        </>
    )
}

const UserListPage = () => {
    const users = [
        { _id: 0, name: 'User 0' },
        { _id: 1, name: 'User 1' },
        { _id: 2, name: 'User 2' },
        { _id: 3, name: 'User 3' },
        { _id: 4, name: 'User 4' }
    ]

    return (
        <>
            <h1>Users Layout</h1>
            <Link to="/">Main Page</Link>
            <h1>User List Page</h1>
            <ul>
                {users.map((u) => (
                    <Link to={`/users/${u._id}/profile`} key={u._id}>
                        <li>{u.name}</li>
                    </Link>
                ))}
            </ul>
        </>
    )
}

const UserPage = () => {
    const { userId } = useParams()
    return (
        <>
            <h1>Users Layout</h1>
            <Link to="/">Main Page</Link>
            <h1>UserPage</h1>
            <ul>
                <li>
                    <Link to="/users">Users list Page</Link>
                </li>
                <li>
                    <Link to={`/users/${userId}/edit`}>Edit this user</Link>
                </li>
            </ul>
            <p>{`userId:${userId}`}</p>
        </>
    )
}

const EditPage = () => {
    const { userId } = useParams()
    return (
        <>
            <h1>Users Layout</h1>
            <Link to="/">Main Page</Link>
            <h1>Edit User Page</h1>
            <ul>
                <li>
                    <Link to={`/users/${userId}/profile`}>
                        User profile Page
                    </Link>
                </li>
                <li>
                    <Link to={`/users/${Number(userId) + 1}/profile`}>
                        Another User
                    </Link>
                </li>
                <li>
                    <Link to="/users">Users list Page</Link>
                </li>
            </ul>
        </>
    )
}

function App() {
    return (
        <>
            <h1>App Layout</h1>
            <Link to="/users">Users list Page</Link>
            <Switch>
                <Route path="/users/:userId?/edit" component={EditPage} />
                <Route path="/users/:userId?/profile" component={UserPage} />
                <Redirect from="/users/:userId" to="/users/:userId?/profile" />
                <Route path="/users" component={UserListPage} />
                <Route path="/" exact component={MainPage} />
                <Redirect to="/" />
            </Switch>
        </>
    )
}

export default App
