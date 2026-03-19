import { FaInstagram, FaXTwitter, FaGithub } from 'react-icons/fa6';
function card(props){
    return <>
    <div className="card">
        <div className="top">
            <img id='back' src= {props.backImage} alt="" />
            <button>Follow</button>
            <img id="profile" src={props.photo} alt="" />
        </div>
        <div className="centre">
            <h2>{props.name}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, libero.</p>
        </div>
        <div className="bottom">
            <div id="reach" className="likes">
                <h3 id="num">{props.likes}</h3>
                <p id="text">Likes</p>
            </div>

            <div id="reach" className="posts">
                <h3 id="num">{props.posts}</h3>
                <p id="text">Posts</p>
            </div>

            <div id="reach" className="views">
                <h3 id="num">{props.views}</h3>
                <p id="text">Views</p>
            </div>
        </div>
        <div className="icons">
            <div className="insta"><FaInstagram size={20} /></div>
            <div className="twitter"><FaXTwitter  size={20} /></div>
            <div className="github"><FaGithub    size={20} /></div>
        </div>
        <script>
        </script>
    </div>
    </>
} // ye ban gya ab props use krenge

export default card