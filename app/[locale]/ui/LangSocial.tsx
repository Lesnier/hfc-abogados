import { ReactNode } from "react";
import Image from "next/image";
import LocaleSwitcher from "./LocaleSwitcher";

interface LangButtonProps {
  children: ReactNode;
  isYellow?: boolean;
  locale?: string;
}

// const LangButton = ({ children, defaultValue, label }: LangButtonProps) => {
//   const router = useRouter();
//   const [isPending, startTransition] = useTransition();
//   const pathname = usePathname();
//   const params = useParams();

//   const onSelectChange = () => {
//     // Lógica para cambiar el idioma
//     startTransition(() => {
//       router.replace(
//         // @ts-expect-error -- TypeScript will validate that only known `params`
//         // are used in combination with a given `pathname`. Since the two will
//         // always match for the current route, we can skip runtime checks.
//         { pathname, params },
//         { locale: locale as Locale }
//       );
//     });
//   };

//   return (
//     // <button
//     //   className={`px-4 py-1 text-sm sm:text-md h-8 font-bold transition duration-300 ease-in-out   ${
//     //     isYellow
//     //       ? "bg-[#f1da9b] text-black  "
//     //       : "border-gray-300 text-gray-700 hover:bg-[#f1da9b] cursor-pointer "
//     //   }`}
//     //   onClick={() => {}}
//     // >
//     //   {children}
//     // </button>
//     <select
//       className="inline-flex appearance-none bg-transparent py-3 pl-2 pr-6"
//       defaultValue={defaultValue}
//       disabled={isPending}
//       onChange={onSelectChange}
//     ></select>
//   );
// };
const SocialButton = ({ children, isYellow = false }: LangButtonProps) => (
  <button
    type="button"
    className={`px-4 py-1 text-md  h-8 font-bold transition duration-150 ease-in-out text-white 
     border-gray-300 text-gray-700 hover:bg-[#304658] cursor-pointer 
    `}
  >
    {children}
  </button>
);

export default function LangSocial() {
  // Componente de Botón de Idioma/Red

  return (
    <div className="flex justify-end  ">
      <div className="flex items-center" style={{ backgroundColor: "#FFE8AA" }}>
        <LocaleSwitcher />
      </div>
      <div
        className=" flex items-center"
        style={{
          backgroundColor: "#1C2C39",
        }}
      >
        <SocialButton>
          <Image
            src="/Linkedin_logo.png"
            width={20}
            height={20}
            alt=""
            style={{ objectFit: "contain", minWidth: 18, minHeight: 18 }}
          />
        </SocialButton>
        <SocialButton>
          {" "}
          <Image
            src="/X_logo.png"
            width={18}
            height={20}
            alt=""
            style={{ objectFit: "contain", minWidth: 18, minHeight: 18 }}
          />
        </SocialButton>
      </div>
    </div>
  );
}
