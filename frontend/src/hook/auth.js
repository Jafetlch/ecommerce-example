import React, { useEffect } from 'react'
import { auth } from '../store/actions/user_actions'

import { useSelector, useDispatch } from 'react-redux'

export default function(ComposedClass, reload, adminRoute = null) {
  const AuthenticationCheck = props => {
    let user = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(async () => {
      dispatch(auth()).then(async response => {
        if (await !response.payload.isAuth) {
          if (reload) {
            props.history.push('/login')
          }
        } else {
          if (adminRoute && !response.payload.isAdmin) {
            props.history.push('/')
          } else {
            if (reload === false) {
              props.history.push('/')
            }
          }
        }
      })
    }, [dispatch, props.history, user.googleAuth])
    return <ComposedClass {...props} user={user} />
  }
  return AuthenticationCheck
}
