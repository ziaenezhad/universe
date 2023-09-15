import { Component, ReactNode } from 'react';
import './styles/UI.scss';
import TopBar from './components/Topbar';

export default class App extends Component {
  render(): ReactNode {
    console.log('sddf')
    return  <TopBar />;
  }
}
