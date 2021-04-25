import React from 'react';
import Radio from "../Radio";
import Button from "../Button";
import Score from "../Score";
import {useForm} from "react-hook-form";
import Input from "../Input";
import Progress from "../Progress";

const Form15 = ({ setData, point, back, data, step }) => {
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
          <span className='text-green font-bold'>31. </span>
          Как ваши сотрудники обмениваются документами и информацией между собой?
        </span>

        <div className='flex flex-wrap'>
          <Radio id='document1'
                 label='По электронной почте'
                 value='По электронной почте'
                 className='md:w-1/3 w-full mb-5'
                 labelClassName='justify-between flex-1 sm:pr-10'
                 {...register('document', { required: 'Выберите способ' })}
          />
          <Radio id='document2'
                 label='Через облачные хранилища'
                 value='Через облачные хранилища'
                 className='md:w-1/3 w-full mb-5'
                 labelClassName='justify-between flex-1 sm:pr-10'
                 {...register('document', { required: 'Выберите способ' })}
          />

          <div className='md:w-1/3 w-full mb-5'>
            <Input onFocus={() => setValue('document', null)}
                   placeholder={'Другое'}
                   {...register('other_document')} />
          </div>

          <Radio id='document3'
                 label='Используем мессенджеры, так удобнее (WhatsApp, Telegram и т.д.)'
                 value='Используем мессенджеры, так удобнее (WhatsApp, Telegram и т.д.)'
                 className='md:w-1/3 w-full mb-5'
                 labelClassName='justify-between flex-1 sm:pr-10'
                 {...register('document', { required: 'Выберите способ' })}
          />
          <Radio id='document4'
                 label='Используем локальный сервер'
                 value='Используем локальный сервер'
                 className='md:w-1/3 w-full mb-5'
                 labelClassName='justify-between flex-1 sm:pr-10'
                 {...register('document', { required: 'Выберите способ' })}
          />
          <Radio id='document5'
                 label='у нас не бывает файлов'
                 value='у нас не бывает файлов'
                 className='md:w-1/3 w-full mb-5'
                 labelClassName='justify-between flex-1 sm:pr-10'
                 {...register('document', { required: 'Выберите способ' })}
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

export default Form15;
