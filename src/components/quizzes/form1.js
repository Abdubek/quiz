import React from 'react';
import Radio from "../Radio";
import Select from "../Select";
import Input from "../Input";
import Button from "../Button";
import Score from "../Score";
import {useForm} from "react-hook-form";

const Form1 = ({ setData, point }) => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    setData(data)
  }

  const error = Object.entries(errors)[0]
  console.log(error)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='font-open-sans font-light'>
      <div className='flex justify-between mb-11'>
        <div className='w-5/12 flex justify-between'>
          <span>
            <span className='text-green font-bold'>1. </span>
            Ваш пол
          </span>

          <div className='flex'>
            <Radio id='radio1' label='М' value='male' {...register('sex', { required: true })} />
            <Radio id='radio2' label='Ж' value='female' {...register('sex',{ required: true })} />
          </div>
        </div>
        <div className='w-5/12 flex justify-between items-center'>
          <span>
            <span className='text-green font-bold'>4. </span>
            Наименование вашей компании
          </span>

          <Select {...register('company', { required: true })}>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </Select>
        </div>
      </div>

      <div className='flex justify-between mb-11'>
        <div className='w-5/12 flex justify-between items-center'>
          <span>
            <span className='text-green font-bold'>2. </span>
            Ваш возраст
          </span>

          <Input type='number' {...register('age', { required: true, max: '100' })} />
        </div>
        <div className='w-5/12 flex justify-between items-center'>
          <span>
            <span className='text-green font-bold'>5. </span>
            Вид деятельности вашего предприятия
          </span>

          <Select {...register('activity', { required: true })}>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </Select>
        </div>
      </div>

      <div className='flex justify-between mb-28'>
        <div className='w-5/12 flex justify-between items-center'>
          <span>
            <span className='text-green font-bold'>3. </span>
           Регион проживания
          </span>

          <Select {...register('region', { required: true })}>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
        </div>
      </div>

      <div className='flex justify-between items-center'>
        <div>
          <Button variant='primary' type='submit' className='mr-9'>
            дальше
          </Button>
          <span className='text-red font-open-sans font-medium'>Ошибка: </span>
        </div>

        <div className='flex items-center'>
          <span className='mr-4 font-open-sans font-bold'>Ваши баллы</span>
          <Score point={point} />
          <span className='text-gray-600 font-bold font-open-sans ml-3'>+5</span>
        </div>
      </div>
    </form>
  );
};

export default Form1;
