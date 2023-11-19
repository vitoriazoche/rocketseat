import './header.scss'

function Header(){
    return(
        // o className é uma classe css
       <header>
        <img src='./src/assets/logo.svg'/>
         <strong>Ignited Feed</strong>
       </header>
    );
}

export default Header

// ./ -> pq ambos os arquivos estão dentro da mesma pasta, se fosse importar no externo, seria => ./nomepasta/nomearquivo