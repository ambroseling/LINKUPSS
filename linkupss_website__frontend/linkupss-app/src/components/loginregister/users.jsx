import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

const Users = () => {
    const [user, setUser] = useState();
    const history = useHistory();
    //const navigate = useNavigate();
    //const location = useLocation();

    useEffect(() => {
        // let isMounted = true;
        // const controller = new AbortController();

        // const getUsers = async () => {
        //     try {
        //         const response = await axiosPrivate.get('/users', {
        //             signal: controller.signal
        //         });
        //         console.log(response.data);
        //         isMounted && setUsers(response.data);
        //     } catch (err) {
        //         console.error(err);
        //         return history.push("/loginregister");
        //     }
        // }

        // getUsers();

        // return () => {
        //     isMounted = false;
        //     controller.abort();
        // }
        const loggedInUser = localStorage.getItem("user");
        console.log(loggedInUser);
        setUser(loggedInUser);
        // if (loggedInUser) {
        //   const foundUser = JSON.parse(loggedInUser);
        //   //console.log(foundUser.getItem(''));
        //   //setUser(foundUser);
        // }
    }, [])

    return (
        <article>
            <h2>Current User</h2>
            <h3 className="text-primary">{user}</h3>
            {/* {users?.length
                ? (
                    <ul>
                        //{users.map((user, i) => <li key={i}>{user?.username}</li>)}
                    </ul>
                ) : <p>No users to display</p>
            } */}
        </article>
    );
};

export default Users;