import './style.scss';

function Post(props){
    return(
  
        <div>
            <strong>{props.author}</strong>
            <p>{props.content}</p>

        </div>
        
    );
}
export default Post
// default exports vs Named exports

