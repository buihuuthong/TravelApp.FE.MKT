import { Text as ReactText } from 'react-native';
import COLOR from '../constants/color';
import FONT_SIZE from '../constants/fontSize';

const Text = ({
  children,
  style,
  bold,
  semibold,
  color = COLOR.text,
  fontSize = FONT_SIZE.default,
  flex,
  center,
  numberOfLines,
  textTransform,
  price,
  ...props
}) => {
  const renderMain = () => {
    try {
      if (price) {
        return (
          Math.round(parseFloat(children?.toString()?.replace(/[^0-9]/g, '')))
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' đ'
        );
      }
    } catch (error) {
      return children;
    }
    return children;
  };
  return (
    <ReactText
      {...props}
      numberOfLines={numberOfLines}
      style={[
        {
          color,
          fontWeight: bold ? '800' : semibold ? '600' : undefined,
          fontSize,
          flex: flex ? 1 : undefined,
          textAlign: center ? 'center' : undefined,
          textTransform: textTransform,
        },
        style,
      ]}
    >
      {renderMain()}
    </ReactText>
  );
};

export default Text;
