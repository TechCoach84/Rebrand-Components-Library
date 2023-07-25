import { useTheme } from 'styled-components';
import Svg from '../Svg';
import { SvgProps } from '../types';

const BestSeller: React.FC<SvgProps> = ({ color }) => {
  const theme = useTheme();

  return (
    <Svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.0001 11.9999L11.0001 13.9999L15.0001 9.99985M7.8351 4.69685C8.5524 4.6396 9.23338 4.35755 9.7811 3.89085C10.4 3.36312 11.1867 3.07324 12.0001 3.07324C12.8135 3.07324 13.6002 3.36312 14.2191 3.89085C14.7668 4.35755 15.4478 4.6396 16.1651 4.69685C16.9758 4.76135 17.7371 5.11268 18.3122 5.68777C18.8873 6.26287 19.2386 7.0241 19.3031 7.83485C19.3603 8.55216 19.6424 9.23313 20.1091 9.78085C20.6368 10.3998 20.9267 11.1865 20.9267 11.9999C20.9267 12.8132 20.6368 13.5999 20.1091 14.2189C19.6424 14.7666 19.3603 15.4475 19.3031 16.1649C19.2386 16.9756 18.8873 17.7368 18.3122 18.3119C17.7371 18.887 16.9758 19.2383 16.1651 19.3029C15.4478 19.3601 14.7668 19.6421 14.2191 20.1089C13.6002 20.6366 12.8135 20.9265 12.0001 20.9265C11.1867 20.9265 10.4 20.6366 9.7811 20.1089C9.23338 19.6421 8.5524 19.3601 7.8351 19.3029C7.02434 19.2383 6.26312 18.887 5.68802 18.3119C5.11292 17.7368 4.7616 16.9756 4.6971 16.1649C4.63984 15.4475 4.3578 14.7666 3.8911 14.2189C3.36336 13.5999 3.07349 12.8132 3.07349 11.9999C3.07349 11.1865 3.36336 10.3998 3.8911 9.78085C4.3578 9.23313 4.63984 8.55216 4.6971 7.83485C4.7616 7.0241 5.11292 6.26287 5.68802 5.68777C6.26312 5.11268 7.02434 4.76135 7.8351 4.69685Z"
        stroke={color || theme.colors.white}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default BestSeller;