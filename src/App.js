import { useState } from "react";
import NameTag from "./component/NameTag";
import "./App.css";

const initialNames = [
  { firstName: "Helena", lastName: "Johansson" },
  { firstName: "Tore", lastName: "Toresson" },
  { firstName: "Doris", lastName: "Dorisson" },
  { firstName: "Janne", lastName: "Jannesson" },
  { firstName: "Janne", lastName: "Jannesson" },
];

function App() {
  const [names, setNames] = useState(initialNames);
  // return an array with 2 values, one is getter and one is setter

  return (
    <div className="container">
      {names.map((v, i) => {
        return <NameTag firstName={v.firstName} lastName={v.lastName} />;
      })}
    </div>
  );
}

/*
     
      If we do it like this we are actually hardcoding, we need to keep track of what index
      or how many we have. 
      So we have our three name tags here, but what if we wanted
another name tag or lets say we wanted 20 of them?
We know that we do not want to repeat ourselfs right...
*/

export default App;

/*
COMPLEX STATE

We have 3 name tags that are hardcoded and we want to convert it into a state
We want to put all of the names in an initial state, like we have seen with numbers before
We will create it outside of the function App()
we are going to have it outside so it gives us a reference
dummy data you could say. 

      <NameTag firstName={names[0].firstName} lastName={names[0].lastName} />
      <NameTag firstName={names[1].firstName} lastName={names[1].lastName} />
      <NameTag firstName={names[2].firstName} lastName={names[2].lastName} />
      <NameTag firstName={names[3].firstName} lastName={names[3].lastName} />

If we do it like this we are actually hardcoding, we need to keep track of what index
or how many we have. So we have our three name tags here, but what if we wanted
another name tag or lets say we wanted 20 of them?
We know that we do not want to repeat ourselfs right...

We are goin to loop but in react we can not use for loop but we have map()
map function takes value and index as argument and then returns something
instead of hardcoding we can now use v.firstName and same for lastName and we get the same result
if we inspect we do have one error
this error is because when we have a list like this react needs to keep track
on whats been added and removed so it can render things accordingly
so you need a prop key
we can provide i key={i}
this works here because we are not adding or removing things but if we would do that
this wont work because for example first we remove the last name size is two and
if we add again its threee so we get the same index again - not unique
to fix this there are multiple ways to do this, i will show you a super easy way next week.
{`${i}${v.firstName}${v.lastName}`}

*/
