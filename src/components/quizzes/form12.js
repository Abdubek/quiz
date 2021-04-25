import React from 'react';
import Radio from "../Radio";
import Button from "../Button";
import Score from "../Score";
import {useForm} from "react-hook-form";
import Input from "../Input";
import Progress from "../Progress";
import QuizFooter from "../QuizFooter";

const Form12 = ({ setData, point, back, data, step }) => {
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
    defaultValues: data
  })

  const otherProgram = watch('other_program')

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
          <Radio id='program1'
                 label='WhatsApp'
                 value='WhatsApp'
                 className='lg:w-1/3 w-full mb-5'
                 labelClassName='justify-between flex-1 sm:pr-10'
                 error={errors.program}
                 {...register('program', { required: { value: !otherProgram, message: 'Выберите программу' }})}
          />
          <Radio id='program2'
                 label='Skype'
                 value='Skype'
                 className='lg:w-1/3 w-full mb-5'
                 labelClassName='justify-between flex-1 sm:pr-10'
                 error={errors.program}
                 {...register('program', { required: { value: !otherProgram, message: 'Выберите программу' }})}
          />
          <div className='lg:w-1/3 w-full mb-5'>
            <Input onFocus={() => setValue('program', null)}
                   placeholder={'Другое'}
                   error={errors.program}
                   {...register('other_program')} />
          </div>

          <Radio id='program3'
                 label='Telegram'
                 value='Telegram'
                 className='lg:w-1/3 w-full mb-5'
                 labelClassName='justify-between flex-1 sm:pr-10'
                 error={errors.program}
                 {...register('program', { required: { value: !otherProgram, message: 'Выберите программу' }})}
          />
          <Radio id='program4'
                 label='Google meet'
                 value='Google meet'
                 className='lg:w-1/3 w-full mb-5'
                 labelClassName='justify-between flex-1 sm:pr-10'
                 error={errors.program}
                 {...register('program', { required: { value: !otherProgram, message: 'Выберите программу' }})}
          />
          <Radio id='program5'
                 label='не используется'
                 value='не используется'
                 className='lg:w-1/3 w-full mb-5'
                 labelClassName='justify-between flex-1 sm:pr-10'
                 error={errors.program}
                 {...register('program', { required: { value: !otherProgram, message: 'Выберите программу' }})}
          />
          <Radio id='program6'
                 label='zoom'
                 value='zoom'
                 className='lg:w-1/3 w-full mb-5'
                 labelClassName='justify-between flex-1 sm:pr-10'
                 error={errors.program}
                 {...register('program', { required: { value: !otherProgram, message: 'Выберите программу' }})}
          />
        </div>
      </div>

      <QuizFooter error={error} point={point} back={back} />
    </form>
  );
};

export default Form12;
