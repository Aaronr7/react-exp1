// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src="Octocat.png" className="App-logo" alt="logo" />
//         <p>
//           GitHub Codespaces <span className="heart">♥️</span> React
//         </p>
//         <p className="small">
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </p>
//       </header>
//     </div>
//   );
// }

// export default App;


// import logo from './logo.svg';
import './App.css';
import { derivative } from 'mathjs'

// const cellphone = {
//   model: 'iPhone 12',
//   brand: 'Apple',
//   storage: '64GB',
// }

// Literal objects to experiment JSON (Javascript object notation)
let course = {
  title: 'Nuevo curso profesional de JS',
  format: 'video',
  units: ["INtroduccion", "Funciones"],
}

let numberFromString = parseInt("200");

let booleanResult = (10 === "10");

//shorthand syntax to assing object properties example
let attribute1 = "an string attribute"
let object1 = {
  attribute1,
  greeting(){
    return "Hello I am the greeting function of the object1."
  }
}


// DUplicate and combinate objects
let user = {
  age: 20,
  name: "Uriel"
}

let permissionsScheme = {
  level: 2
}

 
let copy1 = Object.assign(user, permissionsScheme); 
// similar to let copy1 = {... user, permissions} but Object.assing define setters methods for the object and spred operator don't.


// Destructuring assingment
let car = {
  model: "Corsa",
  brand: "Chevrolet"
}

let { model : carModel, ...sobrantes } = car;

// the destructuring assingment in a function looks like:
// function greeting({name: username}){ return `Hello ${username}! Welcome.` }

// Destructuring in arrays
let grades = [10,9,8];
let [firstExam, ...otherExams] = grades; // This could be defined as function parameters
console.log("Destructuring array results:")
console.log(typeof firstExam,firstExam)
console.log(typeof otherExams,otherExams);
  // Suele ser comun que se utilice la desetructuracion tanto en objetos y arreglos retornados por funciones.
  // La asignación por desestructuracion nos permite asignar n propiedades de un objeto a n variables, o también asignar a una variable un atributo y obtener los atributos sobrantes en una sola línea de código.
  // y en el caso de los arrays es bastante parecido solo que si asignamos un elemento a una variable y a otra variable los elementos sobrantes ,con el operador spread, se obtiene un objeto con dos atributos en el orden que ya tenian.


//----------------------------------------------------------------------------------------------
// 7 ways to clone objects - reference codely tv video
//👻🐗
const enemy = {
  scalar :"👻",
  object: { name: "ghost"},
  array: ["👻",54],
  method() {
    return "A gasparin ghost👻";
  }

}
/** Object.assing(Shallow)  . I have learned about this yesterday in the codigo facilito new js course.*/
const enemyClone = Object.assign({}, enemy)

enemy.scalar = "🐗";
enemy.object.name = "an animal🐗";
enemy.array.push("🐗");
// console.log(enemyClone.method())

console.log("enemy object",enemy)
console.log()
console.log("enemyClone object", enemyClone)
  // A nivel de primitvos de primer nivel, se hace la copia real o de verdad se realiza la clonación. Para este caso la propiedad scalar es un primitivo de primer nivel.
  // Pero en el caso de los objetos y los arrays no se clona si no que se hace referencia en enemyClone a el espacio de memoria del objeto y del array anidado del objeto enemy.
  // It is know as shallow cop. In spanish, se conoce como un shallow copy.
    //   El spread operator se comporta de manera similar a Object.assing() (ya lo probé antes así que ahora lo salto), es un shallow copy pero una difrencia que 
    //   Uriel ,en el curso de codigo facilito, dice es que Object.assing() copia o clona los metodos setters que tenga ese objeto y el spread operator no. Despues en el curso lo explica pero de todas formas se que en la documentacion de mozilla developers deben explicar algo sobre eso, puedo investigar ahí dado caso que necesite profundizar eso. 

/** Serialization (Deep clone) */


function App() {
  return (
    <div className="App">
      <h1>First test</h1>
      <p> Derivative of (y^7)/7 + 1/(5*y^5) - y^3 - 3/y: {derivative('(y^7)/7 + 1/(5*y^5) - y^3 - 3/y', 'y').toString()}</p>
      <p> Derivative of x^2 + x: {derivative('x^2 + x', 'x').toString()}</p>
      <br></br>

      {/** Experiementing javscript features to begin again to learn js fundamentals and react.js */}
      <div>
          <h2>Javascript Object Notation Experiment</h2>
          <p><small>Esta sección empezada desde 06-10-2021-hasta 07-10-2021 (octubre)</small></p>
            <ul className="UnorderedList">
            <i>
              <p>Accediendo a un atributo del course literal object 
              definido en este mismo script js: {course["title"]}</p>
            </i>

            <i>
              <p>Accediendo a un atributo del course literal object 
              definido en este mismo script js con metodo toString: {course.title.toString()}</p>
            </i>

            <i>
              <p>Type coercion of title course attribute 
                concatenated with an int value/datum: {course["title"]} + {45}</p>
              <small>The type coercion consists in concat different values or types after a implicit conversion (implicita en español).
                To make an explicit type conversion can be used the built in functions like parseInt(). 
                Example of using this and using that value into this react component: <strong>{numberFromString}</strong>
              </small>
            </i>

            <i>
              <p>Type coercion case when evaluating 10 === "10" : {booleanResult.toString()}.
                 The react compiler throws a warning when using realtional operator '==' instead of '==='. It should be bad practice to use '==' in relational expresions.</p>
            </i>

            <i>
              <p> Other object, named object1, that I have added an attribute to it with shorthand syntax : {object1.attribute1}.
                  <br></br>
                  Object 1 function assinged with shorthand syntax: <code>{object1.greeting()}</code></p>
            </i>

            <i>
              <p> Copying to a target object another object using Object.assing(user, permissionsScheme) 
                which is similar to copy with the spread operator: {copy1.toString()} {copy1.name} { copy1.age} {copy1.level}.
                  <br></br>
                  {/* Object 1 function assinged with shorthand syntax: <code>{object1.greeting()}</code>*/}
              </p>
            </i>

            <i>
              <p> Variable created with destructuring assingment: {carModel} y un object que contiene los atributos sobrantes del objeto: {sobrantes.brand}.
                  <br></br>
                  {/* Object 1 function assinged with shorthand syntax: <code>{object1.greeting()}</code>*/}
              </p>
            </i>

            </ul>
      </div>

      <footer>
        <p><small>codigo facilito course as reference</small></p>
      </footer>
    </div>
  );
}


export default App;