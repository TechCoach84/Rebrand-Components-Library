import { useTheme } from 'styled-components';
import Svg from '../Svg';
import { SvgProps } from '../types';

const Iphones: React.FC<SvgProps> = ({ color }) => {
  const theme = useTheme();

  return (
    <Svg width="30" height="30" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.26505 1.31641L6.42201 1.96578L8.1126 1.31641H10.153H11.8436L12.7075 2.88004L12.3099 24.2216L1.74378 24.5145L1.11706 23.8674L0.708984 23.336V22.6276V2.67419L1.11706 1.31641H1.70002H4.26505Z"
        fill="#FCF7ED"
      />
      <path
        d="M11.1779 0.835938H2.11018C1.10812 0.835938 0.286011 1.62953 0.286011 2.60311V23.0687C0.286011 24.0423 1.10812 24.8359 2.11018 24.8359H11.1779C12.184 24.8359 13.0021 24.0423 13.0021 23.0687V2.60311C13.0021 1.62953 12.1799 0.835938 11.1779 0.835938ZM12.2822 23.0728C12.2822 23.6619 11.7914 24.1405 11.1779 24.1405H2.11018C1.50076 24.1405 1.00586 23.666 1.00586 23.0728V2.60311C1.00586 2.01405 1.49667 1.53544 2.11018 1.53544H3.5867C3.76257 1.53544 3.92209 1.64998 3.96708 1.81361L4.07751 2.21449C4.15522 2.49266 4.4129 2.68492 4.70738 2.68492H8.56432C8.85881 2.68492 9.12466 2.49266 9.19419 2.21449L9.30463 1.81361C9.34962 1.64998 9.50913 1.53544 9.685 1.53544H11.1697C11.7791 1.53544 12.274 2.00996 12.274 2.60311V23.0728H12.2822Z"
        fill={color || theme.colors.white}
      />
      <path
        d="M27.8939 0.835938H18.8303C17.8242 0.835938 17.0021 1.62953 17.0021 2.60311V23.0687C17.0021 24.0423 17.8242 24.8359 18.8262 24.8359H27.8899C28.896 24.8359 29.714 24.0423 29.714 23.0687V2.60311C29.7181 1.62953 28.9001 0.835938 27.8939 0.835938ZM21.7588 2.74219C21.9715 2.74219 22.1433 2.914 22.1433 3.12671C22.1433 3.33943 21.9715 3.51124 21.7588 3.51124C21.5461 3.51124 21.3744 3.33943 21.3744 3.12671C21.3744 2.914 21.5461 2.74219 21.7588 2.74219ZM19.7588 6.79605C19.2434 6.79605 18.8262 6.3788 18.8262 5.86338C18.8262 5.34795 19.2434 4.9307 19.7588 4.9307C20.2741 4.9307 20.6913 5.34795 20.6913 5.86338C20.6913 6.3788 20.2741 6.79605 19.7588 6.79605ZM19.7588 4.44391C19.2434 4.44391 18.8262 4.02666 18.8262 3.51124C18.8262 2.99581 19.2434 2.57856 19.7588 2.57856C20.2741 2.57856 20.6913 2.99581 20.6913 3.51124C20.6913 4.02666 20.2741 4.44391 19.7588 4.44391ZM21.7588 6.59151C21.6075 6.59151 21.4848 6.46879 21.4848 6.31744C21.4848 6.16608 21.6075 6.04336 21.7588 6.04336C21.9102 6.04336 22.0329 6.16608 22.0329 6.31744C22.0329 6.46879 21.9102 6.59151 21.7588 6.59151ZM22.3314 6.01064C22.2496 6.01064 22.1883 5.94519 22.1883 5.86747C22.1883 5.78974 22.2537 5.72429 22.3314 5.72429C22.4092 5.72429 22.4746 5.78974 22.4746 5.86747C22.4746 5.94519 22.4092 6.01064 22.3314 6.01064ZM21.7588 5.61384C21.2435 5.61384 20.8263 5.1966 20.8263 4.68117C20.8263 4.16575 21.2435 3.7485 21.7588 3.7485C22.2742 3.7485 22.6914 4.16575 22.6914 4.68117C22.6914 5.1966 22.2742 5.61384 21.7588 5.61384Z"
        fill={color || theme.colors.white}
      />
    </Svg>
  );
};

export default Iphones;
