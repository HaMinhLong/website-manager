// THIRD IMPORT
import { useNavigate } from 'react-router-dom';

// iCONS IMPORT
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

interface PropsType {
  parentName?: string;
  parentUrl?: string;
  currentName: string;
}

const BreadCrumb = ({ parentName, parentUrl, currentName }: PropsType) => {
  const navigate = useNavigate();
  return (
    <div className="breadcrumb">
      <p>{currentName}</p>
      <div>
        <p onClick={() => navigate('/')}>Home</p>
        <ArrowForwardIosOutlinedIcon />
        {parentName && (
          <>
            <p onClick={() => navigate(parentUrl || '')}>{parentName}</p>
            <ArrowForwardIosOutlinedIcon />
          </>
        )}
        <p className="current__name">{currentName}</p>
      </div>
    </div>
  );
};

export default BreadCrumb;
