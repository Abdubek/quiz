import React from 'react';
import Button from "../Button";
import Score from "../Score";

const QuizFooter = ({ error, point, back }) => {
  return (
    <div className='flex sm:flex-row flex-col justify-between items-center'>
      <div className='sm:mb-0 mb-6 flex md:flex-row flex-col items-center'>
        {back && <span className='mr-6 font-open-sans font-bold cursor-pointer md:inline-block hidden' onClick={back}>Назад</span>}
        <Button variant='primary' type='submit' className='sm:mr-9 md:mb-0 mb-3'>
          дальше
        </Button>
        {back && <span className='mr-6 font-open-sans font-bold cursor-pointer mt-4 md:hidden inline-block' onClick={back}>Назад</span>}
        {error && <span className='text-red font-open-sans font-medium md:pl-4'>Ошибка: {error[1].message}</span>}
      </div>

      <div className='flex items-center justify-center bg-gradient-to-b from-white to-gray py-4 sm:w-auto w-full rounded-2xl border border-gray sm:border-none sm:bg-none sm:justify-end'>
        <span className='mr-4 font-open-sans font-bold whitespace-nowrap'>Ваши баллы</span>
        <Score point={point} />
        <span className='text-gray-600 font-bold font-open-sans ml-3'>+5</span>
      </div>
    </div>
  );
};

export default QuizFooter;
