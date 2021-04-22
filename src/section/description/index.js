import React from 'react';
import Image from "next/image";
import Button from "../../components/Button";

const DescriptionSection = () => {
  return (
    <section className='bg-gray'>
      <div className='container px-4 mx-auto min-h-screen flex flex-col lg:flex-row items-center py-12'>
        <div className='lg:w-8/12 w-full'>
          <h2 className='lg:text-3xl text-2xl font-black font-arial-black mb-2'>Мы хотим дать бизнесу лучшее!</h2>
          <span className='uppercase lg:text-xl text-lg mb-6 block'>Помогите нам</span>
          <p className='mb-8 2xl:text-base xl:text-md text-sm'>
            Новые социальные и бизнес реалии безаппеляционно указали на то, что сегодня интернет нужен любому бизнесу.
            Без исключений. Даже те, кто ещё год назад практически не пользовался компьютером в своей
            бизнес-деятельности, сегодня активно осваивают интернет и облачные сервисы, потому что иначе сегодня просто
            никак.<br/><br/>

            К сожалению, часто технические параметры интернета в офисе не соответствуют новым потребностям бизнеса. И
            эта проблема затрагивает не только вопрос скорости интернета, здесь всё несколько глубже.<br/><br/>

            Мы хотим дать бизнесу лучшее решение для интеренет- и телекоммуникаций, способное изменить подход к
            управлению, повысить эффективность бизнес-процессов, сэкономить средства и значительно разгрузить
            пристальное внимание собственника бизнеса к тому, что происходит в офисе и в документах.<br/><br/>

            <strong>
              Чтобы дать бизнесу лучшее, нужно лучше понимать потребности бизнеса. Поэтому мы приглашаем вас ответить на
              вопросы анкеты, это займёт всего несколько минут (до 10) вашего времени и внесёт большой вклад в большое и
              полезное дело.
            </strong>
            <br/><br/>

            <strong>
              Наше исследование ставит себе целью вместе с бизнесом дать ответы на вопросы, насколько текущее качество
              услуг интернет-провайдера соответствует вызовам новой реальности.
            </strong>
          </p>

          <div className='2xl:text-base xl:text-md text-sm hidden lg:block'>
            <span className='border-b border-blue mb-5 inline-block'>По вашим ответам мы сможем оценить:</span>
            <div className='flex items-center mb-5'>
              <div className='w-7 h-1 bg-green rounded-sm mr-8' />
              Как сильно бизнес зависит от качества и доступности интернета.
            </div>
            <div className='flex items-center mb-5'>
              <div className='w-7 h-1 bg-green rounded-sm mr-8' />
              Доволен ли бизнес качеством и обслуживанием интернета со стороны своего провайдера
            </div>

            <div className='flex uppercase'>
              <img src="/arrow.svg" alt="arrow" className='mr-3'/>
              Читать больше
            </div>
          </div>
        </div>
        <div className='lg:w-4/12 w-full flex flex-col lg:items-start items-center'>
          <div className='lg:mb-6 mb-14'>
            <Image
              src="/illustration2.png"
              alt="illustration"
              width={671}
              height={475}
            />
          </div>

          <div className='2xl:text-base xl:text-md text-sm block lg:hidden mb-12'>
            <span className='border-b border-blue mb-5 inline-block'>По вашим ответам мы сможем оценить:</span>
            <div className='flex items-center mb-5'>
              <div className='w-7 h-1 bg-green rounded-sm mr-8' />
              Как сильно бизнес зависит от качества и доступности интернета.
            </div>
            <div className='flex items-center mb-5'>
              <div className='w-7 h-1 bg-green rounded-sm mr-8' />
              Доволен ли бизнес качеством и обслуживанием интернета со стороны своего провайдера
            </div>

            <div className='flex uppercase justify-center'>
              <img src="/arrow.svg" alt="arrow" className='mr-3'/>
              Читать больше
            </div>
          </div>

          <Button variant='primary'>
            начать тест
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DescriptionSection;
