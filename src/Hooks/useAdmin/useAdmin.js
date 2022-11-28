import { useEffect, useState } from "react"


const useAdmin = email => {

    const [isAdminLoading, setIsAdminLoading] = useState(true);

    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        if (email) {
            fetch(`https://wheels-on-tars-server-katibur.vercel.app/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsAdmin(data.isAdmin);
                    setIsAdminLoading(false);
                })
        }
    }, [email]);
    return [isAdmin, isAdminLoading];
}

export default useAdmin;