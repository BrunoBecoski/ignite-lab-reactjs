import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCreateSubscriberMutation } from '../graphql/generated';

import { Logo } from '../components/Logo';
import { Footer } from '../components/Footer';

export function Subscribe() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  async function handleSubscribe(event:FormEvent) {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email
      }
    });

    navigate('/event');
  }

  return (
    <div className="relative overflow-hidden bg-darkGray-900">
      <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center overflow-hidden">
        <img className="max-w-[calc(100vw_+_180px)] top-[-30px] md:top-[10px] absolute" src="/src/assets/react-icon.png" alt="" />
        <div className="w-full max-w-[1440px] flex flex-col md:flex-row items-center justify-around mt-10 md:mt-20 mx-auto z-10">
          <div className="md:max-w-[640px] px-6 flex md:block flex-col justify-center items-center md:px-0 text-center md:text-left">
            <Logo />

            <h1 className="mt-6 md:mt-8 text-3xl md:text-[2.5rem] leading-tight text-darkGray-100">
              Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
            </h1>

            <p className="mt-6 text-sm md:text-base text-darkGray-200 leading-relaxed">
              Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
            </p>
          </div>

          <div className="w-full md:w-auto mt-8 md:mt-0 py-8 px-6 md:p-8 bg-darkGray-700 border-t border-b md:border border-darkGray-500 md:rounded">
            <strong className="text-[1.125rem] md:text-2xl mb-6 block text-darkGray-100">Inscreva-se gratuitamente</strong>

            <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
              <input
                className="bg-darkGray-900 rounded px-5 h-14 text-darkGray-100"
                type="text"
                placeholder="Seu nome completo"
                onChange={event => setName(event.target.value)}
              />
              <input
                className="bg-darkGray-900 rounded px-5 h-14  text-darkGray-100"
                type="text"
                placeholder="Digite seu e-mail"
                onChange={event => setEmail(event.target.value)}
              />

              <button
                type="submit"
                disabled={loading}
                className="mt-4 bg-green-500 text-darkGray-100 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
              >
                Garantir minha vaga
              </button>
            </form>
          </div>
        </div>

        <img src="/src/assets/code-mockup.png" className="mt-4 md:mt-10" alt="" />
      </div>
      <Footer />
    </div>
  );
}