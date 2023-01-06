import React from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { uid } from "uid"
import { set, ref } from "firebase/database"


const Home = () => {
    //For navigation
    const navigate = useNavigate();

    const [projectInfo, setProjectInfo] = React.useState({
        name: "",
        startDate: "",
        endDate: "",
        managerName: "",
        managerEmail: ""
    })
    const [dailyStatus, setDailyStatus] = React.useState("")


    //This hook is used so that user can go to the home page without signing out
    React.useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (!user) {
                navigate("/");
            }
        });
    }, []);

    //Sign Out handler function
    const signOutHandler = () => {
        signOut(auth)
            .then(() => navigate("/"))
            .catch((err) => console.log(err.message));
    };

    //Add Project
    const projectAddHandler = (event) => {
        event.preventDefault();

        const uidd = uid()

        set(ref(db, `/${auth.currentUser.uid}/${uidd}`), {
            uidd:uidd,
            Name: projectInfo.name,
            "Start Date": projectInfo.startDate,
            "End Date": projectInfo.endDate,
            "Manager Name": projectInfo.managerName,
            "Manager Email": projectInfo.managerEmail,
            Status: dailyStatus
        })

        setProjectInfo({ name: "", startDate: "", endDate: "", managerName: "", managerEmail: "" })
        setDailyStatus("")
    }
    return (
        <div>
            <form>
                <input type="text" placeholder="Name" value={projectInfo.name} onChange={(event) => setProjectInfo({ ...projectInfo, name: event.target.value })} />
                <input type="date" placeholder="Start Date" value={projectInfo.startDate} onChange={(event) => setProjectInfo({ ...projectInfo, startDate: event.target.value })} />
                <input type="date" placeholder="End Date" value={projectInfo.endDate} onChange={(event) => setProjectInfo({ ...projectInfo, endDate: event.target.value })} />
                <input type="text" placeholder="Manager Name" value={projectInfo.managerName} onChange={(event) => setProjectInfo({ ...projectInfo, managerName: event.target.value })} />
                <input type="text" placeholder="Manager Email" value={projectInfo.managerEmail} onChange={(event) => setProjectInfo({ ...projectInfo, managerEmail: event.target.value })} />
                <textarea name="" id="" value={dailyStatus} onChange={event => setDailyStatus(event.target.value)}></textarea>
                <button onClick={projectAddHandler}>Add</button>
            </form>
            <button onClick={signOutHandler}>Sign Out</button>
        </div>
    );
};

export default Home;
