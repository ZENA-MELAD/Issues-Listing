import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import config from "../../Constants/enviroment";
import HeaderIssue from "../../components/HeaderIssue/HeaderIssue";
import MetaDataInf from "../../components/MetaDataInfo/MetaDataInf";
import Loading from "../../components/Loading/Loading";
import Label from "../../components/label/label";
import Body from "../../components/Body/Body";
import Comments from "../../components/Comments/Comments";

const IssueDetail = () => {
  const [issue, setIssue] = useState({});
  const [loading, setLoading] = useState(true);
  const[comments,setComments]=useState([]);
  const [loadingComments, setLoadingComments] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`${config.baseUrl}/${config.issues}/${id}`)
      .then((res) => {
        console.log(res);
        setIssue(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  useEffect(()=>{
    const fetchComments=async()=>{
      setLoadingComments(true)
      const res=await axios.get(issue.comments_url)
      setComments(res.data)
      console.log(res.data)
      setLoadingComments(false)
    }
    if(issue?.comments>0) fetchComments()
  },[issue])
  return (
    <>
      {loading == true ? (
        <Loading />
      ) : (
        <div className="p-8 flex flex-col gap-y-5">
          <HeaderIssue title={issue.title} state={issue.state} />
          <MetaDataInf
            state={issue.state}
            author={issue.user.login}
            date={new Date(issue.created_at).toLocaleDateString("en-GB")}
            numberComments={issue.comments}
            lastUpdate={new Date(issue.updated_at).toLocaleDateString("en-GB")}
          />
          <Label labels={issue.labels} />
          <Body text={issue.body}/>
        {issue.comments==0?<p className=" capitalize text-lg font-medium ml-2.5">no comments</p>:<Comments comments={comments} loadingComments={loadingComments}/>}  
        </div>
      )}
    </>
  );
};

export default IssueDetail;
