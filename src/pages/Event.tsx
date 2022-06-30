import { useState } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';

import { Header } from '../components/Header';
import { Video } from '../components/Video';
import { Sidebar } from '../components/SideBar';

export function Event() {
  const { slug } = useParams<{ slug: string }>();

  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header sidebarIsOpen={sidebarIsOpen} setSidebarIsOpen={setSidebarIsOpen} />
      <main className="flex flex-1">
        { slug 
          ? <Video 
              className={classNames('md:block', {
                'block': !sidebarIsOpen,
                'hidden': sidebarIsOpen
              })}
              lessonSlug={slug} 
            /> 
          : <div 
              className={classNames('flex-1 text-center pt-40 md:block', {
                'block': !sidebarIsOpen,
                'hidden': sidebarIsOpen
              })}
            >
              <h1 className="text-gray-100 text-2xl font-bold">Selecione alguma aula</h1>
            </div>
        }
        
        <Sidebar 
          className={classNames('md:block', {
            'block': sidebarIsOpen,
            'hidden': !sidebarIsOpen
          })}
        />
        
      </main>
    </div>
  );
}