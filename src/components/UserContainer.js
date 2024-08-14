import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'

function UserContainer({ user, fetchUsers }) {
    useEffect(() => {
        fetchUsers()
    }, [])
    return user.loading ? (
        <h2>Loading</h2>
    ) : user.error ? (
        <h2>{user.error}</h2>
    ) : (
        <div>
            <h2>User List</h2>
            <div>
                {user.users && user.users.length > 0 ? (
                    user.users.map((user, index) => (
                        <p key={index}>{user}</p>
                    ))
                ) : (
                    <p>No users found</p>
                )}
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserContainer)
