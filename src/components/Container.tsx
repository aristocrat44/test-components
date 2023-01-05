import { Container as MuiContainer, ContainerProps } from '@mui/material';

const Container = ({ children, ...rest }: ContainerProps): JSX.Element => {
  return <MuiContainer {...rest}> {children} </MuiContainer>;
};

export default Container;
