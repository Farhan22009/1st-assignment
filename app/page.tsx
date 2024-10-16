export default function Home() {
    return (
        <div style={{background: '#f0f0f0', padding: '20px'}}>
            <WelcomeMessage />
        </div>
    );
  }
  function WelcomeMessage() {
    return(
        <div>
            <h1>WELCOME</h1>
            <nav>
            <ul>
                <li><a href="/"aria-label="Home">home</a></li>
                <li><a href="/about"aria-label="about">about</a></li>
                <li><a href="/service"aria-label="serivce">service</a></li>
                <li><a href="/contact"aria-label="contact">contact</a></li>
            </ul>
            </nav>
        </div>
    );
  }