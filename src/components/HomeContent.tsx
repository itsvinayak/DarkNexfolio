import { lazy } from 'react';
const TextTag = lazy(() => import('@ui/TextTag'));

const HomeContent = () => {
  return (
    <>
      <h1 className='hidden font-extrabold italic leading-relaxed tracking-wide subpixel-antialiased md:mt-4 md:block md:text-4xl'>
        hey, I&#39;m Vinayak &nbsp;
      </h1>
      <p className='text-md my-0 mt-5'>
        I&#39;m a tech enthusiast with a passion for solving complex problems
        and developing innovative solutions.
        <br />
        <br />
        My expertise lies in{' '}
        <TextTag text='Python (Flask/Django, Selenium)' logo={''} /> and
        <TextTag
          text='JavaScript
        (Node.js, Loopback, Node-RED)'
          logo={''}
        />{' '}
        for backend design and development. I have a proven track record of
        designing and implementing scalable and efficient solutions that meet
        business objectives.
      </p>
    </>
  );
};

export default HomeContent;
