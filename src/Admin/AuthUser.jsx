import { useState, useEffect } from 'react'
import { users, authorized_users, randomUsers } from './data'

function AuthUser() {
    // const [userlist, setUserlist] = useState(randomUsers);
    // const [userlist, setUserlist] = useState(users);
    const [userlist, setUserlist] = useState();

    // const [authorized, setAuthorized] = useState(authorized_users);
    const [authorized, setAuthorized] = useState();

    const [idSearch, setIdSearch] = useState("");
    const [nameSearch, setNameSearch] = useState("");
    const [roleSearch, setRoleSearch] = useState("");
    const [orgSearch, setOrgSearch] = useState("");

    const [filteredDataSize, setFilteredDataSize] = useState();
    const [lLimit, setLLimit] = useState(0);
    const [hLimit, setHLimit] = useState(10);

    const getUsers = async () => {
        try {
            const response = await fetch('http://3.110.195.157/users', {
                method: 'GET',
                // headers: {
                //   'Content-Type': 'application/json'
                // }
                // body: JSON.stringify(body)
            });
            const data = await response.json();
            setUserlist(data.data);
            console.log("users : ", data);
        } catch (error) {
            console.error(error);
        }
    };
    const getAuthorizedUsers = async () => {
        try {
            const response = await fetch('http://3.110.195.157/authorized_users', {
                method: 'GET',
                // headers: {
                //   'Content-Type': 'application/json'
                // }
                // body: JSON.stringify(body)
            });
            const data = await response.json();
            setAuthorized(data.data);
            console.log("authorized : ", data);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        getUsers();
        getAuthorizedUsers();
    }, [])


    useEffect(() => {
        if (userlist) {
            setFilteredDataSize(handleFilter().length);
        }
        setLLimit(0);
        setHLimit(10);
    }, [idSearch, nameSearch, roleSearch, orgSearch, userlist]);


    const grantAuth = async (userId) => {
        try {
            const response = await fetch('http://3.110.195.157/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "user_id": userId })
            });
            const res = await response.json();
            console.log(res);
        } catch (error) {
            console.error(error);
        }
        getUsers();
        getAuthorizedUsers();
    }

    const revokeAuth = async (userId) => {
        try {
            const response = await fetch(`http://3.110.195.157/delete`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "user_id": userId })
            });
            const res = await response.json();
            console.log(res);
        } catch (error) {
            console.error(error);
        }
        getUsers();
        getAuthorizedUsers();
    }


    function isAuthorized(user_id) {
        return authorized.some(user => user.user_id === user_id);
    }

    const handleFilter = () => {
        const filtered = userlist.filter((user) => {
            const idterm = idSearch.toString().toLowerCase();
            const nameterm = nameSearch.toString().toLowerCase();
            const roleterm = roleSearch.toString().toLowerCase();
            const orgterm = orgSearch.toString().toLowerCase();

            const id = user.id.toString().toLowerCase();
            const name = user.firstname.toString().toLowerCase() + " " + user.lastname.toString().toLowerCase();
            const role = user.role.toString().toLowerCase();
            const org = user.organization.toString().toLowerCase();
            if ((idterm || nameterm || roleterm || orgterm)) {
                return ((
                    idterm &&
                    id.startsWith(idterm)
                )
                    ||
                    (
                        nameterm &&
                        name.startsWith(nameterm)
                    )
                    ||
                    (
                        roleterm &&
                        role.startsWith(roleterm)
                    )
                    ||
                    (
                        orgterm &&
                        org.startsWith(orgterm)
                    )
                );
            }
            return true;
        });
        return filtered;
    };

    return (

        <div className="table w-full py-20 px-10 md:px-32">
            <table className="w-full border rounded-lg shadow-xl">
                <thead>
                    <tr className="bg-[#362f4b] border-b">

                        <th className="p-2 border-r cursor-pointer text-sm font-bold text-white">
                            <div className="flex items-center justify-center">
                                User ID

                            </div>
                        </th>
                        <th className="p-2 border-r cursor-pointer text-sm font-bold text-white">
                            <div className="flex items-center justify-center">
                                Name

                            </div>
                        </th>
                        <th className="p-2 border-r cursor-pointer text-sm font-bold text-white">
                            <div className="flex items-center justify-center">
                                Role

                            </div>
                        </th>
                        <th className="p-2 border-r cursor-pointer text-sm font-bold text-white">
                            <div className="flex items-center justify-center">
                                Organization

                            </div>
                        </th>
                        <th className="p-2 border-r cursor-pointer text-sm font-bold text-white">
                            <div className="flex items-center justify-center">
                                Action

                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-gray-50 text-center">

                        <td className="p-2 border-r">
                            <div className="relative w-full px-4">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 ml-3 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                                </div>
                                <input type="text" id="simple-search" value={idSearch} onChange={(e) => setIdSearch(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2" placeholder="Search by ID" required />
                            </div>
                        </td>
                        <td className="p-2 border-r">
                            <div className="relative w-full px-4">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 ml-3 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                                </div>
                                <input type="text" id="simple-search" value={nameSearch} onChange={(e) => setNameSearch(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2" placeholder="Search by Name" required />
                            </div>
                        </td>
                        <td className="p-2 border-r">
                            <div className="relative w-full px-4">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 ml-3 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                                </div>
                                <input type="text" id="simple-search" value={roleSearch} onChange={(e) => setRoleSearch(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2" placeholder="Search by Role" required />
                            </div>
                        </td>
                        <td className="p-2 border-r">
                            <div className="relative w-full px-4">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 ml-3 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                                </div>
                                <input type="text" id="simple-search" value={orgSearch} onChange={(e) => setOrgSearch(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2" placeholder="Search by Organization" required />
                            </div>
                        </td>
                        <td></td>

                    </tr>{
                        userlist && authorized ?

                            (handleFilter()
                                .slice(lLimit, hLimit)
                                .map((user) => (
                                    <tr key={user.id} className="user-rows bg-gray-100 text-center border-b text-sm text-gray-600 h-12">
                                        <td className="p-2 border-r font-medium ">{user.id}</td>
                                        <td className="p-2 border-r">{`${user.firstname} ${user.lastname}`}</td>
                                        <td className="p-2 border-r">{user.role}</td>
                                        <td className="p-2 border-r">{user.organization}</td>
                                        {
                                            isAuthorized(user.id) ?
                                                (
                                                    <td>
                                                        {/* <button href="#" className="bg-blue-500 w-24 p-2 mr-3 rounded-md pointer-events-none text-white hover:shadow-lg text-xs font-thin">Authorized</button> */}
                                                        <button onClick={() => revokeAuth(user.id)} className="bg-red-500 px-3 w-full h-10 rounded-md text-white hover:shadow-lg text-xs font-thin">Revoke Authorization</button>
                                                    </td>
                                                ) :
                                                (
                                                    <td >
                                                        {/* <button href="#" className="bg-blue-500 w-24 p-2 mr-3 rounded-md pointer-events-none text-white hover:shadow-lg text-xs font-thin">Unauthorized</button> */}
                                                        <button onClick={() => grantAuth(user.id)} className="bg-green-500 px-3 w-full h-10 rounded-md text-white hover:shadow-lg text-xs font-thin">Grant Authorization</button>
                                                    </td>
                                                )
                                        }
                                    </tr>
                                ))) : <></>}
                </tbody>

                <tfoot>

                    <tr className='bg-[#f3f4f6]'>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td className='flex flex-col items-center '>
                            <span className="text-sm text-gray-700 ">
                                <span className="font-semibold text-gray-900 ">{lLimit + 1}</span> - <span className="font-semibold text-gray-900 ">{hLimit > filteredDataSize ? filteredDataSize : hLimit}</span> of <span className="font-semibold text-gray-900 ">{filteredDataSize}</span> Users
                            </span>
                            <div className="inline-flex  xs:mt-0 mb-3">
                                <button disabled={lLimit <= 0} onClick={() => (setHLimit(hLimit - 10), setLLimit(lLimit - 10))} className="inline-flex items-center px-2 py-2 text-xs font-medium text-white bg-[#362f4b] rounded-l hover:bg-gray-900 ">
                                    <svg aria-hidden="true" className="w-4 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path></svg>
                                    Prev
                                </button>
                                <button disabled={hLimit >= filteredDataSize} onClick={() => (setHLimit(hLimit + 10), setLLimit(lLimit + 10))} className="inline-flex items-center px-2 py-2 text-xs font-medium text-white bg-[#362f4b] border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 ">
                                    Next
                                    <svg aria-hidden="true" className="w-4 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </button>
                            </div>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default AuthUser;
