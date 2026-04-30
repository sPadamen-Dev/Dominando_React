import { useState, useEffect } from "react";

// Hook personalizado para ler dados de uma URL e enviar POST quando solicitado
const useFetch = (ur) => {
    // Estado que guarda os dados recebidos do servidor
    const [data, setData] = useState(null);

    // Estado que guarda a configuração do fetch quando for POST
    const [config, setConfig] = useState(null);
    // Estado que guarda o método HTTP atual, usado para disparar o POST
    const [method, setMethod] = useState(null);

   const  [loading, setLoading] = useState(false); 



    // useEffect para buscar os dados com GET sempre que a URL mudar
    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            // Define o estado de loading como true para indicar que a requisição está em andamento
            // Faz a requisição GET para a URL fornecida
            const response = await fetch(ur);
            // Converte a resposta em JSON
            const json = await response.json();
            // Atualiza o estado com os dados recebidos
            setData(json);
            setLoading(false);
        }
        fetchData();
    }, [ur]); // Executa novamente se a URL mudar

    // useEffect para enviar POST quando config e method estiverem definidos
    useEffect(() => {
        if (method === "POST" && config) {
            const sendPost = async () => {
                // Faz a requisição POST usando a configuração guardada
                const response = await fetch(ur, config);
                // Converte a resposta do POST em JSON
                const json = await response.json();

                // Adiciona o novo item ao estado existente de dados
                setData((prevData) => {
                    if (prevData) {
                        // Mantém os dados antigos e adiciona o novo no final
                        return [...prevData, json];
                    }
                    // Caso não exista dado anterior, inicia um novo array
                    return [json];
                });
            };

            sendPost();
        }
    }, [config, method, ur]); // Executa ao mudar config, method ou URL

    // Função que configura o POST e ativa o segundo useEffect
    const httpConfig = (postData, requestMethod) => {
        if (requestMethod === "POST") {
            setConfig({
                method: requestMethod,
                headers: {
                    "Content-Type": "application/json",
                },
                // Converte o objeto em string para enviar no corpo da requisição
                body: JSON.stringify(postData),
            });
            // Define o método para que o useEffect de POST seja acionado
            setMethod(requestMethod);
        }
    };

    // Retorna os dados e a função que dispara o POST
    return [data, httpConfig, loading];
};

export default useFetch;