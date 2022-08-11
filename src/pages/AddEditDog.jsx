import React, { useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBValidation,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import ChipInput from "material-ui-chip-input";
import FileBase from "react-file-base64";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createDog } from "../redux/features/dogSlice";

const initialState = {
  title: "",
  name: "",
  description: "",
  tags: [],
};

const AddEditDog = () => {
  const [dogData, setDogData] = useState(initialState);
  const [tagErrMsg, setTagErrMsg] = useState(null);
  const { error, userDogs } = useSelector((state) => ({
    ...state.dog,
  }));
  const { user } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { name, title, description, tags} = dogData;
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const singleDog = userDogs.find((dog) => dog._id === id);
      console.log(singleDog);
      setDogData({ ...singleDog });
    }
  }, [id]);

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tags.length) {
      setTagErrMsg("Please provide some tags");
    }
    if (name && title && description && tags) {
      const updatedDogData = { ...dogData, name: user?.result?.name };

      if (!id) {
        dispatch(createDog({ updatedDogData, navigate, toast }));
      } 
      // else {
      //   dispatch(updateDog({ id, updatedDogData, toast, navigate }));
      // }
      handleClear();
    }
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setDogData({ ...dogData, [name]: value });
  };
  const handleAddTag = (tag) => {
    setTagErrMsg(null);
    setDogData({ ...dogData, tags: [...dogData.tags, tag] });
  };
  const handleDeleteTag = (deleteTag) => {
    setDogData({
      ...dogData,
      tags: dogData.tags.filter((tag) => tag !== deleteTag),
    });
  };
  const handleClear = () => {
    setDogData({ title: "", name: "", description: "", tags: [] });
  };

  return (
    <div
      style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "450px",
        alignContent: "center",
        marginTop: "120px",
      }}
      className="container"
    >
      <MDBCard alignment="center">
        <h5>{id ? "Update Dog" : "Add Dog"}</h5>
        <MDBCardBody>
          <MDBValidation onSubmit={handleSubmit} className="row g-3" noValidate>
            <div className="col-md-12">
            <MDBInput
                placeholder="Enter Title"
                type="text"
                value={title || ""}
                name="title"
                onChange={onChange}
                className="form-control"
                required
                invalid
              />
            </div>
            <div className="col-md-12">
              <MDBInput
                placeholder="Enter Name"
                type="name"
                value={name || ""}
                name="name"
                onChange={onChange}
                className="form-control"
                required
                invalid
              />
            </div>
            <div className="col-md-12">
              <MDBInput
                placeholder="Enter Description"
                type="text"
                value={description}
                name="description"
                onChange={onChange}
                className="form-control"
                required
                invalid
                textarea
                rows={4}
              />
            </div>
            <div className="col-md-12">
              <ChipInput
                name="tags"
                variant="outlined"
                placeholder="Enter Tag"
                fullWidth
                value={tags}
                onAdd={(tag) => handleAddTag(tag)}
                onDelete={(tag) => handleDeleteTag(tag)}
              />
              {tagErrMsg && <div className="tagErrMsg">{tagErrMsg}</div>}
            </div>
            <div className="d-flex justify-content-start">
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setDogData({ ...dogData, imageFile: base64 })
                }
              />
            </div>
            <div className="col-12">
              <MDBBtn style={{ width: "100%" }}>
                {id ? "Update" : "Submit"}
              </MDBBtn>
              <MDBBtn
                style={{ width: "100%" }}
                className="mt-2"
                color="danger"
                onClick={handleClear}
              >
                Clear
              </MDBBtn>
            </div>
          </MDBValidation>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default AddEditDog