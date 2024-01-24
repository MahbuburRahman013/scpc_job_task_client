import { useForm, Controller } from 'react-hook-form';
import { Link } from 'react-router-dom';
import {
    TextField,
    Button,
    Typography,
    Container,
    Grid,
} from '@mui/material';





const Registration = () => {

    const { handleSubmit, control } = useForm();
   
   

    const onSubmit =(data) => {
       
        console.log(data)
    }



    return (
        <div>
            <Container component="main" maxWidth="xs">
                <div className="mt-8">
                    <Typography component="h1" variant="h4" sx={{ fontWeight: "700", color: 'gray' }} className="text-center">
                        Sign up
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Controller
                                    name="Name"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            label="Name"
                                            variant="outlined"
                                            fullWidth
                                            required
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Controller
                                    name="photo"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            label="Photo URL"
                                            variant="outlined"
                                            fullWidth
                                            required
                                        />
                                    )}
                                />
                            </Grid>
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
                            sx={{ marginTop: '20px' }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end" className="mt-2">
                            <Grid item>
                                <Link to="/login" className="text-blue-500 hover:underline">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default Registration;