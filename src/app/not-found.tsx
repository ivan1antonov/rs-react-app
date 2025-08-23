import notExits from '../assets/404.jpg';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="noExist">
      <h1 className="noExist_title">Sorry, this page is not exist</h1>
      <div className="noExist_img">
        <Image src={notExits} alt="404page" />
      </div>
    </div>
  );
}
