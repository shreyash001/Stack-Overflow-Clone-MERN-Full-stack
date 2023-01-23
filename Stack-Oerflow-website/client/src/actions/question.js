import React from 'react'
import * as api from '../api'

export const askQuestion = (questionData, navigate) => async(dispatch) => {
  try {
    const {data} = await api.postQuestion(questionData)
    dispatch({ type: "POST_QUESTION", payload: data})
    navigate('/')
  } catch (error) {
    console.log(error)
  }
}
