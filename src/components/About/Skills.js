const SkillList = [
  "community co-design",
  "culturally appropriate communication",
  "translation and interpretation guidance",
  "inclusive recruitment strategies",
  "stakeholder mapping",
  "capacity building tools",
  "research ethics for CALD inclusion",
  "equity-focused data collection",
  "cultural safety training",
  "barrier and enabler assessment",
  "visual and plain language resources",
  "case study templates",
  "evaluation frameworks",
  "policy alignment guides"
];


const Skills = () => {
  return (
    <section className="w-full flex flex-col p-5 xs:p-10 sm:p-12 md:p-16 lg:p-20 border-b-2 border-solid border-dark dark:border-light
     text-dark dark:text-light">
      <span className="font-semibold text-lg sm:text-3xl md:text-4xl text-accent dark:text-accentDark">
        CALD engagement and representation is about...
      </span>
      <ul className="flex flex-wrap mt-8 justify-center  xs:justify-start">
        {SkillList.map((item, index) => {
          return (
            <li
              key={index}
              className="font-semibold inline-block capitalize text-base xs:text-lg sm:text-xl  md:text-2xl py-2 xs:py-3 sm:py-4 lg:py-5 px-4 xs:px-6 sm:px-8 lg:px-12 border-2 border-solid border-dark dark:border-light rounded mr-3 mb-3 xs:mr-4 xs:mb-4  md:mr-6 md:mb-6 hover:scale-105 transition-all ease duration-200 cursor-pointer dark:font-normal" 
            >
              {item}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Skills;
