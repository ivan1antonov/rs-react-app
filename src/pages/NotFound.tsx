import notExits from '/404.jpg';

const NotFound = () => {
  return (
    <div className="noExist">
      <h1 className="noExist_title">Sorry, this page is not exist</h1>
      <div className="noExist_img">
        <img src={notExits} alt="404page" />
      </div>
    </div>
  );
};

export default NotFound;
