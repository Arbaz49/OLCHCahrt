import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loader() {
  return (
    <Box sx={{ display: 'flex',justifyContent:"center",margin:"auto",marginTop:"200px",color:"aqua" }}>
      <CircularProgress size={200} sx={{color:"aqua"}}   />
    </Box>
  );
}