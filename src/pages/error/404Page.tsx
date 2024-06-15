import { Box, Grid, Typography } from '@mui/material';
// import AuthBackground from '../../assets/auth/AuthBackground';
// import logo from '../../assets/img/logo_small.png';
import { Link } from 'react-router-dom';

export default function Page404() {
    return (
        <>
            <Box sx={{ width: '200' }}>
                {/* <AuthBackground /> */}
                <Grid
                    container
                    direction="column"
                    justifyContent="flex-end"

                >
                    <Grid item xs={12} sx={{ ml: 3, mt: 3 }}>
                        {/* <img src={logo} alt="logo" width={130} height={36} /> */}
                    </Grid>
                    <Grid item xs={12}>
                        <Grid
                            item
                            xs={12}
                            container
                            justifyContent="center"
                            alignItems="center"
                            sx={{ minHeight: { xs: 'calc(100vh - 90px)', md: 'calc(100vh - 200px)' } }}
                        >
                            <Grid item sx={{
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <h1 className='tittle'>PAGE NOT FOUND</h1>
                                <Box className="card">
                                    <Typography>
                                        We can't find that page
                                    </Typography>
                                    <Typography >
                                        We're fairly sure that page used to be here, but seems to have gone missing. We do apologise on it's behalf
                                    </Typography>
                                    <Link className='btn green' to='/'>
                                        Back Home
                                    </Link>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
