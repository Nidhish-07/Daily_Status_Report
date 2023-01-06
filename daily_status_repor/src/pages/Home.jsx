import React from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { uid } from "uid";
import { set, ref, onValue, remove, update } from "firebase/database";

const Home = () => {
    //For navigation
    const navigate = useNavigate();

    const [projectInfo, setProjectInfo] = React.useState({
        name: "",
        startDate: "",
        endDate: "",
        managerName: "",
        managerEmail: "",
        dailyStatus: ""
    });
    // const [dailyStatus, setDailyStatus] = React.useState("");
    const [projects, setProjects] = React.useState([]);
    const [isEdit, setIsEdit] = React.useState(false);

    //This hook is used so that user can go to the home page without signing out
    React.useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {

                //Read Projects Info
                onValue(ref(db, `/${auth.currentUser.uid}`), (snapshot) => {
                    setProjects([]);
                    const data = snapshot.val();
                    if (data !== null) {
                        Object.values(data).map((project) =>
                            setProjects((prevProjects) => [...prevProjects, project])
                        );
                    }
                });
            } else if (!user) {
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

        const uidd = uid();

        set(ref(db, `/${auth.currentUser.uid}/${uidd}`), {
            uidd: uidd,
            Name: projectInfo.name,
            "Start Date": projectInfo.startDate,
            "End Date": projectInfo.endDate,
            "Manager Name": projectInfo.managerName,
            "Manager Email": projectInfo.managerEmail,
            Status: projectInfo.dailyStatus,
        });

        setProjectInfo({
            name: "",
            startDate: "",
            endDate: "",
            managerName: "",
            managerEmail: "",
            dailyStatus: ""
        });
    };

    //Delete project
    const deleteHandler = (event, uidd) => {
        event.preventDefault()

        remove(ref(db, `/${auth.currentUser.uid}/${uidd}`))
    }

    //update Project

    let tempUidd;
    const updateHandler = (event, project) => {
        event.preventDefault()

        setIsEdit(true)
        setProjectInfo(project.project)

        tempUidd = project.uidd

    }
    const updateConfirmHandler = () => {
        update(ref(db, `/${auth.currentUser.uid}/${tempUidd}`), {
            name: projectInfo.name,
            startDate: projectInfo.startDate,
            endDate: projectInfo.endDate,
            managerName: projectInfo.managerName,
            managerEmail: projectInfo.managerEmail,
            dailyStatus: projectInfo.dailyStatus,
            tempUidd:tempUidd
        })

    }
    return (
        <div>
            <form>
                <input
                    type="text"
                    placeholder="Name"
                    value={projectInfo.name}
                    onChange={(event) =>
                        setProjectInfo({ ...projectInfo, name: event.target.value })
                    }
                />
                <input
                    type="date"
                    placeholder="Start Date"
                    value={projectInfo.startDate}
                    onChange={(event) =>
                        setProjectInfo({ ...projectInfo, startDate: event.target.value })
                    }
                />
                <input
                    type="date"
                    placeholder="End Date"
                    value={projectInfo.endDate}
                    onChange={(event) =>
                        setProjectInfo({ ...projectInfo, endDate: event.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder="Manager Name"
                    value={projectInfo.managerName}
                    onChange={(event) =>
                        setProjectInfo({ ...projectInfo, managerName: event.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder="Manager Email"
                    value={projectInfo.managerEmail}
                    onChange={(event) =>
                        setProjectInfo({ ...projectInfo, managerEmail: event.target.value })
                    }
                />
                <textarea
                    name=""
                    id=""
                    value={projectInfo.dailyStatus}
                    onChange={(event) => setProjectInfo({ ...projectInfo, dailyStatus: event.target.value })}
                ></textarea>
                {projects.map((project) => (
                    <div>
                        <h1>{project.Name}</h1>
                        <button onClick={(event) => updateHandler(event, project)}>Update</button>
                        <button onClick={(event) => deleteHandler(event, project.uidd)}>Delete</button>
                    </div>
                ))}
                {isEdit ? (
                    <button onClick={updateConfirmHandler}>Confirm</button>) : (
                    <button onClick={projectAddHandler}>Add</button>)}
            </form>

            <button onClick={signOutHandler}>Sign Out</button>
        </div>
    );
};

export default Home;
