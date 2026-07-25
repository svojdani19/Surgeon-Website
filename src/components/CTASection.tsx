import BackgroundVideo from "./BackgroundVideo";
import { doctor } from "@/lib/site";

export default function CTASection({
  heading = "Ready to talk about your hip or knee pain?",
  subheading = "Schedule a consultation with Dr. Sam Vojdani.",
  video,
}: {
  heading?: string;
  subheading?: string;
  /** Optional background video path — lazy-loaded, muted loop. */
  video?: string;
}) {
  return (
    <section
      className={`relative overflow-hidden bg-brand-800 text-white ${
        video ? "py-28 sm:py-40" : "py-14"
      }`}
    >
      {video && (
        <>
          <BackgroundVideo src={video} />
          <div className="absolute inset-0 bg-brand-950/75" aria-hidden="true" />
        </>
      )}
      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 text-center">
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
