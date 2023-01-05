import { Popover as MuiPopover, PopoverProps, Typography } from '@mui/material';

interface ExPopoverProps extends PopoverProps {
  contents: JSX.Element;
  anchorEl: HTMLButtonElement | null;
  onClose: () => void;
}

const Popover = ({ contents, anchorEl, onClose }: ExPopoverProps) => {
  const id = anchorEl ? 'simple-popover' : undefined;
  return (
    <MuiPopover
      id={id}
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      {[contents].map((content, i: number) => {
        return (
          <Typography sx={{ p: 1 }} key={i}>
            {content}
          </Typography>
        );
      })}
    </MuiPopover>
  );
};

export default Popover;
