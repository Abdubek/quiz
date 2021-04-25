import React from 'react';
import Radio from "../Radio";
import Button from "../Button";
import Score from "../Score";
import {useForm} from "react-hook-form";
import Input from "../Input";
import Progress from "../Progress";
import QuizFooter from "../QuizFooter";

const Form11 = ({ setData, point, back, data, step }) => {
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

      <h3 className='text-xl font-arial-black font-black sm:mb-12 mb-6 inline-block'>О качестве интернета в вашем офисе</h3>

      <div className='flex-1'>
        <span className='inline-block mb-12 max-w-lg text-gray-700'>
          <span className='font-bold'>Внимание:</span> <br/>
          В этом разделе отвечайте, пожалуйста, только про качество интернета именно в офисе
        </span><br/>

        <span className='mb-5 inline-block'>
          <span className='text-green font-bold'>19. </span>
          Как вы оцениваете качество интернет-соединения в вашем офисе по шкале от 1 до 5?
        </span>

        <div className='flex flex-wrap items-center'>
          <div className='w-80'>
            <div className='flex justify-between font-bold px-3'>
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
            </div>
            <input type='range'
                   min={1}
                   max={5}
                   {...register('internetQuality')}/>
          </div>
        </div>
      </div>

      <QuizFooter error={error} point={point} back={back} />
    </form>
  );
};

export default Form11;
