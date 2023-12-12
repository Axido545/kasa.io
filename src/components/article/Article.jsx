import "./article.css"
import"../../datas/housing.json"
import React, { useEffect, useState } from 'react';


export default function Article({housing}){
    const [jsonData, setJsonData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('../../datas/housing.json');
          const textData = await response.text(); // Obtenir le texte brut du fichier
          console.log(textData); // Afficher le contenu du fichier dans la console
          const data = JSON.parse(textData); // Essayez de le parser en tant que JSON
          setJsonData(data);
        } catch (error) {
          console.error('Erreur lors de la récupération des données JSON', error);
        }
      };
  
      fetchData();
    }, []);
      console.log(jsonData)
    return <div className="article-block">
        <p className="article-p">Titre de la location</p>
    </div>
}