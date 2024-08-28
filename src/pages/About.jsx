const About = () => {
  return (
    <>
      <div className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center'>
        <h1 className='text-4xl font-bold leading-none tracking-tight sm:text-6xl'>
          We love
        </h1>
        <div className='stats bg-primary shadow'>
          <div className='stat'>
            <div className='stat-title text-primary-content text-4xl font-bold tracking-widest'>
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className='mt-6 text-lg leading-8 max-w-2xl mx-auto'>
      Welcome to Comfy Store – your go-to destination for all things comfort. We offer a curated selection of high-quality products designed to make your life cozier, from home essentials to wellness items. Our mission is simple: to bring comfort into your everyday life with stylish, functional, and reliable products. Enjoy a seamless shopping experience and fast shipping, because at Comfy Store, your comfort is our priority.
      </p>
    </>
  );
};
export default About;
