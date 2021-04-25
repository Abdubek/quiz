import React from 'react';
import Radio from "../Radio";
import Button from "../Button";
import Score from "../Score";
import {useForm} from "react-hook-form";
import Input from "../Input";
import Progress from "../Progress";
import QuizFooter from "../QuizFooter";

const Form14 = ({ setData, point, back, data, step }) => {
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
    defaultValues: data
  })

  const otherSecurity = watch('other_security')

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
          <span className='text-green font-bold'>29. </span>
          Какие системы IT-безопасности использует ваша компания?
        </span>

        <div className='flex flex-wrap'>
          <Radio id='security1'
                 label='Антивирус'
                 value='Антивирус'
                 className='md:w-1/3 w-full mb-5'
                 labelClassName='justify-between flex-1 sm:pr-10'
                 error={errors.security}
                 {...register('security', { required: { value: !otherSecurity, message: 'Выберите систему безопасности' }})}
          />

          <div className='md:w-1/3 w-full mb-5'>
            <Input onFocus={() => setValue('security', null)}
                   placeholder={'Другое'}
                   error={errors.security}
                   {...register('other_security')} />
          </div>

          <Radio id='security2'
                 label='Anti ddos'
                 value='Anti ddos'
                 className='md:w-1/3 w-full mb-5'
                 labelClassName='justify-between flex-1 sm:pr-10'
                 error={errors.security}
                 {...register('security', { required: { value: !otherSecurity, message: 'Выберите систему безопасности' }})}
          />
          <Radio id='security3'
                 label='не используется'
                 value='не используется'
                 className='md:w-1/3 w-full mb-5'
                 labelClassName='justify-between flex-1 sm:pr-10'
                 error={errors.security}
                 {...register('security', { required: { value: !otherSecurity, message: 'Выберите систему безопасности' }})}
          />
          <Radio id='security4'
                 label='firewall'
                 value='firewall'
                 className='md:w-1/3 w-full mb-5'
                 labelClassName='justify-between flex-1 sm:pr-10'
                 error={errors.security}
                 {...register('security', { required: { value: !otherSecurity, message: 'Выберите систему безопасности' }})}
          />
        </div>
      </div>

      <QuizFooter error={error} point={point} back={back} />
    </form>
  );
};

export default Form14;
