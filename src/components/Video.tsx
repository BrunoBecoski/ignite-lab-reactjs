import { DefaultUi, Player, Youtube } from '@vime/react';
import { CaretRight, DiscordLogo, FileArrowDown, Image, Lightning } from 'phosphor-react';

import { useGetLessonBySlugQuery } from '../graphql/generated';

import { Footer } from './Footer';

import '@vime/core/themes/default.css';

interface VideoProps {
  lessonSlug: string;
  className: any;
}

export function Video({ lessonSlug, className }: VideoProps ) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: lessonSlug
    }
  });

  if (!data || !data.lesson) {
    return (
      <div className={`flex-1 flex md:flex pt-40 justify-center ${className === 'block' ? 'flex' : 'hidden'}`}>
        <div className="w-10 h-10 rounded-full border-4 border-green-300 border-r-gray-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className={`flex-1 w-full ${className}`}>
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-6 md:p-8 w-auto md:max-w-[1100px] mx-auto">
        <div className="flex items-start flex-col md:flex-row gap-6 md:gap-16">
          <div className="flex-1">
            <h1 className="text-lg md:text-2xl font-bold">
              {data.lesson.title}
            </h1>
            <p className="mt-4 text-sm md:text-base dark:text-darkGray-200 text-lightGray-200 leading-relaxed">
              {data.lesson.description}
            </p>

            {data.lesson.teacher && (
              <div className="flex items-center gap-4 mt-6">
                <img 
                  className="h-16 w-16 rounded-full border-2 dark:border-lightBlue-500 border-darkBlue-500"
                  src={data.lesson.teacher.avatarURL}
                  alt={'Avatar ' + data.lesson.teacher.name}
                />
  
                <div className="leading-relaxed">
                  <strong className="font-bold text-lg md:text-2xl block">{data.lesson.teacher.name}</strong>
                  <span className="dark:text-darkGray-200 text-lightGray-200 text-sm block">{data.lesson.teacher.bio}</span>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col w-full md:w-auto gap-4">
            <a href="#" className="p-4 text-sm text-white bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
              <DiscordLogo size={24} />
              Comunidade do Discord
            </a>

            <a href="#" className="p-4 text-sm dark:text-lightBlue-500 text-darkBlue-500 border dark:border-lightBlue-500 border-darkBlue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:dark:bg-lightBlue-500 hover:bg-darkBlue-500 hover:text-white transition-colors">
              <Lightning size={24} />
              Acesse o desafio              
            </a>
          </div>
        </div>
        
        <div className="gap-4 md:gap-8 mt-16 md:mt-20 grid md:grid-cols-2 w-full">
          <a href="#" className="dark:bg-darkGray-700 bg-lightGray-700 rounded overflow-hidden flex items-stretch justify-between gap-6 hover:dark:bg-darkGray-600 hover:bg-lightGray-600 transition-colors">
            <div className="bg-green-700 text-white h-full p-2 md:p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-4 md:py-6 leading-relaxed">
              <strong className="text-lg md:text-2xl">Material complementar</strong>
              <p className="text-xs md:text-sm dark:text-darkGray-200 text-lightGray-200 mt-[2px] md:mt-2">
                Acesse o material complementar para acelerar o seu desenvolvimento
              </p>
            </div>
            <div className="h-full p-2 md:p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
          
          <a href="#" className="dark:bg-darkGray-700 bg-lightGray-700 rounded overflow-hidden flex items-stretch justify-between gap-6 hover:dark:bg-darkGray-600 hover:bg-lightGray-600 transition-colors">
            <div className="bg-green-700 text-white h-full p-2 md:p-6 flex items-center">
              <Image size={40} />
            </div>
            <div className="py-4 md:py-6 leading-relaxed">
              <strong className="text-lg md:text-2xl">Wallpaper exclusivos</strong>
              <p className="text-xs md:text-sm dark:text-darkGray-200 text-lightGray-200 mt-[2px] md:mt-2">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
              </p>
            </div>
            <div className="h-full p-2 md:p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}