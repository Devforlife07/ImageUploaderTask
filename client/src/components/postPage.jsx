import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { CloudUploadIcon } from "@material-ui/icons/";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import Button from "@babel/core";
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));
const PostPage = () => {
  const classes = useStyles();
  const [file, setFile] = useState();
  const [val, setVal] = useState({
    title: "",
    description: "",
  });
  const handleChange = (e) => {
    setVal({ ...val, [e.target.name]: e.target.value });
  };
  return (
    <div className="main">
      <div className="header"></div>
      <form>
        <div>
          <h1>Post Details</h1>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TextField
            id="standard-basic"
            onChange={handleChange}
            name="title"
            value={val.title}
            label="Title"
          />
          <TextField
            id="standard-textarea"
            value={val.description}
            onChange={handleChange}
            label="Description"
            placeholder="Description"
            multiline
          />
          <input
            type="file"
            value="upload"
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
            color="primary"
            className={classes.button}
            endIcon={<Icon>send</Icon>}
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PostPage;
