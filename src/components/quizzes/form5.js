import React from 'react';
import Button from "../Button";
import Score from "../Score";
import {useForm} from "react-hook-form";
import Select from "../Select";
import Progress from "../Progress";
import QuizFooter from "../QuizFooter";

const Form5 = ({ setData, point, back, data, step }) => {
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

        <span className='inline-block mb-12 max-w-3xl text-gray-700'>
          <span className='font-bold'>Внимание:</span> <br/>
          Ответы на некоторые вопросы в этом разделе принесут вам больше баллов.
          Если вы не знаете точного ответа, пожалуйста свяжитесь для уточнения с вашим провайдером или IT-специалистом.
          И, пожалуйста, отвечайте честно, это очень важно.
        </span><br/>

        <span className='mb-5 inline-block'>
          <span className='text-green font-bold'>11. </span>
          Интернет провайдер вашей компании?
        </span>

        <div className='flex flex-wrap'>
          <Select error={errors.internet} {...register('internet', { required: 'Выберите ваш интернет провайдер' })}>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
          </Select>

        </div>
      </div>

      <QuizFooter error={error} point={point} back={back} />
    </form>
  );
};

export default Form5;
