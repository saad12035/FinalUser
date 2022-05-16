import React, {useEffect, useState} from "react";
import {Button} from "antd";
import {useHistory} from "react-router-dom";
import EditableTable from "../../components/table/table";
import 'reactjs-popup/dist/index.css';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import LoadingOverlay from 'react-loading-overlay';



const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
function UploadPicture() {
  const [data, setData] = useState(null);
  const formData  = new FormData();
  const router = useHistory();
  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#ffffff");
  return (
      <>
        <LoadingOverlay
            active={loading}
            spinner={<ClipLoader color={color} loading={loading} css={override} size={150} />}
            text='Processing'
        >
        <div style={{height:400}}>
          <body>
          <div>
            {/*{selectedImage && (*/}
            {/*    <div>*/}
            {/*      <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />*/}
            {/*      <br />*/}
            {/*      <button  onClick={()=>setSelectedImage(null)}>Remove</button>*/}
            {/*    </div>*/}
            {/*)}*/}
            {/*<br />*/}
            {/*<br />*/}
            <input
                type="file"
                name="myImage"
                onChange={(event) => {
                  formData.append("file", event.target.files[0]);
                  formData.append("filename",event.target.files[0].name )
                  console.log(event.target.files[0]);
                }}
            />
          </div>



         <Button onClick={async ()=>{
           const response=await fetch('http://127.0.0.1:5000',{
             method:'POST',
             body:formData
           }, setLoading(!loading)
         )
           if(response.ok){
             setLoading(loading)
            response.json().then(r=>{setData(r)})
           }
         }}>Submit</Button>
          </body>
        </div>
        <EditableTable{...data}/>



      </LoadingOverlay>
      </>
  );
}

export default UploadPicture;
