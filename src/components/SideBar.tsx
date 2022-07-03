import { useGetLessonsQuery } from '../graphql/generated';

import { ChangeTheme } from './ChangeTheme';
import { Lesson } from './Lesson';

export function Sidebar({ className }: any) {
  const { data } = useGetLessonsQuery();

  return (
    <aside 
      className={`w-full md:w-[348px] dark:bg-darkGray-700 bg-lightGray-700 p-6 border-l dark:border-darkGray-600 border-lightGray-600 overflow-hidden ${className}`}
    >
      <span className="font-bold text-2xl pb-6 mb-6 border-b dark:border-darkGray-500 border-lightGray-500 flex justify-between">
        Cronograma de aulas
      <ChangeTheme />
      </span>


      <div className="flex flex-col gap-8">
        {
          data?.lessons.map(lesson => {
            return(
              <Lesson
                key={lesson.id}
                title={lesson.title}
                slug={lesson.slug}
                availableAt={new Date(lesson.availableAt)}
                type={lesson.lessonType}
              />
            )
          })
        }
      </div>
    </aside>
  );
}