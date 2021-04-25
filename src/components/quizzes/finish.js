import React from 'react';
import Button from "../Button";

const FinishQuiz = ({ next }) => {
  return (
    <div style={{ minHeight: 444 }}>
      <h2 className='font-arial-black font-black text-xl mb-14 mt-16'>Сегодня вы работаете в офисе, и это прекрасно! </h2>

      <p className='font-open-sans font-light mb-20'>
        Но, наверняка, ваша компания тоже стала одной из тех, кто пережил карантинные ограничения в режиме удалённой
        работы. Если вы помните как это было, то можете ответить на дополнительные вопросы о работе на удалёнке. Их
        немного и они принесут дополнительные баллы.
      </p>

      <div>
        <Button className='mr-4 h-16 w-56 px-4'>
          О нет! Я хочу закончить этот тест
        </Button>
        <Button variant='primary' className='h-16 w-56 px-4' onClick={next}>
          Да, хочу ответить про работу на удаленке
        </Button>
      </div>
    </div>
  );
};

export default FinishQuiz;
