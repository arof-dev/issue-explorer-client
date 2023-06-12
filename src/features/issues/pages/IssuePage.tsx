import { useParams } from 'react-router-dom';

const IssuePage = () => {
  const { id } = useParams();

  return <div>{`Issue ${id}`}</div>;
};

export default IssuePage;
