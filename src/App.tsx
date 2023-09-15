import { Component, ReactNode } from 'react';
import './styles/UI.scss';
import TopBar from './components/TopBar';

export default class App extends Component {
  render(): ReactNode {
    console.log('sddf')
    return  <TopBar />;
  }
}
