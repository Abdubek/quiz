import Head from 'next/head'
import MainSection from "../section/main";
import DescriptionSection from "../section/description";
import QuizSection from "../section/quiz";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Quiz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainSection />
      <DescriptionSection />
      <QuizSection />
    </div>
  )
}
