import React from 'react';
import './App.css';
import styled from 'styled-components';


const Title = styled.a`
  display: none;
  font-size: 35px;
  color: #ffffff !important;
  font-family: sans-serif;
  text-align: center;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 50px;
  cursor: pointer;
`

const Child = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  -webkit-transition: all .5s;
  -moz-transition: all .5s;
  -o-transition: all .5s;
  transition: all .5s;
  background-image: url(https://media.timeout.com/images/101602611/image.jpg);
  :before {
    content: "";
    display: none;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(52,73,94,0.75);
  }
`

const Parent = styled.div`
  width: 45%;
  margin: 20px;
  height: 300px;
  border: 1px solid blue;
  overflow: hidden;
  position: relative;
  float: left;
  display: inline-block;
  cursor: pointer;
  :hover {
    ${Child} {
      -ms-transform: scale(1.2);
      -moz-transform: scale(1.2);
      -webkit-transform: scale(1.2);
      -o-transform: scale(1.2);
      transform: scale(1.2);
      :before {
        display: block;
      }
    }
    ${Title} {
      display: block;
    }
  }
  :focus {
    ${Child} {
      -ms-transform: scale(1.2);
      -moz-transform: scale(1.2);
      -webkit-transform: scale(1.2);
      -o-transform: scale(1.2);
      transform: scale(1.2);
      :before {
        display: block;
      }
    }
    ${Title} {
      display: block;
    }
  }
  @media (min-width: 960px) {
    width: 100%;
    margin: 20px 0px;
  }

`

const Wrapper = styled.div`
  padding: 50px 50px;
  max-width: 1200px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  @media (min-width: 960px) {
    padding: 20px 20px;
  }
`

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
        <Wrapper>
          <Parent >
            <Child>
              <Title>Los Angeles</Title>
            </Child>
          </Parent>
        </Wrapper>
    </div>
  );
}

export default App;
