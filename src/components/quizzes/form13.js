import React from 'react';
import Radio from "../Radio";
import Button from "../Button";
import Score from "../Score";
import {useForm} from "react-hook-form";
import Input from "../Input";
import Progress from "../Progress";
import QuizFooter from "../QuizFooter";

const Form13 = ({ setData, point, back, data, step }) => {
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
    defaultValues: data
  })

  const otherCrm = watch('other_crm')

  const onSubmit = (data) => {
    setData(data)
  }

  const error = Object.entries(errors)[0]

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='font-open-sans font-light flex flex-col' style={{ minHeight: 500 }}>
      <Progress className='sm:mb-16 mb-8' percent={Math.min((100 / 16) * step, 100)} />

      <h3 className='text-xl font-arial-black font-black sm:mb-12 mb-6 inline-block'>Об использовании интернет ресурсов в вашем офисе</h3>

      <div className='flex-1'>
        <span className='mb-5 inline-block'>
          <span className='text-green font-bold'>26. </span>
          Используются ли в Вашей Компании CRM-системы?
        </span>

        <div className='flex flex-wrap'>
          <Radio id='crm1'
                 label='Программа для учета клиентов/ посетителей/ продаж'
                 value='Программа для учета клиентов/ посетителей/ продаж'
                 className='md:w-1/3 w-full mb-5'
                 labelClassName='justify-between flex-1 sm:pr-10'
                 error={errors.crm}
                 {...register('crm', { required: { value: !otherCrm, message: 'Выберите CRM систему' }})}
          />
          <Radio id='crm2'
                 label='Программа для складского учета'
                 value='Программа для складского учета'
                 className='md:w-1/3 w-full mb-5'
                 labelClassName='justify-between flex-1 sm:pr-10'
                 error={errors.crm}
                 {...register('crm', { required: { value: !otherCrm, message: 'Выберите CRM систему' }})}
          />
          <Radio id='crm3'
                 label='Программа для оптимизации логистики'
                 value='Программа для оптимизации логистики'
                 className='md:w-1/3 w-full mb-5'
                 labelClassName='justify-between flex-1 sm:pr-10'
                 error={errors.crm}
                 {...register('crm', { required: { value: !otherCrm, message: 'Выберите CRM систему' }})}
          />

          <div className='md:w-1/3 w-full mb-5'>
            <Input onFocus={() => setValue('crm', null)}
                   placeholder={'Другое (напишите название)'}
                   style={{ width: 260 }}
                   error={errors.crm}
                   {...register('other_crm')} />
          </div>


          <Radio id='crm4'
                 label='не используется'
                 value='не используется'
                 className='md:w-1/3 w-full mb-5'
                 labelClassName='justify-between flex-1 sm:pr-10'
                 error={errors.crm}
                 {...register('crm', { required: { value: !otherCrm, message: 'Выберите CRM систему' }})}
          />
        </div>
      </div>

      <QuizFooter error={error} point={point} back={back} />
    </form>
  );
};

export default Form13;
