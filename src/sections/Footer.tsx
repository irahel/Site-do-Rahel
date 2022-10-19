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
      <section
        className="bg-blue flex flex-col items-center justify-around gap-16
      px-8 py-10
      md:px-[15%] md:py-32"
      >
        <div className="flex flex-row items-center justify-center gap-2 md:gap-6">
          <SocialButton
            icon={<LinkedinLogo size={24} color="#a4c2f4" weight="fill" />}
            link={"https://www.linkedin.com/in/rahel-und/"}
            name={"Botão para LinkedIn"}
          />
          <SocialButton
            icon={<GithubLogo size={24} color="#a4c2f4" weight="fill" />}
            link={"https://github.com/irahel"}
            name={"Botão para Github"}
          />
          <SocialButton
            icon={<EnvelopeSimple size={24} color="#a4c2f4" weight="bold" />}
            link={"mailto:rahelmartim@icloud.com"}
            name={"Botão para enviar email"}
          />
          <SocialButton
            icon={<TwitterLogo size={24} color="#a4c2f4" weight="fill" />}
            link={"https://twitter.com/_illuminatiSun"}
            name={"Botão para Twitter"}
          />
          <SocialButton
            icon={<InstagramLogo size={24} color="#a4c2f4" weight="bold" />}
            link={"https://www.instagram.com/rahel_und/"}
            name={"Botão para Instagram"}
          />
        </div>
        <Phrase />
      </section>
      <footer
        className="bg-dark w-full flex justify-center items-center py-6
        flex-col
        md:flex-row"
      >
        <h1 className="text-white text-base font-medium text-center font-serif mr-3">
          Projetado e desenvolvido por:
        </h1>
        <div className="flex flex-row">
          <Developer
            logoLink="/img/logos/arapua.svg"
            logoDescription="Logo da Arapuá"
            name={"arapuá"}
            link={"https://arapua.company"}
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
            link={
              "https://www.linkedin.com/messaging/thread/2-Zjg1ZTY2Y2EtZjZhZC01ZjE3LWIzYjUtOTZmNGU1ZDRhOGMyXzAxMw==?controlUrn=topcard_primary_compose_message_button&referringModuleKey=NON_SELF_PROFILE_VIEW&messageComposeFlowTrackingId=8oSqDfn6QTegG1It49nffQ%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BckRoPWeGQaW6%2Bk2xIWHqyg%3D%3D"
            }
          />
          <Divider />
          <Developer
            logoLink="/img/logos/RM.svg"
            logoDescription="Logo do Thomas"
            name={
              <>
                RAHEL <span className="font-light">Martim</span>
              </>
            }
            link={"https://github.com/irahel/Site-do-Rahel"}
          />
        </div>
      </footer>
    </>
  );
}

export default Footer;
