import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TextField from "@material-ui/core/TextField";
import Name from "./components/name.jsx";
import PostPage from "./components/postPage";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { CloudUploadIcon, Subject } from "@material-ui/icons/";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import ShowPost from "./components/showPost";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));
function App() {
  const [toDisplay, settoDisplay] = useState(0);
  const classes = useStyles();
  const [file, setFile] = useState();
  const [alert, setAlert] = useState({
    show: false,
    title: "",
    severity: "",
  });
  const [val, setVal] = useState({
    title: "",
    description: "",
  });
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!localStorage.getItem("name")) {
      setDisplay(1);
    } else setDisplay(0);
  });
  useEffect(() => {
    console.log(file);
  }, [file]);
  const handleChange = (e) => {
    setVal({ ...val, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("productImage", file);
    data.append("title", val.title);
    data.append("description", val.description);
    try {
      let res = await Axios.post(
        "/api/uploadImage",
        data,
        {
          "Content-Type": "multipart/form-data",
        }
      );
      console.log(res);
      setAlert({
        show: true,
        title: "Image Successfully Uploaded",
        severity: "success",
      });
    } catch (e) {
      console.log(e.response.data.msg);
      setAlert({
        show: true,
        title: e.response.data.msg,
        severity: "error",
      });
    }
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlert({
      show: false,
      title: "",
      severity: "",
    });
  };
  return (
    <>
      {display == 1 ? (
        <>
          <Name setDisplay={setDisplay} />
        </>
      ) : (
        <>
          <Button
            onClick={() => settoDisplay(toDisplay ^ 1)}
            style={{ float: "right" }}
            variant="contained"
            color="primary"
          >
            {toDisplay === 0 ? "Show Images" : "Post Images"}
          </Button>

          {toDisplay === 0 ? (
            <div className="main">
              <div className="header"></div>
              <form onSubmit={handleSubmit}>
                <div>
                  <h1>Post Details</h1>
                </div>
                <div className="enteries">
                  <TextField
                    id="standard-basic"
                    name="title"
                    value={val.title}
                    onChange={handleChange}
                    label="Title"
                  />
                  <TextField
                    id="standard-textarea"
                    name="description"
                    onChange={handleChange}
                    label="Description"
                    placeholder="Description"
                    multiline
                  />
                  <input
                    type="file"
                    name="productImage"
                    id="exampleFormControlFile1"
                    label="Upload Image"
                    style={{ fontFamily: "Poppins" }}
                    onChange={(e) => {
                      const file = e.target.files[0];
                      setFile(file);
                    }}
                  />
                  <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    className={classes.button}
                    // endIcon={<Icon>send</Icon>}
                  >
                    Send
                  </Button>
                </div>
              </form>
              <Snackbar
                open={alert.show}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert onClose={handleClose} severity={alert.severity}>
                  {alert.title}
                </Alert>
              </Snackbar>
            </div>
          ) : (
            <ShowPost />
          )}
        </>
      )}
    </>
  );
}

export default App;
