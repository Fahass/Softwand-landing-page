

const About = () => {
  return (
    <div className="about" id="about">
        <div className="text-box">
            <h1>About <span>Soft</span>Wand</h1>
            <div className="details">
                <div className="icons">
                    <i className="fa fa-file-code"></i>
                    <i className="fa fa-code"></i>
                </div>
                <div className="text">
                    <p>In SoftWand Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sunt dignissimos iusto cumque ipsam aperiam!</p>
                    <p>In SoftWand Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sunt dignissimos iusto cumque ipsam aperiam!</p>
                </div>
            </div>
        </div>
        <div className="img-box">
            <img src="./src/images/software-img.png" alt="about-section image" />
        </div>
    </div>
  )
}

export default About