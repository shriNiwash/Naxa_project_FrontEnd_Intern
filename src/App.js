
import './App.css';
import Navbar from './Navbar';
// import "../node_modules/bootstrap5/dist/css/boostrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useGetAllPostQuery } from './services/post';


function App() {
  const responseInfo = useGetAllPostQuery();
  return (
    <main id='home'>
    <Navbar />
      <section className='home'>
        <h1>home</h1>
        <div class="container">
            <div class="row">
              <div class="col-sm-6">
              “Grammarly allows me to get those
              </div>
              <div class="col-sm-6">
              “Grammarly allows me to get those
               communications out and feel confident
                that I’m putting my best foot forward.
                 Grammarly is like a little superpower,
                  especially when I need to be at 110%.”
                  “Grammarly allows me to get those
               communications out and feel confident
                that I’m putting my best foot forward.
                 Grammarly is like a little superpower,
                  especially when I need to be at 110%.”
              </div>
            </div>
          </div>
      </section>
      <section className='about' id='about'>
        <h1>about</h1>
        <div class="container">
            <div class="row">
              <div class="col-sm-6">
              “Grammarly allows me to get those
               communications out and feel confident
                that I’m putting my best foot forward.
                 Grammarly is like a little superpower,
                  especially when I need to be at 110%.” 
                  “Grammarly allows me to get those
               communications out and feel confident
                that I’m putting my best foot forward.
                 Grammarly is like a little superpower,
                  especially when I need to be at 110%.”
              </div>
              <div class="col-sm-6">
              “Grammarly allows me to get those
               communications out and feel confident
                that I’m putting my best foot forward.
                 Grammarly is like a little superpower,
                  especially when I need to be at 110%.”
                  “Grammarly allows me to get those
               communications out and feel confident
                that I’m putting my best foot forward.
                 Grammarly is like a little superpower,
                  especially when I need to be at 110%.”
              </div>
            </div>
          </div>
      </section>
      <section className='projects' id='projects'>
        <h1>projects</h1>
        <div class="container">
            <div class="row">
              <div class="col-sm-6">
              “Grammarly allows me to get those
               communications out and feel confident
                that I’m putting my best foot forward.
                 Grammarly is like a little superpower,
                  especially when I need to be at 110%.” 
                  “Grammarly allows me to get those
               communications out and feel confident
                that I’m putting my best foot forward.
                 Grammarly is like a little superpower,
                  especially when I need to be at 110%.”
              </div>
              <div class="col-sm-6">
              “Grammarly allows me to get those
               communications out and feel confident
                that I’m putting my best foot forward.
                 Grammarly is like a little superpower,
                  especially when I need to be at 110%.”
                  “Grammarly allows me to get those
               communications out and feel confident
                that I’m putting my best foot forward.
                 Grammarly is like a little superpower,
                  especially when I need to be at 110%.”
              </div>
            </div>
          </div>
      </section>
      <section className='contact' id='contact'>
        <h1>contact</h1>
        <div class="container">
            <div class="row">
              <div class="col-sm-6">
              “Grammarly allows me to get those
               communications out and feel confident
                that I’m putting my best foot forward.
                 Grammarly is like a little superpower,
                  especially when I need to be at 110%.” 
                  “Grammarly allows me to get those
               communications out and feel confident
                that I’m putting my best foot forward.
                 Grammarly is like a little superpower,
                  especially when I need to be at 110%.”
              </div>
              <div class="col-sm-6">
              “Grammarly allows me to get those
               communications out and feel confident
                that I’m putting my best foot forward.
                 Grammarly is like a little superpower,
                  especially when I need to be at 110%.”
                  “Grammarly allows me to get those
               communications out and feel confident
                that I’m putting my best foot forward.
                 Grammarly is like a little superpower,
                  especially when I need to be at 110%.”
              </div>
            </div>
          </div>
      </section>
      <section className='training' id='training'>
        <h2>training</h2>
        <div class="container">
            <div class="row">
              <div class="col-sm-6">
              “Grammarly allows me to get those
               communications out and feel confident
                that I’m putting my best foot forward.
                 Grammarly is like a little superpower,
                  especially when I need to be at 110%.” 
                  “Grammarly allows me to get those
               communications out and feel confident
                that I’m putting my best foot forward.
                 Grammarly is like a little superpower,
                  especially when I need to be at 110%.”
              </div>
              <div class="col-sm-6">
              “Grammarly allows me to get those
               communications out and feel confident
                that I’m putting my best foot forward.
                 Grammarly is like a little superpower,
                  especially when I need to be at 110%.”
                  “Grammarly allows me to get those
               communications out and feel confident
                that I’m putting my best foot forward.
                 Grammarly is like a little superpower,
                  especially when I need to be at 110%.”
              </div>
            </div>
          </div>
      </section>
    </main>
  );
}

export default App;
