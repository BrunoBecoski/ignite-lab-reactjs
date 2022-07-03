import { Link, useParams } from 'react-router-dom';
import { format, isPast } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { CheckCircle, Lock } from 'phosphor-react';
import classNames from 'classnames';

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export function Lesson({
  title,
  slug,
  availableAt,
  type
}: LessonProps) {
  const { slug: currentSlug } = useParams<{ slug: string }>();

  const isLessonAvailable = isPast(availableAt); 
  const availableDateFormatted = format(availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR
  });

  const isActiveLesson = currentSlug === slug;

  return (
    <Link to={`/event/lesson/${slug}`} className="group">
      <span className="dark:text-darkGray-300 text-lightGray-300">
        <p className="first-letter:uppercase">{availableDateFormatted}</p>
      </span>  

      <div 
        className={classNames('rounded border dark:border-darkGray-500 border-lightGray-500 p-4 mt-2 group-hover:border-green-500', {
          'bg-green-500' : isActiveLesson,
        })}
      >
        <header className="flex items-center justify-between">
          { isLessonAvailable ? ( 
            <span className={classNames('text-sm font-medium flex items-center gap-2', {
              'text-white': isActiveLesson,
              'dark:text-lightBlue-500 text-darkBlue-500': !isActiveLesson
            })}>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span className={classNames('text-xs rounded py-[0.125rem] px-2 border font-bold', {
            'border-white text-white': isActiveLesson,
            'border-green-300 dark:text-darkGray-100 text-lightGray-100': !isActiveLesson
          })}>
            { type ==='live' ? 'AO VIVO' : 'AULA PRÁTICA' }
          </span>
        </header>

        <strong className={classNames('mt-5 block', {
          'text-white': isActiveLesson,
          'dark:text-darkGray-200 text-lightGray-200': !isActiveLesson
        })}>
          {title}
        </strong>
      </div>
    </Link>
  );
}