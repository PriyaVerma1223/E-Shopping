// /* eslint-disable react/no-unescaped-entities */
// import { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import myContext from "../../context/myContext";
// import toast from "react-hot-toast"
// import { auth, fireDB } from "../../firebase/FirebaseConfig";
// import { Timestamp, addDoc, collection } from "firebase/firestore";
// import Loader from "../../components/loader/Loader"
// import { createUserWithEmailAndPassword } from "firebase/auth";

// const Signup = () => {
//     const context = useContext(myContext);
//     const {loading, setLoading } = context;

//     // navigate 
//     const navigate = useNavigate();

//     // User Signup State 
//     const [UserSignup, setUserSignup] = useState({
//         name: "",
//         email: "",
//         password: "",
//         role: "user"
//     });

//     const userSignupFunction = async () => {
//         // validation 
//         if (UserSignup.name === "" || UserSignup.email === "" || UserSignup.password === "") {
//             toast.error("All Fields are required")
//         }

//         setLoading(true)

//         try {
//             const users = await createUserWithEmailAndPassword(auth,UserSignup.email,UserSignup.password);

//                  // create user object
//                  const user = {
//                     name: UserSignup.name,
//                     email: users.user.email,
//                     uid: users.user.uid,
//                     role: UserSignup.role,
//                     time: Timestamp.now(),
//                     date: new Date().toLocaleString(
//                         "en-US",
//                         {
//                             month: "short",
//                             day: "2-digit",
//                             year: "numeric",
//                         }
//                     )
//                 }

//                 //create use referencre
//                 const userReference = collection(fireDB,"user")
                
//                 //add user details
//                 addDoc(userReference,user);

//                 setUserSignup({
//                     name: "",
//                     email: "",
//                     password: ""
//                 })

//                 toast.success("Signup Successfully");

//                 setLoading(false);

//                 navigate('/login')
                
//         } catch (error) {
//             console.log(error);
//         }
//     }


//     return (
//         <div className='flex justify-center items-center h-screen'>
//             {loading && <Loader />}
//             {/* Login Form  */}
//             <div className="login_Form bg-indigo-50 px-1 lg:px-8 py-6 border border-indigo-100 rounded-xl shadow-md">

//                 {/* Top Heading  */}
//                 <div className="mb-5">
//                     <h2 className='text-center text-2xl font-bold text-indigo-500 '>
//                         Signup
//                     </h2>
//                 </div>

//                 {/* Input One  */}
//                 <div className="mb-3">
//                     <input
//                         type="text"
//                         placeholder='Full Name'
//                         value={UserSignup.name}
//                         onChange={(e) => {
//                             setUserSignup({
//                                 ...UserSignup,
//                                 name : e.target.value
//                             })
//                         }}
//                         className='bg-indigo-50 border border-indigo-200 px-2 py-2 w-96 rounded-md outline-none placeholder-indigo-200'
//                     />
//                 </div>

//                 {/* Input Two  */}
//                 <div className="mb-3">
//                     <input
//                         type="email"
//                         placeholder='Email Address'
//                         value={UserSignup.email}
//                         onChange={(e) => {
//                             setUserSignup({
//                                 ...UserSignup,
//                                 email : e.target.value
//                             })
//                         }}
//                         className='bg-indigo-50 border border-indigo-200 px-2 py-2 w-96 rounded-md outline-none placeholder-indigo-200'
//                     />
//                 </div>

//                 {/* Input Three  */}
//                 <div className="mb-5">
//                     <input
//                         type="password"
//                         placeholder='Password'
//                         value={UserSignup.password}
//                         onChange={(e) => {
//                             setUserSignup({
//                                 ...UserSignup,
//                                 password : e.target.value
//                             })
//                         }}
//                         className='bg-indigo-50 border border-indigo-200 px-2 py-2 w-96 rounded-md outline-none placeholder-indigo-200'
//                     />
//                 </div>

