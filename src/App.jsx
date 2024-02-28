import Header from "./Header";
import RepeatText from "./RepeatText";
import List from "./List";
import Counter from "./Counter";
import Check from "./Check";
import Radio from "./Radio";

const App = () => {
  return (
    <>
      <p>Paragraph text</p>
      <Header headerText="Steg 4 klar" />
{/*       <RepeatText count ={7} text="Hjeh"/>
 */}      <List animalArray={["hund", "katt", "ko", "häst"]}/>
 < Counter />
 <Check />
 <Radio />
    </>
  );
};

export default App;
