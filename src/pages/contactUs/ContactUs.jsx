import Header from "../../components/Header.jsx";
import ContactHeader from "./ContactHeader.jsx";
import ContactForm from "./ContactForm.jsx";
import Footer from "../../components/Footer.jsx";

const ContactUs = () => {
  return (
    <>
      <Header />
      <main className="bg-body">
        <ContactHeader />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
};

export default ContactUs;
