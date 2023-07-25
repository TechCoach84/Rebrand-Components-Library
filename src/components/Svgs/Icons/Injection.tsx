import { useTheme } from 'styled-components';
import Svg from '../Svg';
import { SvgProps } from '../types';

const Injection: React.FC<SvgProps> = ({ color }) => {
  const theme = useTheme();

  return (
    <Svg width="20" height="20" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.5 7L5.83333 8.33333L8.5 5.66667M12.5 7C12.5 7.78793 12.3448 8.56815 12.0433 9.2961C11.7417 10.0241 11.2998 10.6855 10.7426 11.2426C10.1855 11.7998 9.52405 12.2417 8.7961 12.5433C8.06815 12.8448 7.28793 13 6.5 13C5.71207 13 4.93185 12.8448 4.2039 12.5433C3.47595 12.2417 2.81451 11.7998 2.25736 11.2426C1.70021 10.6855 1.25825 10.0241 0.956723 9.2961C0.655195 8.56815 0.5 7.78793 0.5 7C0.5 5.4087 1.13214 3.88258 2.25736 2.75736C3.38258 1.63214 4.9087 1 6.5 1C8.0913 1 9.61742 1.63214 10.7426 2.75736C11.8679 3.88258 12.5 5.4087 12.5 7Z"
        stroke={color || theme.colors.white}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Injection;
