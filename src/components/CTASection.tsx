import { doctor } from "@/lib/site";

export default function CTASection({
  heading = "Ready to talk about your hip or knee pain?",
  subheading = "Schedule a consultation with Dr. Sam Vojdani at Total Joint Specialists in Midtown Atlanta or Sandy Springs.",
}: {
  heading?: string;
  subheading?: string;
}) {
  return (
    <section className="bg-brand-800 py-14 text-white">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 text-center">
        <h2 className="font-serif text-3xl font-bold">{heading}</h2>
        <p className="text-brand-100">{subheading}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={doctor.schedulingPhoneHref}
            className="rounded-md bg-white px-6 py-3 font-semibold text-brand-800 hover:bg-brand-100"
          >
            Call {doctor.schedulingPhoneDisplay}
          </a>
          <a
            href="/contact"
            className="rounded-md border border-white px-6 py-3 font-semibold text-white hover:bg-brand-700"
          >
            Request an Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
