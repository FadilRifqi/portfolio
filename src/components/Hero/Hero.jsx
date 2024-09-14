import Avatar3D from './Avatar3D';

const Hero = () => {
  return (
    <section
      id="about"
      className="min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-800"
    >
      <div className="container flex flex-col md:flex-row ">
        <div className="w-full  md:h-screen md:w-1/2 flex justify-center mb-6 md:mb-0">
          <div className="w-3/4 rounded-lg">
            <Avatar3D />
          </div>
        </div>
        <div className="flex justify-center md:w-1/2  items-center w-full md:h-screen">
          <div className="w-full text-center md:text-left px-4">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Hi! I&apos;m{' '}
              <span className="text-blue-500 dark:text-blue-300">Fadil</span>
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I am a 5th-semester student at Institut Teknologi Sumatera,
              currently learning web development. I am passionate about creating
              innovative and responsive websites using modern technologies. I am
              eager to expand my skills and take on new challenges in the field.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
