import Image from "next/image";
import Link from "next/link";

export default function TeamMemberCard({ name, role, image, linkedin, bio }) {
  return (
    <div className="group bg-white dark:bg-dark rounded-2xl shadow-lg p-6 text-center transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
      <div className="relative w-28 h-28 mx-auto mb-4">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-pink-500 p-1">
          <Image
            src={image}
            alt={name}
            fill
            className="rounded-full object-cover border-4 border-white dark:border-dark"
          />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-dark dark:text-light mb-1">{name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 italic mb-1">{role}</p>
      {bio && <p className="text-sm text-dark dark:text-light mb-3">{bio}</p>}
      {linkedin && (
        <Link href={linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn profile of ${name}`}>
          <svg
            className="mx-auto h-6 w-6 text-blue-600 hover:text-blue-800 transition-colors"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 24h5V7H0v17zM7.5 7h4.8v2.7h.07c.67-1.26 2.3-2.7 4.73-2.7 5.06 0 6 3.34 6 7.7V24h-5v-7.6c0-1.81-.03-4.13-2.51-4.13-2.52 0-2.91 1.97-2.91 4v7.73H7.5V7z" />
          </svg>
        </Link>
      )}
    </div>
  );
}
