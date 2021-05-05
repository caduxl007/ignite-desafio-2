import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';
import { AppContextProvider } from './context/AppContext';

export function App() {
  return (
   <AppContextProvider>
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar />
      <Content />
    </div>
   </AppContextProvider>
  )
}