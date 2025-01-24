import "./Main.css";
import React, {useState, useEffect} from "react";
import editorDisktop from "../../../images/illustration-editor-desktop.svg";
import editorMobile from "../../../images/illustration-editor-mobile.svg";
import laptopDisktop from "../../../images/illustration-laptop-desktop.svg";
import laptopMobile from "../../../images/illustration-laptop-mobile.svg";
import phones from "../../../images/illustration-phones.svg";

function Main() {

  const [images, setImages] = useState(
    {
      editor: editorDisktop,
      laptop: laptopDisktop
    }
  );

  useEffect(() =>{
    // Function to update images based on screen width
    const updateImages = () => {
      if (window.innerWidth < 640) {
        setImages({
          editor: editorMobile,
          laptop: laptopMobile
        });
      }
    };

    // Call the function on initial render and on window resize
    updateImages();

    // Add event listener for window resize event
    window.addEventListener('resize', updateImages);
    
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', updateImages);

  }, []);



  return (
    <main>
      <h1 className="design-title">Designed for the future</h1>
      <Part
        sect1={[
          // eslint-disable-next-line react/jsx-key
          <TitleAndText
            title="Introducing an extensible editor"
            text="Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
                  The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
                  videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
                  change the looks of a blog."
          />,
          // eslint-disable-next-line react/jsx-key
          <TitleAndText
            title="Robust content management"
            text="Flexible content management enables users to easily move through posts. Increase the usability of your blog 
          by adding customized categories, sections, format, or flow. With this functionality, you’re in full control."
          />,
        ]}
        sect2={<Image url={images.editor} />}
      />

      <Part
        style="middle-part"
        sect1={<Image url={phones} />}
        sect2={
          <TitleAndText
            title="State of the Art Infrastructure"
            text="With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
              This ensures your site will load instantly, no matter where your readers are, keeping your site competitive."
            style="middle-title-text"
          />
        }
      />

      <Part
       style="last-part"
        sect1={<Image url={images.laptop} />}
        sect2={
          // eslint-disable-next-line react/jsx-key
          [<TitleAndText
            title="Free, open, simple"
            text="Blogr is a free and open source application backed by a large community of helpful developers. It supports 
            features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
            and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn."
          />,
          // eslint-disable-next-line react/jsx-key
          <TitleAndText
            title="Powerful tooling"
            text="Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
            capable of producing even the most complicated sites."
          />
        ]
        }
      />
    </main>
  );
}

export default Main;

function Part({ style, sect1, sect2 }) {
  return (
    <div className={`part ${style}`}>
      <div className="section-1">{sect1}</div>
      <div className="section-2">{sect2}</div>
    </div>
  );
}

function TitleAndText({ title, text, style }) {
  return (
    <div className={`title-and-text ${style}`}>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function Image({ url, name }) {
  return (
    <div className="image-container">
      <img className={name} src={url} alt="Blogr interface" />
    </div>
  );
}
