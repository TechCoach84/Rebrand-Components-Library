import { useTheme } from 'styled-components';
import Svg from '../Svg';
import { SvgProps } from '../types';

const Macbooks: React.FC<SvgProps> = ({ color }) => {
  const theme = useTheme();

  return (
    <Svg width="30" height="30" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.7307 21.7613H35.6751C36.0117 21.7613 36.2796 21.3201 36.2796 20.9835L36.2862 1.38234C36.2862 0.62091 35.6881 0 34.9561 0H4.79948C4.06746 0 3.46943 0.62091 3.46943 1.38234L3.46289 20.9835C3.46289 21.3201 3.7374 21.7613 4.074 21.7613H17.0183M4.44981 0.852935H34.9561C35.2372 0.852935 35.2993 1.0196 35.2993 1.0196L35.1881 20.7482H4.44654V20.3789L4.45308 0.852935H4.44981Z"
        fill={color || theme.colors.white}
      />
      <path
        d="M37.809 24.0002C39.041 24.0002 39.0051 23.4675 39.0051 23.4675H39.0149V22.6113H23.2143C23.2143 22.8466 22.9823 23.0394 22.698 23.0394H17.0183C16.734 23.0394 16.502 22.8466 16.502 22.6113H1.00209V23.4675H0.992289C0.992289 23.4675 0.828891 24.0002 2.06091 24.0002H37.809Z"
        fill={color || theme.colors.white}
      />
    </Svg>
  );
};

export default Macbooks;
