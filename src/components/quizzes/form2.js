import React from 'react';
import Radio from "../Radio";
import Button from "../Button";
import Score from "../Score";
import {useForm} from "react-hook-form";
import Input from "../Input";
import Progress from "../Progress";
import QuizFooter from "../QuizFooter";

const Form2 = ({ setData, point, back, data, step }) => {
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
    defaultValues: data
  })

  const otherLocated = watch('other_located')

  const onSubmit = (data) => {
    setData(data)
  }

  const error = Object.entries(errors)[0]

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='font-open-sans font-light flex flex-col' style={{ minHeight: 444 }}>
      <Progress className='sm:mb-16 mb-8' percent={Math.min((100 / 16) * step, 100)} />

      <h3 className='text-xl font-arial-black font-black sm:mb-12 mb-6 inline-block'>О вас и вашей компании</h3>

      <div className='flex-1'>
        <span className='mb-5 inline-block'>
          <span className='text-green font-bold'>6. </span>
          Где размещается ваша компания?
        </span>

        <div className='flex flex-wrap'>
          <Radio id='locate1'
                 label='Бизнес-центр'
                 value='Бизнес-центр'
                 className='md:w-1/3 w-full mb-5'
                 labelClassName='justify-between flex-1 sm:pr-10'
                 error={errors.located}
                 {...register('located', { required: { value: !otherLocated, message: 'Выберите место' }})}
          />
          <Radio id='locate2'
                 label='Торговый центр'
                 value='Торговый центр'
                 className='md:w-1/3 w-full mb-5'
                 labelClassName='justify-between flex-1 sm:pr-10'
                 error={errors.located}
                 {...register('located', { required: { value: !otherLocated, message: 'Выберите место' }})}
          />
          <Radio id='locate3'
                 label='Отдельное здание'
                 value='Отдельное здание'
                 className='md:w-1/3 w-full mb-5'
                 labelClassName='justify-between flex-1 sm:pr-10'
                 error={errors.located}
                 {...register('located', { required: { value: !otherLocated, message: 'Выберите место' }})}
          />
          <Radio id='locate4'
                 label='Квартира, переоборудованная под офис'
                 value='Квартира, переоборудованная под офис'
                 className='md:w-1/3 w-full mb-5'
                 labelClassName='justify-between flex-1 sm:pr-10'
                 error={errors.located}
                 {...register('located', { required: { value: !otherLocated, message: 'Выберите место' }})}
          />
          <Radio id='locate5'
                 label='Коворкинг'
                 value='Коворкинг'
                 className='md:w-1/3 w-full mb-5'
                 labelClassName='justify-between flex-1 sm:pr-10'
                 error={errors.located}
                 {...register('located', { required: { value: !otherLocated, message: 'Выберите место' }})}
          />
          <Input onFocus={() => setValue('located', null)}
                 placeholder={'Другое'}
                 className='mb-5'
                 error={errors.located || errors.other_located}
                 {...register('other_located')} />
        </div>
      </div>

      <QuizFooter error={error} point={point} back={back} />

    </form>
  );
};

export default Form2;
