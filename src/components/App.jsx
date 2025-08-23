import '../styles.css';
import Heading from './Heading';
import List from './List';
import Calculator from './Cal';
import Card from './Card';
import contacts from '../contacts';
import Footer from './Footer';
import EmojiPedia from './EmojiPedia';
import emoji from '../emojiDictionary'
function CreateCard(contacts) {
  return (
    <Card
      id={contacts.id}
      name={contacts.name}
      img={contacts.img}
      phone={contacts.phone}
      email={contacts.email}
    />
  );
}
function createEmoji(emoji){
    return (
      <EmojiPedia
        id={emoji.id}
        icon={emoji.icon}
        title={emoji.title}
        description={emoji.detail}
      />
    );

}
export default function App() {
  return (
    <>
      <Heading />
      <div className="main-content">
        <div className="App">
          <List />
          <Calculator />
        </div>
        <div className="contacts-section">
          <h1>My Contacts</h1>
          {contacts.map(CreateCard)}
          {/* <Card
            name={contacts[0].name}
            img={contacts[0].img}
            email={contacts[0].email}
            phone={contacts[0].phone}
          />
          <Card
            name={contacts[1].name}
            img={contacts[1].img}
            email={contacts[1].email}
            phone={contacts[1].phone}
          /> */}
        </div>

        <div className="emoji-dictionary">
          <h1>EmojiPedia</h1>
          {emoji.map(createEmoji)}
        </div>
      </div>
      <Footer />
    </>
  );
}
