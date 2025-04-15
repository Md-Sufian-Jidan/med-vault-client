import useAuth from "../../../Hooks/useAuth";

const AdminHome = () => {
    const { user } = useAuth();

    return (<div>
        <h2 className="text-2xl font-semibold mb-4">Welcome {user?.displayName} Admin!</h2>
        <p>This is the admin dashboard overview.</p>
    </div>
    )
}

export default AdminHome;
