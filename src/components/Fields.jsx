import { payment, collage, check } from "../assets";
import { collabContent, collabText } from "../constants";
import Section from "./Section";
import FieldCard from "./FieldCard";
import Heading from "./Heading";
import PricingList from "./PricingList";

const Fields = () => {
  return (
    <Section crosses id="pix">
      <div className="container md:-mt-20 lg:flex">
        <div className="max-w-[35rem]">
          <h2 className="h2 mb-4 md:mb-8">
            <span className="font-thin text-lime-400">PIX4D</span>
            <span className="font-bold text-lime-400">fields</span> para
            mapeamento agrícola e análise aérea avançada
          </h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.desc && (
                  <p className="body-2 mt-3 text-lime-300">{item.desc}</p>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:ml-auto xl:w-[50rem] mt-4">
          <p className="body-2 mb-2 text-lime-200 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>
          <img src={collage} alt="" className="w-[80rem] md:-ml-[5rem]" />
        </div>
      </div>
      <section>
        <FieldCard />
      </section>
      <Section className="overflow-hidden" id="pricing">
        <div className="container relative z-1 -mt-20 text-center">
          <Heading
            tag="Inicie sua jornada Pix4d"
            title="Pague uma vez, use o ano inteiro."
          />
          <div className="relative flex justify-center">
            <img
              className="hidden md:block md:w-1/2"
              src={payment}
              width={550}
              height={550}
              alt="Grid"
            />

            <PricingList />
            
          </div>

          <div className="flex justify-center mt-10"></div>
        </div>
      </Section>
    </Section>
  );
};

export default Fields;
