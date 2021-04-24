import React, {useState} from 'react';
import Progress from "../../components/Progress";
import Form1 from "../../components/quizzes/form1";

const QuizSection = () => {
  const [data, setData] = useState({})
  const [point, setPoint] = useState(0)
  const [step, setStep] = useState(1)

  const nextStep = (stepData) => {
    setData(data => ({ ...data, ...stepData }))
    setPoint(point => point + 5)
    setStep(step => step + 1)
  }

  return (
    <section className='relative'>
      <div className='absolute bg-gradient-to-r from-blue-200 to-blue-100 h-4/6 w-full' />
      <div className='container px-4 mx-auto min-h-screen flex flex-col lg:flex-row items-center py-12'>

        <div className='border border-gray w-full lg:px-24 lg:pt-16 lg:pb-20 px-8 py-10 bg-white z-10 rounded-3xl shadow-lg'>
          <Progress className='mb-16' percent={Math.min((100 / 16) * step, 100)} />
          <h3 className='text-xl font-arial-black font-black mb-12 inline-block'>О вас и вашей компании</h3>

          <Form1 setData={nextStep} point={point} />

        </div>
      </div>
    </section>
  );
};

export default QuizSection;
