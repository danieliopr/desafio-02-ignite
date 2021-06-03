import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';
import { useState } from 'react';

export function App() {

  const [genreId, setGenreId] = useState(1);
 
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
       <SideBar genreId={genreId} onGenreIdChange={setGenreId}></SideBar>
       <Content genreId={genreId}></Content>
    </div>
  )
}