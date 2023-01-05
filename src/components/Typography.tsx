import { Typography as MuiTypography, TypographyProps } from '@mui/material';

const Typography = ({ children, ...rest }: TypographyProps): JSX.Element => {
  return <MuiTypography {...rest}>{children}</MuiTypography>;
};

export default Typography;
