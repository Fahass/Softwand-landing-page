
const Contact = () => {
  return (
    <div className="contact" id="contact">
        <section className="text">
            <h1>CONTACT US</h1>
            <p>For more information, enquiry or suggestions you can contact us via our social media pages or fill the form here!</p>
            <i className="fa fa-location"></i><span>5432 Somewhere, ice City, Australia</span> <br />
            <i className="fa fa-phone"></i><span>+2347012345678 / +2348024681012</span> <br />
            <i className="fa fa-envelope"></i><span>Softwand@sample.com</span>
        </section>
        <form action="#">
            <input type="text" placeholder="Name"/>
            <input type="email" placeholder="Email"/>
            <textarea name="textarea" placeholder="Message"></textarea>
            <input type="submit" value="SEND" />
        </form>
    </div>
  )
}

export default Contact