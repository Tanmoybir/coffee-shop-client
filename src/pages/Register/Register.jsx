import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import Swal from 'sweetalert2'


const Register = () => {
    const { createUser, profileUpdate } = useContext(AuthContext)


    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const image = form.image.value
        const email = form.email.value
        const password = form.password.value

        createUser(email, password)
            .then(result => {
                profileUpdate(name, image)
                    .then(() => {

                    })
                console.log(result.user);
                form.reset()
            })
            .catch(error => {
                console.log(error);
                console.log(error.message);
            })
    }
    return (
        <div>
            <h1>Register here</h1>
            {/*  */}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Register now!</h1>

                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                            </div>
                            {/*  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="" placeholder="Photo-URL" name="image" className="input input-bordered" required />
                            </div>
                            {/*  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <div className="">
                            Already Have Account Please?<Link to={'/login'}><button className="btn btn-link">Login</button></Link>
                        </div>
                        <div className="text-center">
                            <SocialLogin />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;