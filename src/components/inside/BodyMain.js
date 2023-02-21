import React, { useEffect, useState } from "react";
import styled from "styled-components";
import firebase from "firebase";
import { db } from "../../firebase";
import { useSelector } from 'react-redux';
import { userSelector } from '../../store/userSlice';
import FlipMove from "react-flip-move";

const BodyMain = () => {
  const user = useSelector(userSelector);

  const [input, setInput] = useState();
  const [posts, setPosts] = useState([]);
  const submitPost = (event) => {
    event.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: "This is Test",
      message: input,
      photoURL:user.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  // console.log(posts);

  return (
    
    <Container>
      <FlipMove>
      <PostShare>
        {/* <div className="PostShareFirst"> */}
        <form onSubmit={submitPost}>
          <div className="PostShareImg">
            <img src={user?.photoURL} alt="" />
          </div>
          <div className="PostShareBox">
            <input
              type="text"
              placeholder="Start a post"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <input type="submit" />
          </div>
          {/* </div> */}
        </form>

        <div className="PostShareSecond">
          <div>
            <img src="./images/image.png" alt="" />
            <span>Photo</span>
          </div>

          <div>
            <img src="./images/video.png" alt="" />
            <span>Video</span>
          </div>

          <div>
            <img src="./images/event.png" alt="" />
            <span>Event</span>
          </div>

          <div>
            <img src="./images/write.png" alt="" />
            <span>Write</span>
          </div>
        </div>
      </PostShare>

      {
          posts.map(({id, data: {name, description, message, photoURL}})=>{

            return <PostArticle key={id}>
      

        
            <div className="upper" >
            <div className="articleProfile">
            <div className="articleProfileImg">
              <img src={photoURL} alt="" />
            </div>
            <div className="articleProfileTitle">
              <p>{name}</p>
              <span>17h</span>
            </div>
            </div>
    
            <div className="dot">
            <img src="./images/dot.png" alt="" />
            </div>
            </div>
    
            <div className="middle">
              <div className="middleText">
              {message}
              </div>
              <div className="middleImg">
                <img src={photoURL} alt="" />
              </div>
            </div>
    
            <div className="lower">
              <div className="lowerFirst">
                <span>1 Comment</span>
                <hr />
              </div>
              
              <div className="lowerSecond">
              <div>
              <i className="fa-regular fa-thumbs-up"></i> Like
              </div>
              <div>
              <i className="fa-regular fa-comment-dots"></i> Comment
              </div>
              <div>
              <i className="fa-solid fa-repeat"></i> Repost
              </div>
              <div>
              <i className="fa-solid fa-paper-plane"></i> Send
              </div>
              </div>
            </div>
          </PostArticle>
          })

        }

</FlipMove>
    </Container>
    
  );
};

export default BodyMain;

const Container = styled.div`
  width: 45vw;
  background-color: #fff;

  @media (max-width: 768px) {
    width: 95vw;
  }
`;

const PostShare = styled.div`
  width: 95%;
  margin: 0 auto;

  form {
    width: 100%;
    gap: 10px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    input[type="submit"] {
      display: none;
    }
    .PostShareImg {
      img {
        width: 50px;
        height: 50px;
        border-radius: 24px;
      }
    }

    .PostShareBox {
      width: 95%;
      input {
        width: 95%;
        height: 45px;
        border-radius: 24px;
        padding-left: 15px;
        border-color: rgba(0, 0, 0, 0.2);
      }
    }
  }

  .PostShareSecond {
    width: 93%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    & > div {
      display: flex;
      align-items: center;
      gap: 15px;
      img {
        width: 27px;
      }
    }
  }
`;
const PostArticle = styled.div`

  padding:10px 10px;
  margin: 0 auto;
  background-color: #fff;


  .upper{
    display: flex;
    justify-content: space-between;

    .articleProfile{
      display: flex;
      gap: 10px;

      .articleProfileTitle{
        font-size:15px;
        font-weight: 500;
      }


      img{
        width: 50px;
        height: 50px;
        border-radius: 24px;
      }
    }

    .dot img{
      width: 25px;
      height: 25px;
    }
  }

  .middle{
    font-size: 14px;
    img{
      padding: 20px 0px;
      width: 100%;
    }
  }

  .lower{
    display: flex;
    flex-direction: column;

    .lowerFirst span{
      font-size: 14px;
    }

    .lowerSecond{
      display: flex;
      justify-content:space-between;

      & > div{
        display: flex;
        gap:5px;
        align-items: center;

      }
      i{
        font-size: 21px;
      }
    }
  }
`;
