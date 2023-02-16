import "./Home.scss";
function Home() {
  return (
    <div className="page-container">
      <div className="home-div">
        <h1>Rock Paper Scissors</h1>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          tincidunt molestie iaculis. Morbi convallis mi id nisi luctus, sit
          amet luctus turpis lobortis. Curabitur lacus massa, dignissim eget
          urna non, commodo fringilla ex. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Sed lacinia diam
          et dictum fermentum. Aenean nisl diam, tincidunt sed dui sed, viverra
          fringilla nisl. Nullam ipsum augue, porta quis luctus nec, tincidunt
          sit amet nulla. Proin urna tortor, suscipit vitae libero sit amet,
          porta pulvinar mi. Aliquam efficitur luctus erat, nec vulputate metus
          accumsan eget. Suspendisse auctor rutrum aliquet. Donec pellentesque
          ultrices aliquet. Duis sit amet aliquet ligula. Phasellus non velit
          vestibulum, tristique velit eu, commodo dolor. Morbi eu convallis
          magna. Phasellus laoreet ut felis a efficitur. Aliquam erat volutpat.
          Fusce id erat nulla. Quisque facilisis lacinia massa ut molestie.
          Donec tempor ac massa molestie cursus. Suspendisse potenti. Praesent
          vehicula nisl ut semper sodales. Donec non suscipit ipsum. Sed
          ullamcorper, turpis eu pulvinar interdum, leo neque finibus augue, nec
          fringilla ante risus vel neque. Cras posuere orci diam, quis tempor
          ipsum euismod ac. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Vivamus a turpis nisi. Nam
          massa turpis, suscipit quis pharetra semper, venenatis eu tortor.
        </p>
        <div className="socials">
          <a
            href="https://en.wikipedia.org/wiki/Rock_paper_scissors"
            target="_blank"
          >
            <i className="fa-brands fa-wikipedia-w"></i>{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
