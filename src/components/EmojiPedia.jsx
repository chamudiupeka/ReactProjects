function EmojiPedia(props){
    return (
      <div className="term">
        <dt>
          <span className="emoji">{props.icon}</span>
          <span>{props.title}</span>
        </dt>
        <dd>
         {props.description}
        </dd>
      </div>
    );

}
export default EmojiPedia;