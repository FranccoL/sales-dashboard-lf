import styled from 'styled-components'
import { Box, Container, Grid2 } from '@mui/material'

const LoginArea = styled.div`
  background: #666;
`

const LoginImage = styled.div`
  background-image: url(/login-image.svg);
  background-size: cover;
  height: 100vh;
  width: 50vw;
`
function Login() {
  return (
    <>
      <Box>
        <Grid2
          container
          sx={{ display: 'flex', alignItems: 'center', height: '100vh' }}
        >
          <Container maxWidth="sm">
            <LoginArea>LOGIN</LoginArea>
          </Container>
        </Grid2>
        <Grid2 container sx={{ display: { xs: 'none', sm: 'block' } }}>
          <LoginImage />
        </Grid2>
      </Box>
    </>
  )
}

export default Login
