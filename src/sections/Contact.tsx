import { HandWaving, LinkedinLogo } from "phosphor-react";
import { handleClick } from "../components/Utils";

function Contact() {
  return (
    <section
      id="contacts"
      className="
    px-8 py-10 bg-dark
      md:px-[15%] md:bg-blue md:py-0"
    >
      <section className="md:-translate-y-1/2">
        <div
          className="bg-dark grid items-center
          grid-flow-col grid-rows-3 gap-8 grid-cols-1
          md:grid-flow-row md:grid-cols-3 md:px-12 md:rounded-3xl md:py-12 md:grid-rows-1"
        >
          <div
            className="flex flex-row items-center gap-2
            justify-center
            md:justify-start"
          >
            <HandWaving
              className="animate-wiggle"
              size={32}
              color="#fffb00"
              weight="fill"
            />
            <h1 className="text-white font-serif font-bold text-2xl">
              Bora conversar?
            </h1>
          </div>
          <h1
            className="text-white font-serif font-medium text-base text-center
            md:justify-self-stretch"
          >
            <p>Interessado em trabalhar comigo?</p>
            <p>Nos falamos no LinkedIn, eu pago o café. ☕</p>
          </h1>
          <button
            className="bg-white flex flex-row gap-2 rounded-xl
            items-center justify-center px-5 py-3
            md:justify-self-end"
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
