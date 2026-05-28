import { useState } from 'react';
import Navbar from './components/navbar';
import MyTasks from './myTasks';
import NewTask from './newTask';
import Congrats from './congrats';

export default function App() {
  const [activePage, setActivePage] = useState('myTasks');

  function renderPage() {
    switch (activePage) {
      case 'myTasks':
        return <MyTasks onNavigate={setActivePage} />;
      case 'newTask':
        return <NewTask onNavigate={setActivePage} />;
      case 'congrats':
        return <Congrats onNavigate={setActivePage} />;
      default:
        return (
          <main className="min-h-screen bg-[--color-page-bg] flex items-center justify-center">
            <p className="text-gray-400 text-sm">Home page coming soon</p>
          </main>
        );
    }
  }

  return (
    <div className="min-h-screen bg-[--color-page-bg]">
      <Navbar activePage={activePage} onNavigate={setActivePage} />
      {renderPage()}
    </div>
  );
}
