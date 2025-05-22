import "./Heropage.css";
import { useNavigate } from 'react-router-dom';
const Heropage = () => {
  const navigate = useNavigate();
  const goToTiles = () => {
    navigate("/tiles");
  };
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            InterviewAI
          </a>
        </div>
      </nav>
      <div className="container">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
          reiciendis adipisci, voluptas aperiam maxime aliquid obcaecati
          praesentium similique vel doloribus beatae ea hic perferendis dolores
          minima est soluta ratione iusto!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          distinctio incidunt ea quaerat deserunt. Voluptas quos accusantium
          dolorum exercitationem, quo alias unde hic voluptates excepturi? Quam
          nihil perspiciatis hic est.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt vitae
          repellat ipsum ipsam error praesentium officiis aspernatur recusandae
          quae ex delectus ab dolorem mollitia debitis pariatur exercitationem
          molestiae, dicta tempora.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est explicabo
          repellendus maiores obcaecati sapiente iure neque ipsum voluptate
          quaerat rem nostrum, perspiciatis nulla libero laboriosam voluptates
          quae harum nihil voluptatem!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
          delectus iusto praesentium amet ad? Harum aspernatur, earum labore
          quisquam at aut esse voluptatum pariatur assumenda odio in libero
          optio est.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          iusto, magnam corrupti reprehenderit dolorum placeat, facilis aperiam
          magni expedita ab animi ea enim eos voluptatibus quod culpa dolorem
          inventore molestias.
        </p>
      </div>
      <div className="uploadBtnContainer">
        <button type="button" className="uploadBtn" onClick={goToTiles}>
          Upload
        </button>
      </div>
    </>
  );
};

export default Heropage;
