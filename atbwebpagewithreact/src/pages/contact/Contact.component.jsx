import React from "react";
import "./Contact.style.scss";
import { IoMail } from "react-icons/io5";
import { RiFileDownloadFill } from "react-icons/ri";
import SectionTitle from "../../components/section-title/SectionTitle.component";

const Contact = () => {
  return (
    <div className="contact-container">
        <SectionTitle title={"Contact Me"}/>
        <p className="contact-info">If you want to contact me , please mail me and also you can download my CV.</p>
      <div className="mail-logo">
        <a
          href="https://mail.google.com/mail/u/0/?fs=1&to=atbostan.developer@gmail.com&tf=cm"
          target="_blank"
        >
          <IoMail className="iomail" />
          <span><b>Mail Me!</b></span>

        </a>
      </div>
      <div className="download-logo">
        <a href={require("../../assets/cv.pdf")} download="Ahmet_Tarik_Bostan_CV">
          <RiFileDownloadFill className="riFileDownloadFill"/>
          <span><b>CV</b></span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