//                 {/* Signup Button  */}
//                 <div className="mb-5">
//                     <button
//                     onClick={userSignupFunction}
//                         type='button'
//                         className='bg-indigo-500 hover:bg-indigo-700 w-full text-white text-center py-2 font-bold rounded-md '
//                     >
//                         Signup
//                     </button>
//                 </div>

//                 <div>
//                     <h2 className='text-black'>Have an account <Link className=' text-indigo-500 font-bold' to={'/login'}>Login</Link></h2>
//                 </div>

//             </div>
//         </div>
//     );
// }

// export default Signup;

/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
// import Loader from "../../components/loader/Loader";
import Loader from "../../components/loader/Loader";

const Signup = () => {
    const context = useContext(myContext);
    const {loading, setLoading } = context;

    // navigate 
    const navigate = useNavigate();

    // User Signup State 
    const [userSignup, setUserSignup] = useState({
        name: "",
        email: "",
        password: "",
        role: "user"
    });

    /**========================================================================
     *                          User Signup Function 
    *========================================================================**/

    const userSignupFunction = async () => {
        // validation 
        if (userSignup.name === "" || userSignup.email === "" || userSignup.password === "") {
            toast.error("All Fields are required")
        }

        setLoading(true);
        try {
            const users = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password);

            // create user object
            const user = {
                name: userSignup.name,
                email: users.user.email,
                uid: users.user.uid,
                role: userSignup.role,
                time: Timestamp.now(),
                date: new Date().toLocaleString(
                    "en-US",
                    {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                    }
                )
            }

            // create user Refrence
            const userRefrence = collection(fireDB, "user")

            // Add User Detail
            addDoc(userRefrence, user);

            setUserSignup({
                name: "",
                email: "",
                password: ""
            })

            toast.success("Signup Successfully");

            setLoading(false);
            navigate('/login')
        } catch (error) {
            console.log(error);
            setLoading(false);
        }

    }
    return (
        <div className='flex justify-center items-center h-screen'>
            {loading && <Loader />}
            {/* Login Form  */}
            <div className="login_Form bg-indigo-50 px-8 py-6 border border-indigo-100 rounded-xl shadow-md">

                {/* Top Heading  */}
                <div className="mb-5">
                    <h2 className='text-center text-2xl font-bold text-indigo-500 '>
                        Signup
                    </h2>
                </div>

                {/* Input One  */}
                <div className="mb-3">
                    <input
                        type="text"
                        placeholder='Full Name'
                        value={userSignup.name}
                        onChange={(e) => {
                            setUserSignup({
                                ...userSignup,
                                name: e.target.value
                            })
                        }}
                        className='bg-indigo-50 border border-indigo-200 px-2 py-2 w-96 rounded-md outline-none placeholder-indigo-200'
                    />
                </div>

                {/* Input Two  */}
                <div className="mb-3">
                    <input
                        type="email"
                        placeholder='Email Address'
                        value={userSignup.email}
                        onChange={(e) => {
                            setUserSignup({
                                ...userSignup,
                                email: e.target.value
                            })
                        }}
                        className='bg-indigo-50 border border-indigo-200 px-2 py-2 w-96 rounded-md outline-none placeholder-indigo-200'
                    />
                </div>

                {/* Input Three  */}
                <div className="mb-5">
                    <input
                        type="password"
                        placeholder='Password'
                        value={userSignup.password}
                        onChange={(e) => {
                            setUserSignup({
                                ...userSignup,
                                password: e.target.value
                            })
                        }}
                        className='bg-indigo-50 border border-indigo-200 px-2 py-2 w-96 rounded-md outline-none placeholder-indigo-200'
                    />
                </div>

                {/* Signup Button  */}
                <div className="mb-5">
                    <button
                        type='button'
                        onClick={userSignupFunction}
                        className='bg-indigo-500 hover:bg-indigo-600 w-full text-white text-center py-2 font-bold rounded-md '
                    >
                        Signup
                    </button>
                </div>

                <div>
                    <h2 className='text-black'>Have an account <Link className=' text-indigo-500 font-bold' to={'/login'}>Login</Link></h2>
                </div>

            </div>
        </div>
    );
}

export default Signup;