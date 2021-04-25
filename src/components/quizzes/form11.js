import React from 'react';
import Radio from "../Radio";
import Button from "../Button";
import Score from "../Score";
import {useForm} from "react-hook-form";
import Input from "../Input";

const Form11 = ({ setData, point, back, data }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: data
  })

  const onSubmit = (data) => {
    setData(data)
  }

  const error = Object.entries(errors)[0]

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='font-open-sans font-light flex flex-col' style={{ minHeight: 444 }}>
      <h3 className='text-xl font-arial-black font-black sm:mb-12 mb-6 inline-block'>О качестве интернета в вашем офисе</h3>

      <div className='flex-1'>
        <span className='inline-block mb-12 max-w-lg text-gray-700'>
          <span className='font-bold'>Внимание:</span> <br/>
          В этом разделе отвечайте, пожалуйста, только про качество интернета именно в офисе
        </span><br/>

        <span className='mb-5 inline-block'>
          <span className='text-green font-bold'>19. </span>
          Как вы оцениваете качество интернет-соединения в вашем офисе по шкале от 1 до 5?
        </span>

        <div className='flex flex-wrap items-center'>

        </div>
      </div>

      <div className='flex sm:flex-row flex-col justify-between items-center'>
        <div className='sm:mb-0 mb-6 flex items-center sm:flex-row flex-col flex-col-reverse'>
          <span className='mr-6 font-open-sans font-bold cursor-pointer sm:mt-0 mt-4' onClick={back}>Назад</span>
          <Button variant='primary' type='submit' className='sm:mr-9'>
            дальше
          </Button>
          {error && <span className='text-red font-open-sans font-medium'>Ошибка: {error[1].message}</span>}
        </div>

        <div className='flex items-center justify-center bg-gradient-to-b from-white to-gray py-4 sm:w-auto w-full rounded-2xl border border-gray sm:border-none sm:bg-none sm:justify-end'>
          <span className='mr-4 font-open-sans font-bold'>Ваши баллы</span>
          <Score point={point} />
          <span className='text-gray-600 font-bold font-open-sans ml-3'>+5</span>
        </div>
      </div>
    </form>
  );
};

export default Form11;
