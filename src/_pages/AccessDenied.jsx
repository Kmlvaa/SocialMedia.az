import { useSelector } from "react-redux";

export default function AccessDenied() {

    const user = useSelector(state => state.user);

    return (
        <div className="relative h-screen w-screen overflow-hidden bg-transparent text-white">
            <div className="absolute inset-0 flex flex-col gap-5 items-center justify-center z-0">
                <h1 className="text-5xl font-bold text-red-600 select-none pointer-events-none">
                    Access Denied
                </h1>
                <p className='text-xl font-mono'>You do not have permission to access this page.</p>
                {!user.isAuthenticated ?
                    <button className="bg-red-800 p-2 text-white hover:bg-red-700 rounded-md"><a href="/account/login">Back to Login</a></button>
                    :
                    <button className="bg-red-800 p-2 text-white hover:bg-red-700 rounded-md"><a href="/">Back to Home page</a></button>
                }
            </div>
        </div>
    );
}
