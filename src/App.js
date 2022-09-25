import React, {useState} from 'react';
import './App.css';

function App() {

  const [fresas, setFresas] = useState(0);
  const [platano, setPlatano] = useState(0);
  const [quiwis, setQuiwis] = useState(0);
  const [naranjas, setNaranjas] = useState(0);
  const [manzanas, setManzanas] = useState(0);
  const [peras, setPeras] = useState(0);


  const [nombre, setNombre] = useState("");
  const [apellidos, setApellido] = useState("");
  const [edad, setEdad] = useState(0);
  const [codigoPostal, setCodigoPostal] = useState("");
  const [frecuenciaEnvio, setFrecuenciaEnvio] = useState('week');
  const [horarioEntrega, setHorarioEntrega] = useState('daytime');
  const [comentarios, setComentarios] = useState(" ");
  const [aceptacionContrato, setAceptacionContrato] = useState(false);

  function resetFruits() {
    setFresas(0);
    setPlatano(0);
    setManzanas(0);
    setQuiwis(0);
    setNaranjas(0);
    setPeras(0)
  }


  function handleSubmit(e) {
    e.preventDefault();
    console.log(`Pedido de frutas - fresas: ${fresas}, platanos: ${platano}`);
    console.log(` Nombre: ${nombre},
        Apellido: ${apellidos},
        Edad: ${edad},
        Código postal: ${codigoPostal},
        Frecuencia de envío: ${frecuenciaEnvio},
        Horario de entrega: ${horarioEntrega},
        Comentarios: ${comentarios},
        Estas ud de acuerdo con las condiciones?: ${aceptacionContrato}
        `);
  }


  return (
      <>
        <h1>Servicio de envío de frutas</h1>
        <section className="fruit-counters">
          <article>
            <h2> 🍓 Fresas</h2>
            <button type="button" disabled={fresas === 0} onClick={() => setFresas(fresas - 1)}> -</button>
            <p>{fresas}</p>
            <button type="button" onClick={() => setFresas(fresas + 1)}> +</button>
          </article>

          <article>
            <h2> 🍌 Platanos< /h2>
            <button type="button" disabled={platano === 0} onClick={() => setPlatano(platano - 1)}> -</button>
            <p>{platano}</p>
            <button type="button" onClick={() => setPlatano(platano + 1)}> +</button>
          </article>

          <article>
            <h2> 🥝Quiwis</h2>
            <button type="button" disabled={quiwis === 0} onClick={() => setQuiwis(quiwis - 1)}> -</button>
            <p>{quiwis}</p>
            <button type="button" onClick={() => setQuiwis(quiwis + 1)}> +</button>
          </article>

          <article>
            <h2> 🍏 Manzanas < /h2>
            <button type="button" disabled={manzanas === 0} onClick={() => setManzanas(quiwis - 1)}> -</button>
            <p>{manzanas}</p>
            <button type="button" onClick={() => setManzanas(manzanas + 1)}> +</button>
          </article>

          <article>
            <h2>Naranjas</h2>
            <button type="button" disabled={naranjas === 0} onClick={() => setNaranjas(naranjas - 1)}> -</button>
            <p>{naranjas}</p>
            <button type="button" onClick={() => setNaranjas(naranjas + 1)}> +</button>
          </article>

          <article>
            <h2>Peras</h2>
            <button type="button" disabled={peras === 0} onClick={() => setPeras(peras - 1)}> -</button>
            <p>{peras}</p>
            <button type="button" onClick={() => setPeras(peras + 1)}> +</button>
          </article>

          {/*Reseteador de valores*/}
          <article>
            <button type="button" onClick={() => resetFruits()}>Resetear</button>
          </article>

        </section>





        {/*formulario*/}
        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="nombre">Nombre</label>
            <input
                type="text"
                name="nombre"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
          </section>
          <section>
            <label htmlFor="apellido">Apellido</label>
            <input type="text"
                   name="apellido"
                   id="apellido"
                   value={apellidos}
                   onChange={(e) => setApellido(e.target.value)}
            />
          </section>

          <section>
            <label htmlFor="edad">Edad</label>
            <input
                type="number"
                name="edad"
                id="edad"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
            />
          </section>

          <section>
            <label htmlFor="códigoPostal">Código Postal</label>
            <input
                type="text"
                name="codigoPostal"
                id="codigoPostal"
                value={codigoPostal}
                onChange={(e) => setCodigoPostal(e.target.value)}
            />
          </section>

          <section>
            <label htmlFor="frecuenciaEnvio">Frecuencia de entrega</label>
          </section>

          <section>
            <select
                name="envio"
                id="frecuenciaEnvioa"
                value={frecuenciaEnvio}
                onChange={(e) => setFrecuenciaEnvio(e.target.value)}
            >
              <option value="semana">Cada semana</option>
              <option value="dos-semanas">Cada dos semanas</option>
              <option value="tres-semanas">Cada tres semanas</option>
              <option value="mensual">Cada mes</option>
            </select>

          </section>

          <section>
            <input
                type="radio"
                value="horarioDiurno"
                name="HorarioDiurno_nombre"
                id="horarioDiurno_id"
                checked={horarioEntrega === "daytime"}
                onChange={(e) => setHorarioEntrega(e.target.value)}
            />
            <label htmlFor="horarioEntregaDia">Preferencia de entrega dia</label>
            <input
                type="radio"
                value={"dia"}
                checked={horarioEntrega === 'dia'}
                onChange={(e) => setHorarioEntrega(e.target.value)}
                name="horarioEntregaDia"
                id='horarioEntregaDia'
            />

            <label htmlFor="horarioEntregaNoche">Preferencia de entrega noche</label>
            <input
                type="radio"
                value={"noche"}
                checked={horarioEntrega === 'noche'}
                onChange={(e) => setHorarioEntrega(e.target.value)}
                name="horarioEntregaNoche"
                id='horarioEntregaNoche'
            />

          </section>


          <section>
            <label htmlFor="comentarios"> Comentarios</label>
            <textarea
                name="comentarios"
                id="comentaros"
                value={comentarios}
                onChange={(e) => setComentarios(e.target.value)}
                rows={6}
                cols={40}
            />
          </section>
          <section>
            <label htmlFor="aceptacionContrato">Acepto las condiciones"</label>
            <input
                type="checkbox"
                name="aceptacionContrato"
                id="aceptacionContrato"
                value={aceptacionContrato}
                onChange={(e) => setAceptacionContrato(e.target.value)}

            />

          </section>

          <button type="submit"> Enviar</button>


        </form>


      </>
  );
}

export default App;
