import React from "react"
import Review from "./components/Review"
import * as C from './styles'

function App() {
  return (
    <C.Main>
      <C.Section>
        <C.Title>
          <h2>Reviews</h2>
          <C.Underline></C.Underline>
        </C.Title>
        <Review />
      </C.Section>
    </C.Main>
  )
}

export default App
