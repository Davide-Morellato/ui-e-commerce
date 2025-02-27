import React from "react"; //importo React nel Componente

import './homepage.styles.scss' //importo il foglio di stile associato

// import {categories} from '../../shop-data' //importo l'array di oggetti "categories"

import SingleCategory from "../../components/single_category/single-category.component"; //importo il componente
import { useSelector } from "react-redux";
import { selectProductsArticles } from "../../redux/articles/articles.selectors";

//creo il Functional Component
const Homepage = () => {

    //dichiaro una variabile per recuperare i prodotti tramite il selettore
    const categories = useSelector(selectProductsArticles);

    return(
        <div className="homepage">
            {/* mappo categories (shop-data) per ricavare i singoli elementi  */}
            {categories.map((el) => (
                //inserisco il componente SingleCategory a cui passo come chiave di lettura key=el.id e riferisco i valori tramite lo spread-operator
                <SingleCategory key={el.id} {...el}/>
            ))}
        </div>
    );
};

export default Homepage