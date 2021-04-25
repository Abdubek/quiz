import React from 'react';
import Button from "../Button";
import Score from "../Score";
import {useForm} from "react-hook-form";
import Input from "../Input";
import Progress from "../Progress";
import QuizFooter from "../QuizFooter";

const Form4 = ({ setData, point, back, data, step }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: data
  })

  const onSubmit = (data) => {
    setData(data)
  }

  const error = Object.entries(errors)[0]

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='font-open-sans font-light flex flex-col' style={{ minHeight: 500 }}>
      <Progress className='sm:mb-16 mb-8' percent={Math.min((100 / 16) * step, 100)} />

      <h3 className='text-xl font-arial-black font-black sm:mb-12 mb-6 inline-block'>О вас и вашей компании</h3>

      <div className='flex-1'>
        <span className='mb-5 inline-block'>
          <span className='text-green font-bold'>8. </span>
          Укажите сайт вашей компании, если он есть <br />
          <span className='font-light font-open-sans text-md text-gray-700'>*необязательно</span>
        </span>

        <div className='flex flex-wrap mb-8'>
          <Input placeholder='Другое' {...register('website')} />

        </div>
      </div>

      <QuizFooter error={error} point={point} back={back} />
    </form>
  );
};

export default Form4;
