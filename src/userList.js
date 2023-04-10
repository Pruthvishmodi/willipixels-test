import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const UserList = () => {
    const [sortField, setSortField] = useState({
        fieldName: '',
        sortDir: 'asc'
    });
    const user = useSelector(state => state.user);

    const sort = (fieldName) => {
        setSortField((value) => {
            if(value.fieldName === fieldName) {
                return {
                    ...value,
                    sortDir: value.sortDir === 'asc' ? 'desc' : 'asc'
                }
            } 
            return {
                ...value, 
                fieldName 
            }
        })
    }

    if (user.length === 0) return <p>No Data available. Please Add Data from above</p>

    
    return (
        <table>
            <thead>
                <tr>
                    <th onClick={() => sort("firstName")}>First Name</th>
                    <th onClick={() => sort("lastName")}>Last Name</th>
                    <th onClick={() => sort("email")}>Email</th>
                </tr>
            </thead>
            <tbody>
                {user.sort((a, b) => {
                    if (sortField.fieldName) {
                        const nameA = a[sortField.fieldName].toUpperCase(); // ignore upper and lowercase
                        const nameB = b[sortField.fieldName].toUpperCase(); // ignore upper and lowercase
                        if (nameA < nameB) {
                            return sortField.sortDir ===  'asc' ? -1 : 1;
                        }
                        if (nameA > nameB) {
                            return sortField.sortDir ===  'asc' ? 1 : -1;
                        }
                    }

                    // names must be equal
                    return 0;
                }).map(x => <tr key={x.id}>
                    <td>{x.firstName}</td>
                    <td>{x.lastName}</td>
                    <td>{x.email}</td>
                </tr>)}
            </tbody>
        </table>
    )
}

export default UserList
