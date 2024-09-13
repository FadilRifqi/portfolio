import Avatar3D from './Avatar3D';

const Hero = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100 dark:bg-gray-800"
    >
      <div className="container flex">
        <div className="w-full  md:h-screen md:w-1/2 flex justify-center mb-6 md:mb-0">
          <div className="w-3/4 rounded-lg">
            <Avatar3D />
          </div>
        </div>
        <div className="flex justify-center md:w-1/2  items-center w-full h-screen">
          <div className="w-full text-center md:text-left px-4">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Myself
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Hi! My name is Muhammad Fadil Ataullah Rifqi. I&apos;m a
              5th-semester Informatics Engineering student with a strong passion
              for full-stack web development. I enjoy creating innovative and
              responsive websites, utilizing modern technologies and best
              practices to deliver clean and efficient code across both
              front-end and back-end systems. As I continue to expand my skills
              and knowledge in full-stack development, I am eager to take on new
              challenges and contribute to impactful web projects that leverage
              the entire web technology stack.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
