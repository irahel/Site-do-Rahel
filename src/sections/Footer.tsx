import SocialButton from "../components/Footer/socialButton";
import {
  EnvelopeSimple,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from "phosphor-react";
import Divider from "../components/Footer/Divider";
import Developer from "../components/Footer/Developer";
import Phrase from "../components/Footer/Phrase";

function Footer() {
  return (
    <>
      <section className="bg-blue flex flex-col items-center justify-around pt-6 pb-28 gap-16">
        <div className="flex flex-row items-center justify-center gap-6">
          <SocialButton
            icon={<LinkedinLogo size={24} color="#a4c2f4" weight="fill" />}
            link={"https://www.linkedin.com/in/rahel-und/"}
          />
          <SocialButton
            icon={<GithubLogo size={24} color="#a4c2f4" weight="fill" />}
            link={"https://github.com/irahel"}
          />
          <SocialButton
            icon={<EnvelopeSimple size={24} color="#a4c2f4" weight="bold" />}
            link={"mailto:rahelmartim@icloud.com"}
          />
          <SocialButton
            icon={<TwitterLogo size={24} color="#a4c2f4" weight="fill" />}
            link={"https://twitter.com/_illuminatiSun"}
          />
          <SocialButton
            icon={<InstagramLogo size={24} color="#a4c2f4" weight="bold" />}
            link={"https://www.instagram.com/rahel_und/"}
          />
        </div>
        <Phrase />
      </section>
      <footer className="bg-dark w-full flex justify-center items-center py-6">
        <h1 className="text-white text-base font-medium text-center font-serif mr-3">
          Projetado e desenvolvido por:
        </h1>
        <Developer
          logoLink="/img/logos/arapua.svg"
          logoDescription="Logo da Arapuá"
          name={"arapuá"}
        />
        <Divider />
        <Developer
          logoLink="/img/logos/thomas.svg"
          logoDescription="Logo do Thomas"
          name={
            <>
              Thomas <span className="font-light">Dillan</span>
            </>
          }
        />
        <Divider />
        <Developer
          name={
            <>
              RAHEL <span className="font-light">Martim</span>
            </>
          }
        />
      </footer>
    </>
  );
}

export default Footer;
