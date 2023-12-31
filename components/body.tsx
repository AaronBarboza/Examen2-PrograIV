import axios from "axios";
import React, { useState, FormEvent, useEffect, useRef } from "react";



const Body = () => {
  const [tema, setTema] = useState("");

  const NEXT_PUBLIC_OPENAI_API_KEY= "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"

  const handleChangeTema = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTema(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const preguntasRespuestasGeneradas = await generarPreguntasRespuestas(tema);
    setPreguntasRespuestas(preguntasRespuestasGeneradas);
  
    // Desplazarse hasta el final de la lista de preguntas y respuestas
    endOfListRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  

  const generarPreguntasRespuestas = async (tema: string) => {
    const plantillaPreguntas = [
      "¿Cuándo se originó el [tema]?",
      "¿Cuáles son los principales aspectos del [tema]?",
      "¿Quiénes son los principales exponentes del [tema]?",
      "¿Qué injusticia relacionada con el [tema] has presenciado?",
      "¿Qué actividad relacionada con el [tema] te gustaría hacer?",
      // Agrega más preguntas aquí
    ];

    const preguntas = plantillaPreguntas.map((pregunta) =>
      pregunta.replace("[tema]", tema)
    );
    const preguntasRespuestas = [];

    for (const pregunta of preguntas) {
      const prompt = `tema: ${tema}\npregunta: ${pregunta}\nrespuesta:`;
      const respuesta = await getGPT(prompt);
      preguntasRespuestas.push({
        pregunta,
        respuesta,
      });
    }

    return preguntasRespuestas;

  };
  const getGPT = async (prompt: string): Promise<string> => {
    try {
      if (prompt.length < 2) {
        return Promise.resolve("");
      }
      const payload = {
        model: "text-davinci-003",
        prompt,
        temperature: 0.7,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        max_tokens: 400,
        n: 1,
      };
      try {
        const response = await axios.post("https://api.openai.com/v1/completions", payload, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${NEXT_PUBLIC_OPENAI_API_KEY}`,
          },
        });
        const json = response.data.choices[0].text as string;
  
        // console.log 
        console.log("Respuesta de la API:", json);
  
        return json.replace(/\n\n/g, "");
      } catch (error) {
        console.error(error);
        throw error;
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
  

  const [preguntasRespuestas, setPreguntasRespuestas] = useState<{ pregunta: string; respuesta: string }[]>([]);
  const endOfListRef = useRef<HTMLDivElement>(null);


  return (
    
<div style={{ textAlign: 'center' }}>
  <h1 style={{ fontSize: '36px', marginBottom: '30px' }}>Questions and Answers Generator</h1>
  <form onSubmit={handleSubmit}>
    <label>
      <span style={{ fontSize: '24px' }}>Tema:</span>
      <input type="text" value={tema} onChange={handleChangeTema} style={{ fontSize: '20px' }} />
    </label>
    <br />
    <button type="submit" style={{ fontSize: '24px', backgroundColor: '#9f6cba', color: 'white' }}>
      Generator
    </button>
  </form>
  <div style={{ marginTop: '50px' }}>
    {preguntasRespuestas.map((item, index) => (
      <div key={index}>
        <h3 style={{ fontSize: '28px', marginTop: '20px' }}>Pregunta {index + 1}</h3>
        <p style={{ fontSize: '24px' }}>{item.pregunta}</p>
        <h4 style={{ fontSize: '24px', marginTop: '10px' }}>Respuesta:</h4>
        <p style={{ fontSize: '20px' }}>{item.respuesta}</p>
      </div>
    ))}
  </div>
</div>

  
  )
};

export default Body;