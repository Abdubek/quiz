import React from 'react';
import Radio from "../Radio";
import Button from "../Button";
import Score from "../Score";
import {useForm} from "react-hook-form";
import Progress from "../Progress";
import QuizFooter from "../QuizFooter";

const Form7 = ({ setData, point, back, data, step }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: data
  })

  const onSubmit = (data) => {
    setData(data)
  }

  const error = Object.entries(errors)[0]

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='font-open-sans font-light flex flex-col' style={{ minHeight: 500 }}>
      <Progress className='sm:mb-16 mb-8' percent={Math.min((100 / 16) * step, 100)} />

      <h3 className='text-xl font-arial-black font-black sm:mb-12 mb-6 inline-block'>Об интернете в вашем офисе</h3>

      <div className='flex-1'>
        <span className='mb-5 inline-block'>
          <span className='text-green font-bold'>14. </span>
          Сколько ваша компания платит за интернет в месяц? <br />
          <span className='font-light font-open-sans text-md text-gray-700'>Можно уточнить у IT-специалиста или в бухгалтерии</span>
        </span>

        <div className='flex flex-wrap'>
          <Radio id='costOfInternet1'
                 label='до 5 000 тг'
                 value='до 5 000 тг'
                 className='md:w-1/3 w-full mb-5'
                 labelClassName='justify-between flex-1 sm:pr-10 whitespace-nowrap'
                 error={errors.costOfInternet}
                 {...register('costOfInternet', { required: 'Выберите стоимость интернета' })}
          />
          <Radio id='costOfInternet2'
                 label='5 000 – 10 000 тг'
                 value='5 000 – 10 000 тг'
                 className='md:w-1/3 w-full mb-5'
                 labelClassName='justify-between flex-1 sm:pr-10 whitespace-nowrap'
                 error={errors.costOfInternet}
                 {...register('costOfInternet', { required: 'Выберите стоимость интернета' })}
          />
          <Radio id='costOfInternet3'
                 label='10 000 – 15 000 тг'
                 value='10 000 – 15 000 тг'
                 className='md:w-1/3 w-full mb-5'
                 labelClassName='justify-between flex-1 sm:pr-10 whitespace-nowrap'
                 error={errors.costOfInternet}
                 {...register('costOfInternet', { required: 'Выберите стоимость интернета' })}
          />
          <Radio id='costOfInternet4'
                 label='15 000 – 30 000 тг'
                 value='15 000 – 30 000 тг'
                 className='md:w-1/3 w-full mb-5'
                 labelClassName='justify-between flex-1 sm:pr-10 whitespace-nowrap'
                 error={errors.costOfInternet}
                 {...register('costOfInternet', { required: 'Выберите стоимость интернета' })}
          />
          <Radio id='costOfInternet5'
                 label='30 000 – 50 000 тг'
                 value='30 000 – 50 000 тг'
                 className='md:w-1/3 w-full mb-5'
                 labelClassName='justify-between flex-1 sm:pr-10 whitespace-nowrap'
                 error={errors.costOfInternet}
                 {...register('costOfInternet', { required: 'Выберите стоимость интернета' })}
          />
          <Radio id='costOfInternet6'
                 label='50 000 – 100 000 тг'
                 value='50 000 – 100 000 тг'
                 className='md:w-1/3 w-full mb-5'
                 labelClassName='justify-between flex-1 sm:pr-10 whitespace-nowrap'
                 error={errors.costOfInternet}
                 {...register('costOfInternet', { required: 'Выберите стоимость интернета' })}
          />
          <Radio id='costOfInternet7'
                 label='100 000 – 200 000 тг'
                 value='100 000 – 200 000 тг'
                 className='md:w-1/3 w-full mb-5'
                 labelClassName='justify-between flex-1 sm:pr-10 whitespace-nowrap'
                 error={errors.costOfInternet}
                 {...register('costOfInternet', { required: 'Выберите стоимость интернета' })}
          />
          <Radio id='costOfInternet8'
                 label='свыше 200 000 тг'
                 value='свыше 200 000 тг'
                 className='md:w-1/3 w-full mb-5'
                 labelClassName='justify-between flex-1 sm:pr-10 whitespace-nowrap'
                 error={errors.costOfInternet}
                 {...register('costOfInternet', { required: 'Выберите стоимость интернета' })}
          />
        </div>
      </div>

      <QuizFooter error={error} point={point} back={back} />
    </form>
  );
};

export default Form7;
