import React from 'react';
import Radio from "../Radio";
import Button from "../Button";
import Score from "../Score";
import {useForm} from "react-hook-form";
import Input from "../Input";
import Progress from "../Progress";
import QuizFooter from "../QuizFooter";

const Form15 = ({ setData, point, back, data, step }) => {
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
    defaultValues: data
  })

  const otherDocument = watch('other_document')

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
                 className='lg:w-1/3 w-full mb-5'
                 labelClassName='justify-between flex-1 sm:pr-10'
                 error={errors.document}
                 {...register('document', { required: { value: !otherDocument, message: 'Выберите способ' }})}
          />
          <Radio id='document2'
                 label='Через облачные хранилища'
                 value='Через облачные хранилища'
                 className='lg:w-1/3 w-full mb-5'
                 labelClassName='justify-between flex-1 sm:pr-10'
                 error={errors.document}
                 {...register('document', { required: { value: !otherDocument, message: 'Выберите способ' }})}
          />

          <div className='lg:w-1/3 w-full mb-5'>
            <Input onFocus={() => setValue('document', null)}
                   placeholder={'Другое'}
                   error={errors.document}
                   {...register('other_document')} />
          </div>

          <Radio id='document3'
                 label='Используем мессенджеры, так удобнее (WhatsApp, Telegram и т.д.)'
                 value='Используем мессенджеры, так удобнее (WhatsApp, Telegram и т.д.)'
                 className='lg:w-1/3 w-full mb-5'
                 labelClassName='justify-between flex-1 sm:pr-10'
                 error={errors.document}
                 {...register('document', { required: { value: !otherDocument, message: 'Выберите способ' }})}
          />
          <Radio id='document4'
                 label='Используем локальный сервер'
                 value='Используем локальный сервер'
                 className='lg:w-1/3 w-full mb-5'
                 labelClassName='justify-between flex-1 sm:pr-10'
                 error={errors.document}
                 {...register('document', { required: { value: !otherDocument, message: 'Выберите способ' }})}
          />
          <Radio id='document5'
                 label='у нас не бывает файлов'
                 value='у нас не бывает файлов'
                 className='lg:w-1/3 w-full mb-5'
                 labelClassName='justify-between flex-1 sm:pr-10'
                 error={errors.document}
                 {...register('document', { required: { value: !otherDocument, message: 'Выберите способ' }})}
          />

        </div>
      </div>

      <QuizFooter error={error} point={point} back={back} />
    </form>
  );
};

export default Form15;
