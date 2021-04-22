import React from 'react';
import Image from 'next/image'
import Button from "../../components/Button";

const MainSection = () => {
  return (
    <section className='container px-4 mx-auto min-h-screen flex items-center pb-12'>
      <div className='flex w-full flex-col lg:flex-row'>
        <div className='flex-1 flex flex-col justify-center items-start py-12 lg:items-start items-center'>
          <div className='flex-1'>
            <div className='w-7 h-1 bg-green rounded-sm mb-1.5' />
            <h1 className='lg:text-4xl text-2xl font-black font-arial-black mb-5 lg:max-w-lg max-w-md'>
              Слоган на одну или две строки
            </h1>
            <p className='font-open-sans lg:text-base text-sm font-light max-w-sm'>
              Подстрочник еще на несколько строк: две, три или четыре. Подстрочник еще на несколько строк: две, три или четыре
            </p>
          </div>
          <Button className='hidden lg:block'>
            Подробнее
          </Button>
        </div>
        <div className='flex-1 flex flex-col lg:items-start items-center'>
          <div className='lg:mb-0 mb-14'>
            <Image
              src="/illustration.png"
              alt="illustration"
              width={671}
              height={475}
            />
          </div>
          <Button
            className='block lg:hidden'>
            Подробнее
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
