import React from 'react';
import Radio from "../Radio";
import Button from "../Button";
import Score from "../Score";
import {useForm} from "react-hook-form";
import Progress from "../Progress";
import QuizFooter from "../QuizFooter";

const Form6 = ({ setData, point, back, data, step }) => {
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
          <span className='text-green font-bold'>12. </span>
          Какой интернет вы используете в офисе? <br />
          <i className='font-light font-open-sans text-md text-gray-700'>Можно уточнить у IT-специалиста</i>
        </span>

        <div className='flex flex-wrap'>
          <Radio id='typeOfInternet1'
                 label='Стационарный офисный'
                 value='Стационарный офисный'
                 className='md:w-1/3 w-full mb-5'
                 labelClassName='justify-between flex-1 sm:pr-10'
                 error={errors.typeOfInternet}
                 {...register('typeOfInternet', { required: 'Выберите тип интернета' })}
          />
          <Radio id='typeOfInternet2'
                 label='Мобильный офисный'
                 value='Мобильный офисный'
                 className='md:w-1/3 w-full mb-5'
                 labelClassName='justify-between flex-1 sm:pr-10'
                 error={errors.typeOfInternet}
                 {...register('typeOfInternet', { required: 'Выберите тип интернета' })}
          />
          <Radio id='typeOfInternet3'
                 label='Мобильный личный'
                 value='Мобильный личный'
                 className='md:w-1/3 w-full mb-5'
                 labelClassName='justify-between flex-1 sm:pr-10'
                 error={errors.typeOfInternet}
                 {...register('typeOfInternet', { required: 'Выберите тип интернета' })}
          />
        </div>
      </div>

      <QuizFooter error={error} point={point} back={back} />
    </form>
  );
};

export default Form6;
