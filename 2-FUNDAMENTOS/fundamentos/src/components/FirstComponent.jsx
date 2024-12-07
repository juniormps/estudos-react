//Criando o primeiro componente

import MyComponent from "./MyComponent"

const FirstComponent = () => {
    //Aqui comenta assim

    /*
    Ou assim
    */

    return (
        <>
            <h2>
                Meu Primeiro Componente {/*Aqui comenta assim */}
            </h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam est, animi maiores autem architecto aperiam fugiat dolorum vitae eius non officia sit, labore ad quas! Assumenda autem rem harum expedita?
            </p>
            <MyComponent/>
        </>
        
    )
}

export default FirstComponent