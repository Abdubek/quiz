import React from 'react';
import Radio from "../Radio";
import {useForm} from "react-hook-form";
import Input from "../Input";
import Progress from "../Progress";
import QuizFooter from "../QuizFooter";

const Form17 = ({ point, back, data, step, submit }) => {
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
    defaultValues: data
  })

  const remote = watch('remote')

  const onSubmit = (data) => {
    submit(data)
  }

  const error = Object.entries(errors)[0]

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='font-open-sans font-light flex flex-col' style={{ minHeight: 500 }}>
      <Progress className='sm:mb-16 mb-8' percent={Math.min((100 / 16) * step, 100)} />

      <h3 className='text-xl font-arial-black font-black sm:mb-12 mb-6 inline-block'>О работе на удаленке</h3>

      <div className='flex-1'>
        <span className='mb-5 inline-block'>
          <span className='text-green font-bold'>12. </span>
          Требовалась ли вам установка дополнительного программного обеспечения для осуществления своей рабочей деятельности вне офиса?
        </span>

        <div className='flex flex-wrap'>
          <Radio id='document1'
                 label='Да'
                 value='Да'
                 className='md:w-1/3 w-full mb-5'
                 labelClassName='justify-between flex-1 sm:pr-10'
                 error={errors.remote}
                 {...register('remote')}
          />
          <Radio id='document2'
                 label='Нет'
                 value='Нет'
                 className='md:w-1/3 w-full mb-5'
                 labelClassName='justify-between flex-1 sm:pr-10'
                 error={errors.remote}
                 {...register('remote')}
          />
        </div>

        <div className='md:w-1/3 w-full mb-5'>
          {remote === 'Да' && <Input
                            textarea
                            className='w-56'
                            placeholder={'Названия или назначение программ'}
                            {...register('other_remote', { required: 'Введите название программы' })} />
          }
        </div>
      </div>

      <QuizFooter error={error} point={point} back={back} />
    </form>
  );
};

export default Form17;
