import React from 'react';
import Radio from "../Radio";
import Button from "../Button";
import Score from "../Score";
import {useForm} from "react-hook-form";
import Progress from "../Progress";
import QuizFooter from "../QuizFooter";

const Form9 = ({ setData, point, back, data, step }) => {
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

      <h3 className='text-xl font-arial-black font-black sm:mb-12 mb-6 inline-block'>Об интернете в вашем офисе</h3>

      <div className='flex-1'>
        <span className='mb-5 inline-block'>
          <span className='text-green font-bold'>16. </span>
          Есть ли в вашей компании специалист по IT-вопросам?
        </span>

        <div className='flex flex-wrap'>
          <Radio id='specialist1'
                 label='Да, достаточно'
                 value='Да, достаточно'
                 className='md:w-1/3 w-full mb-5'
                 labelClassName='justify-between flex-1 sm:pr-10'
                 error={errors.specialist}
                 {...register('specialist', { required: 'Выберите стоимость интернета' })}
          />
          <Radio id='specialist2'
                 label='Да, достаточно, но не устраивает качество соединения'
                 value='Да, достаточно, но не устраивает качество соединения'
                 className='md:w-1/3 w-full mb-5'
                 labelClassName='justify-between flex-1 sm:pr-10'
                 error={errors.specialist}
                 {...register('specialist', { required: 'Выберите стоимость интернета' })}
          />
          <Radio id='specialist3'
                 label='Нет, не достаточно. Планируем переподключаться'
                 value='Нет, не достаточно. Планируем переподключаться'
                 className='md:w-1/3 w-full mb-5'
                 labelClassName='justify-between flex-1 sm:pr-10'
                 error={errors.specialist}
                 {...register('specialist', { required: 'Выберите стоимость интернета' })}
          />
        </div>
      </div>

      <QuizFooter error={error} point={point} back={back} />
    </form>
  );
};

export default Form9;
