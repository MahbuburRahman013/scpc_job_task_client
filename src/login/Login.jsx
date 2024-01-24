import { useForm, Controller } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { TextField, Button, Typography, Container, CssBaseline, Grid } from '@mui/material';




const Login = () => {
    const { handleSubmit, control } = useForm();

    const onSubmit = (data) => {

      

    };



    return (
        <div>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className="mt-8">
                    <Typography component="h1" variant="h4" sx={{ fontWeight: "700", color: 'gray' }} className="text-center">
                        Sign in
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Controller
                                    name="email"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            label="Email Address"
                                            variant="outlined"
                                            fullWidth
                                            required
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Controller
                                    name="password"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            label="Password"
                                            type="password"
                                            variant="outlined"
                                            fullWidth
                                            required
                                        />
                                    )}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{ marginTop: "20px" }}
                        >
                            Sign In
                        </Button>
                        <Grid container justifyContent="flex-end" className="mt-2">
                            <Grid item>
                                <Link to="/registration" className="text-blue-500 hover:underline">
                                    Dont have an account? Sign up
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default Login;