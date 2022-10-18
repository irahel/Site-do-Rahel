import { LinkedinLogo } from "phosphor-react";
import { handleClick } from "../components/Utils";

function Contact() {
  return (
    <section id="contacts" className="bg-blue px-[15%]">
      <section className="-translate-y-1/2">
        <div className="bg-dark grid grid-flow-row grid-cols-3 items-center rounded-3xl py-12 px-12">
          <div className="flex flex-row items-center justify-start gap-2 ">
            <img
              className="h-6 w-6 "
              src="https://github.com/irahel/irahel/blob/main/gifs/Hi.gif?raw=true"
              alt="Hello gif"
            />
            <h1 className="text-white font-serif font-bold text-2xl">
              Bora conversar?
            </h1>
          </div>
          <h1 className="text-white font-serif font-medium text-base text-center justify-self-stretch">
            <p>Interessado em trabalhar comigo?</p>
            <p>Nos falamos no LinkedIn, eu pago o café. ☕</p>
          </h1>
          <button
            className="bg-white flex flex-row gap-2 rounded-xl
      items-center justify-center px-5 py-3 justify-self-end"
            type="submit"
            onClick={() =>
              handleClick(
                "https://www.linkedin.com/messaging/thread/2-Zjg1ZTY2Y2EtZjZhZC01ZjE3LWIzYjUtOTZmNGU1ZDRhOGMyXzAxMw==?controlUrn=topcard_primary_compose_message_button&referringModuleKey=NON_SELF_PROFILE_VIEW&messageComposeFlowTrackingId=JkXA3Rs9QG%2BDmzJboYDUnw%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BKtZgIR9UTa6mEa7qYoS1dg%3D%3D"
              )
            }
          >
            <LinkedinLogo className="text-dark" size={20} weight="fill" />
            <h2 className="text-dark font-serif font-bold text-xs whitespace-nowrap">
              Enviar mensagem
            </h2>
          </button>
        </div>
      </section>
    </section>
  );
}

export default Contact;
