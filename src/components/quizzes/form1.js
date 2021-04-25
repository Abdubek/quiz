import React from 'react';
import Radio from "../Radio";
import Select from "../Select";
import Input from "../Input";
import Button from "../Button";
import Score from "../Score";
import {useForm} from "react-hook-form";
import Progress from "../Progress";
import QuizFooter from "../QuizFooter";

const Form1 = ({ setData, point, data, step }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: data
  })

  const onSubmit = (data) => {
    setData(data)
  }

  const error = Object.entries(errors)[0]

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='font-open-sans font-light' style={{ minHeight: 500 }}>
      <Progress className='sm:mb-16 mb-8' percent={Math.min((100 / 16) * step, 100)} />

      <h3 className='text-xl font-arial-black font-black sm:mb-12 mb-6 inline-block'>О вас и вашей компании</h3>

      <div className='flex lg:flex-row flex-col justify-between mb-8'>
        <div className='xl:w-5/12 lg:w-1/2 w-full flex sm:flex-row flex-col justify-between lg:mb-0 mb-8'>
          <span className='sm:mb-0 mb-4 inline-block'>
            <span className='text-green font-bold'>1. </span>
            Ваш пол
          </span>

          <div className='flex'>
            <Radio id='radio1'
                   label='М'
                   value='male'
                   error={errors.sex}
                   {...register('sex', { required: 'Укажите ваш пол' })} />
            <Radio id='radio2'
                   label='Ж'
                   value='female'
                   error={errors.sex}
                   className='ml-4'
                   {...register('sex',{ required: 'Укажите ваш пол' })} />
          </div>
        </div>
        <div className='xl:w-5/12 lg:w-1/2 w-full lg:pl-4 flex sm:flex-row flex-col justify-between sm:items-center items-start'>
          <span className='sm:mb-0 mb-4 inline-block pr-2'>
            <span className='text-green font-bold'>4. </span>
            Наименование вашей компании
          </span>

          <Select error={errors.company} {...register('company', { required: 'Укажите наименование вашей компании' })}>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </Select>
        </div>
      </div>

      <div className='flex lg:flex-row flex-col justify-between mb-8'>
        <div className='xl:w-5/12 lg:w-1/2 w-full flex sm:flex-row flex-col justify-between sm:items-center items-start lg:mb-0 mb-8'>
          <span className='sm:mb-0 mb-4 inline-block'>
            <span className='text-green font-bold'>2. </span>
            Ваш возраст
          </span>

          <Input error={errors.age}
                 type='number'
                 {...register('age', {
                   required: 'Укажите ваш возраст',
                   max: {
                     value: '100',
                     message: 'Напишите корректный возраст'
                   }
                 })} />
        </div>
        <div className='xl:w-5/12 lg:w-1/2 w-full lg:pl-4 flex sm:flex-row flex-col justify-between sm:items-center items-start'>
          <span className='sm:mb-0 mb-4 inline-block'>
            <span className='text-green font-bold'>5. </span>
            Вид деятельности вашего предприятия
          </span>

          <Select error={errors.activity} {...register('activity', { required: 'Укажите вид деятельности вашего предприятия' })}>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </Select>
        </div>
      </div>

      <div className='flex justify-between sm:mb-28 mb-10'>
        <div className='xl:w-5/12 lg:w-1/2 w-full flex sm:flex-row flex-col justify-between sm:items-center items-start'>
          <span className='sm:mb-0 mb-4 inline-block'>
            <span className='text-green font-bold'>3. </span>
           Регион проживания
          </span>

          <Select error={errors.region} {...register('region', { required: 'Укажите регион проживания' })}>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
        </div>
      </div>

      <QuizFooter error={error} point={point} />
    </form>
  );
};

export default Form1;
