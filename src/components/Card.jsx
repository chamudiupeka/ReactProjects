import contacts from '../contacts';
import Avatar from './Avatar';
export default function Card(props) {
  return (
    <div className="contact-card">
      <h2>{props.name}</h2>
      <Avatar img={props.img}/>
      <p>{props.phone}</p>
      <p>{props.email}</p>
    </div>
  );
}
