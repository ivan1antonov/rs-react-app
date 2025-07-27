import loader from '../assets/loader.gif';

const Loader = () => {
  return (
    <div className="loader">
      <img className="loader_img" src={loader} alt="loading..." />
    </div>
  );
};

export default Loader;
