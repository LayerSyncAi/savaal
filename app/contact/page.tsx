import { ContactDetails } from "./components/ContactDetails";
import { ContactForm } from "./components/ContactForm";
import { ContactHero } from "./components/ContactHero";
import { LocationSpotlight } from "./components/LocationSpotlight";
import { OpeningHours } from "./components/OpeningHours";

export default function ContactPage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-24 lg:py-28">
      <ContactHero />
      <ContactDetails />
      <ContactForm />
      <div className="grid gap-6 lg:grid-cols-2">
        <OpeningHours />
        <LocationSpotlight />
      </div>
    </div>
  );
}
