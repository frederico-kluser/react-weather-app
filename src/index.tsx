import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Flex from './components/Flex';
import Title from './components/Title';
import SubTitle from './components/SubTitle';
import MainText from './components/MainText';
import Image from './components/Icon';

ReactDOM.render(
  <React.StrictMode>
    <Flex>
      <Title text="Belgrade, Serbia" />
      <SubTitle text="Belgrade, Serbia" />
      <Flex row>
        <MainText temperature='23' status='Partly Sunny' lastUpdate='1:48pm' />
        <Image icon='cloudDay' />
      </Flex>
      {/* 
      <Flex row></Flex>
      <Flex row></Flex> */}
    </Flex>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
