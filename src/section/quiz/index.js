import React, {useState} from 'react';
import Progress from "../../components/Progress";
import Form1 from "../../components/quizzes/form1";
import Form2 from "../../components/quizzes/form2";
import Form3 from "../../components/quizzes/form3";
import Form4 from "../../components/quizzes/form4";
import Form5 from "../../components/quizzes/form5";
import Form6 from "../../components/quizzes/form6";
import Form7 from "../../components/quizzes/form7";
import Form8 from "../../components/quizzes/form8";
import Form9 from "../../components/quizzes/form9";
import Form10 from "../../components/quizzes/form10";
import Form11 from "../../components/quizzes/form11";
import Form12 from "../../components/quizzes/form12";
import Form13 from "../../components/quizzes/form13";
import Form14 from "../../components/quizzes/form14";
import Form15 from "../../components/quizzes/form15";
import Finish from "../../components/quizzes/finish";
import Form17 from "../../components/quizzes/form17";

const QuizSection = () => {
  const [data, setData] = useState({})
  const [point, setPoint] = useState(0)
  const [step, setStep] = useState(15)

  const nextStep = (stepData) => {
    console.log(stepData)
    setData(data => ({ ...data, ...stepData }))
    setPoint(point => point + 5)
    setStep(step => step + 1)
  }

  const back = () => {
    setPoint(point => point - 5)
    setStep(step => step - 1)
  }

  const submit = (stepData = {}) => {
    alert(JSON.stringify({...data, ...stepData}))
  }

  return (
    <section className='relative'>
      <div className='absolute bg-gradient-to-r from-blue-200 to-blue-100 h-4/6 w-full' />
      <div className='container px-4 mx-auto min-h-screen flex flex-col lg:flex-row items-center py-12'>

        <div className='border border-gray w-full lg:px-24 lg:pt-16 lg:pb-20 px-8 py-10 bg-white z-10 rounded-3xl shadow-lg bg-gray-300'
        >
          {step === 1 && <Form1 setData={nextStep} point={point} data={data} step={step} />}
          {step === 2 && <Form2 setData={nextStep} point={point} data={data} step={step} back={back} />}
          {step === 3 && <Form3 setData={nextStep} point={point} data={data} step={step} back={back} />}
          {step === 4 && <Form4 setData={nextStep} point={point} data={data} step={step} back={back} />}
          {step === 5 && <Form5 setData={nextStep} point={point} data={data} step={step} back={back} />}
          {step === 6 && <Form6 setData={nextStep} point={point} data={data} step={step} back={back} />}
          {step === 7 && <Form7 setData={nextStep} point={point} data={data} step={step} back={back} />}
          {step === 8 && <Form8 setData={nextStep} point={point} data={data} step={step} back={back} />}
          {step === 9 && <Form9 setData={nextStep} point={point} data={data} step={step} back={back} />}
          {step === 10 && <Form10 setData={nextStep} point={point} data={data} step={step} back={back} />}
          {step === 11 && <Form11 setData={nextStep} point={point} data={data} step={step} back={back} />}
          {step === 12 && <Form12 setData={nextStep} point={point} data={data} step={step} back={back} />}
          {step === 13 && <Form13 setData={nextStep} point={point} data={data} step={step} back={back} />}
          {step === 14 && <Form14 setData={nextStep} point={point} data={data} step={step} back={back} />}
          {step === 15 && <Form15 setData={nextStep} point={point} data={data} step={step} back={back} />}
          {step === 16 && <Finish next={() => setStep(step => step + 1)} submit={submit} />}
          {step === 17 && <Form17 point={point} data={data} step={step} back={back} submit={submit}  />}
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
