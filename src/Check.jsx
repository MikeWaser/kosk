import { useState } from "react";

const Check = () => {
    const [cat, setCat] = useState(false)
    const [dog, setDog] = useState(false)
    const handleChangeCat = () => {
        setCat(!cat)
        /* console.log("change cat"); */
    }
    const handleChangeDog = () => {
        /* console.log("change dog"); */
        setDog(!dog)
    }
  return (
    <div>
      <div>
        <input type="checkbox" onChange= {handleChangeCat}/>
        <label htmlFor="katt">Katt</label>
      </div>
      <div>
        <input type="checkbox" onChange= {handleChangeDog}/>
        <label htmlFor="hund">Hund</label>
      </div>
      <div>{cat && "Katt"} {cat && dog && "och"} {dog && "Hund"}</div>
    </div>
  );
};

export default Check;
