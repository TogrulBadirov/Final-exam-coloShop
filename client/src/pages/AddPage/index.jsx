import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import "./index.scss";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
const AddPage = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sortValue, setSortValue] = useState(null)
  const [searchValue, setSearchValue] = useState('')
  const getAllProducts = async () => {
    const resp = await axios("http://localhost:3000/");
    setProducts(resp.data);
    setLoading(false);
  };

  const handlePost = async (value) => {
    try {
      const resp = await axios.post("http://localhost:3000/", value);
      toast.success('Product Successfully Created!')
    getAllProducts();
    } catch (error) {
      console.log("Can't Post Product");
    }
  };

  const handleDelete = async (id) => {
    try {
      const resp = await axios.delete(`http://localhost:3000/${id}`);
      toast('Product Successfully Deleted!', {
        icon: 'ℹ️',
      });

    getAllProducts();
    } catch (error) {
      console.log("Can't Delete Product");
    }
  };

  const toLower = (item)=>{
    if (typeof item === String) {
        return item.toLocaleLowerCase()
    }
    return item
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <Toaster  />
      <Helmet>
        <title>AddPage</title>
      </Helmet>
      <section id="AddPage">
        <div className="container">
          <Formik
            initialValues={{
              image: "",
              title: "",
              info: "",
              price: "",
              discount: "",
            }}
            validationSchema={Yup.object({
              image: Yup.string()
                .matches(/^[A-Za-z]/, "Must Start With Letter")
                .matches(
                  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
                  "Must Be URL!"
                )
                .required("Required"),
              title: Yup.string()
                .matches(/^[A-Za-z]/, "Must Start With Letter")
                .max(50, "Must be 50 characters or less")
                .required("Required"),
              info: Yup.string()
                .matches(/^[A-Za-z]/, "Must Start With Letter")
                .required("Required"),
              price: Yup.number()
                .min(1, "Must be at least 1 !")
                .required("Required"),
              discount: Yup.number()
                .min(0, "Must be at least 0 !")
                .max(99, "Must be 99 or less!")
                .required("Required"),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                handlePost(values);
                resetForm()
                setSubmitting(false);
              }, 400);
            }}
          >
            <Form className="add-form">
              <h2>Add Form</h2>

              <div>
                <label htmlFor="image">Image</label>
                <Field className="form-control" name="image" type="text" />
                <div className="error">
                  <ErrorMessage name="image" />
                </div>
              </div>

              <div>
                <label htmlFor="title">Title</label>
                <Field className="form-control" name="title" type="text" />
                <div className="error">
                  <ErrorMessage name="title" />
                </div>
              </div>

              <div>
                <label htmlFor="info">Info</label>
                <Field className="form-control" name="info" type="text" />
                <div className="error">
                  <ErrorMessage name="info" />
                </div>
              </div>

              <div>
                <label htmlFor="price">Price</label>
                <Field
                  className="form-control"
                  name="price"
                  type="number"
                  min={1}
                />
                <div className="error">
                  <ErrorMessage name="price" />
                </div>
              </div>

              <div>
                <label htmlFor="discount">Discount</label>
                <Field
                  className="form-control"
                  name="discount"
                  type="number"
                  min={0}
                  max={99}
                />
                <div className="error">
                  <ErrorMessage name="discount" />
                </div>
              </div>

              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </Form>
          </Formik>
        </div>
      </section>
      <section id="ProductTable">
        <div className="container">
         <div>
         <input placeholder="Search" type="text" className="form-control" onChange={(e)=>setSearchValue(e.target.value)} />
         </div>
          <div className="buttons">
          <button className="btn btn-dark" onClick={()=>setSortValue({property:"title",asc:true})}>Title: A-Z</button>
          <button className="btn btn-dark" onClick={()=>setSortValue({property:"title",asc:false})}>Title: A-Z</button>
          <button className="btn btn-dark" onClick={()=>setSortValue({property:"price",asc:true})}>Price: Increase</button>
          <button className="btn btn-dark" onClick={()=>setSortValue({property:"price",asc:false})}>Price: Decrease</button>
          <button className="btn btn-dark" onClick={()=>setSortValue(null)}>Default</button>
          </div>
          <table className="table table-dark">
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Info</th>
                <th>Price</th>
                <th>Discount</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products && products
              .filter(x=> x.title.toLowerCase().trim().includes(searchValue.toLocaleLowerCase().trim()))
              .sort((a,b)=>{
                if (sortValue && sortValue.asc === true) {
                  return ( toLower(a[sortValue.property]) > toLower(b[sortValue.property])) ? 1 : ((toLower(b[sortValue.property]) > toLower(a[sortValue.property])) ? -1 : 0)
                }
                else if (sortValue && sortValue.asc === false) {
                  return ( toLower(a[sortValue.property]) < toLower(b[sortValue.property])) ? 1 : ((toLower(b[sortValue.property]) < toLower(a[sortValue.property])) ? -1 : 0)
                }
                else{
                  return 0
                }
              })
              .map(item=>(
                <tr key={item._id}>
                <td><img src={item.image} alt="" /></td>
                <td>{item.title}</td>
                <td>{item.info}</td>
                <td>{item.price}</td>
                <td>{item.discount}</td>
                <td><button onClick={()=>handleDelete(item._id)} className="btn btn-danger">Delete</button></td>
              </tr>
              ))}
              
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default AddPage;
