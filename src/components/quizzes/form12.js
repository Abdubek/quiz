import React from 'react';
import Radio from "../Radio";
import Button from "../Button";
import Score from "../Score";
import {useForm} from "react-hook-form";
import Input from "../Input";
import Progress from "../Progress";

const Form12 = ({ setData, point, back, data, step }) => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    defaultValues: data
  })

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
                 className='md:w-1/3 w-full mb-5'
                 labelClassName='justify-between flex-1 sm:pr-10'
                 {...register('crm', { required: 'Выберите программу' })}
          />
          <Radio id='program2'
                 label='Skype'
                 value='Skype'
                 className='md:w-1/3 w-full mb-5'
                 labelClassName='justify-between flex-1 sm:pr-10'
                 {...register('program', { required: 'Выберите программу' })}
          />
          <div className='md:w-1/3 w-full mb-5'>
            <Input onFocus={() => setValue('program', null)}
                   placeholder={'Другое'}
                   {...register('other_program')} />
          </div>

          <Radio id='program3'
                 label='Telegram'
                 value='Telegram'
                 className='md:w-1/3 w-full mb-5'
                 labelClassName='justify-between flex-1 sm:pr-10'
                 {...register('program', { required: 'Выберите программу' })}
          />
          <Radio id='program4'
                 label='Google meet'
                 value='Google meet'
                 className='md:w-1/3 w-full mb-5'
                 labelClassName='justify-between flex-1 sm:pr-10'
                 {...register('program', { required: 'Выберите программу' })}
          />
          <Radio id='program5'
                 label='не используется'
                 value='не используется'
                 className='md:w-1/3 w-full mb-5'
                 labelClassName='justify-between flex-1 sm:pr-10'
                 {...register('program', { required: 'Выберите программу' })}
          />
          <Radio id='program6'
                 label='zoom'
                 value='zoom'
                 className='md:w-1/3 w-full mb-5'
                 labelClassName='justify-between flex-1 sm:pr-10'
                 {...register('program', { required: 'Выберите программу' })}
          />
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

export default Form12;
