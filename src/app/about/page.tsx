import rsLogo from '../../assets/logo-rsschool3.png';
import Image from 'next/image';

const About = () => {
  return (
    <div className="about">
      <h1 className="about_title">About page</h1>
      <p className="about_text">I will write text here, emmm..</p>
      <p className="about_text">My name is Ivan. I am from Samara. Its not big town in Russia</p>
      <a className="about_link" href="https://rs.school/courses/reactjs">
        Oy yeah. And I learn a course of React at school / here.
      </a>
      <Image src={rsLogo} alt={'rs-logo'} />
    </div>
  );
};

export default About;
