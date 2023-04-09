import Typography from '@mui/material/Typography';

const PostDate = ({ date }): JSX.Element => {
  const dateObject = new Date(date);
  const formattedDate = dateObject.toLocaleString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Typography component="small" variant="caption" color="text.secondary">
      {formattedDate}
    </Typography>
  );
};

export default PostDate;
