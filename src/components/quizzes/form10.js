import React from 'react';
import Radio from "../Radio";
import Button from "../Button";
import Score from "../Score";
import {useForm} from "react-hook-form";
import Input from "../Input";
import Progress from "../Progress";
import {copy} from "../../utils";
import QuizFooter from "../QuizFooter";

const Form10 = ({ setData, point, back, data, step }) => {
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
        <span className='inline-block mb-12 max-w-lg text-gray-700'>
          <span className='font-bold'>Внимание:</span> <br/>
          Ответ на этот вопрос принесёт максимальное количество баллов
        </span><br/>

        <span className='mb-5 inline-block'>
          <span className='text-green font-bold'>18. </span>
          Не могли бы вы поделиться контактами вашего IT-специалиста или<br/> того лица, который отвечает у вас за интернет?
        </span>

        <div className='flex flex-wrap lg:flex-row flex-col lg:items-center items-start mb-8'>
          <Input placeholder='Мобильный телефон'
                 className='mb-4 lg:w-48 w-full'
                 {...register('phone')}/>
          <span className='font-bold mx-4 mb-4'>ИЛИ</span>
          <Input placeholder='E-mail'
                 className='mb-4 lg:w-48 w-full'
                 {...register('email')}/>
          <span className='font-bold mx-4 mb-4'>ИЛИ</span>
          <Button variant='primary' className='mb-4 lg:w-48 w-full' onClick={() => copy(window.location.href)}>
            ссылка на этот тест
          </Button>
        </div>
      </div>

      <QuizFooter error={error} point={point} back={back} />
    </form>
  );
};

export default Form10;
