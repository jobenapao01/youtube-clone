import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import {Menu, Navbar} from '../components'
import { darkTheme, lightTheme } from '../utils/theme'
import { Container, Main, Wrapper } from './app.elements'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import {Homepage, Signin, Videopage} from '../pages'


const App = () => {
    const [darkMode, setdarkMode] = useState(true)
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <Container>
      <BrowserRouter>
        <Menu setdarkMode={setdarkMode} darkMode={darkMode}/>
        <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path='/'>
                  <Route index element={<Homepage />}/>
                  <Route path='signin' element={<Signin />}/>
                  <Route path='video'>
                    <Route path=':id' element={<Videopage/>} />
                  </Route>
                  </Route>
              </Routes>
            </Wrapper>
        </Main>
        </BrowserRouter>
    </Container>
    </ThemeProvider>
  )
}

export default App