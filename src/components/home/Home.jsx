import React, { useContext } from 'react'
import { authContext } from '../../contexts/authentication'

export default function Home() {

    const {token} = useContext(authContext)

    return <React.Fragment>

        <h1> {token ? token : 'login to show token'} </h1>

    </React.Fragment>

}
