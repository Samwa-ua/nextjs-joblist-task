import Image from "next/image";
import Link from "next/link";

const JobDetail = (props: any) => {
  return (
    <section className="container mx-auto m-2 ">
      <div className="flex">
        <div className="w-2/3 px-6">
          <div className="flex justify-between ">
            <h2 className="text-3xl font-bold">Job Details</h2>
            <span>
              <Image
                src="/images/Bookmark_icon.png"
                width={18}
                height={20}
                alt="Bookmark"
              />
            </span>
            <p>Save to my list</p>
            <span>
              <Image
                src="/images/Share_icon.png"
                width={18}
                height={20}
                alt="Bookmark"
              />
            </span>
            <p>Share</p>
          </div>
          <button className="bg-gray-700 text-white rounded-md py-3 px-6">
            APPLY NOW
          </button>
          <div className="flex">
            <h1 className="flex-1 w-500 font-bold">{props.title}</h1>
            <div>
              <p>€ 54 000—60 000</p>
              <p>Brutto, per year</p>
            </div>
          </div>
          <div>
            <p className="font-thin text-textFaint">Posted 2 days ago</p>
            <p>
              At WellStar, we all share common goals. That’s what makes us so
              successful – and such an integral part of our communities. We want
              the same things, for our organization, for our patients, and for
              our colleagues. As the most integrated healthcare provider in
              Georgia, this means we pride ourselves on investing in the
              communities that we serve. We continue to provide innovative care
              models, focused on improving quality and access to healthcare.
            </p>
            <h3 className="font-bold">Responsibilities</h3>
            <p>
              Wellstar Medical Group, a physician-led multi-specialty group in
              Atlanta, Georgia, is currently recruiting for a BC/BE
              cardiothoracic surgeon to join their existing cardiovascular
              program. This is an opportunity to play a key role on a
              multidisciplinary team of cardiologists and surgeons. The ideal
              candidate will have five or more years of experience in cardiac
              surgery. This candidate should be facile with off-pump
              revascularization, complex aortic surgery, minimally invasive
              valve and valve repair, transcatheter valve replacement, surgical
              atrial fibrillation ablation, ventricular assist device placement,
              and extra corporeal membrane oxygenation. Wellstar is one of the
              largest integrated healthcare systems in the Southeast with 11
              hospitals in Atlanta metro region. With two open heart programs at
              Kennestone Regional Medical Center and Atlanta Medical Center,
              Wellstar cardiac surgeons perform over 1200 cardiac procedures per
              year. The cardiac service line is the only center in Georgia with
              the Joint Commission’s Comprehensive Cardiac Center certification.
            </p>
          </div>
          <h3 className="font-bold">Compensation & Benefits:</h3>
          <ul>
            {props.benefits.map((benefit: any) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>

          <h2>{props.name}</h2>
          <h2>{props.email}</h2>
          <h2>{props.phone}</h2>
          <p>{props.description}</p>
        </div>
        <div>
          <address>{props.address}</address>
        </div>
      </div>

      <button
        type="button"
        className="cursor-pointer p-2 rounded-md bg-gray-400"
      >
        <Link href="/">Return to job Board</Link>
      </button>
    </section>
  );
};

export default JobDetail;
