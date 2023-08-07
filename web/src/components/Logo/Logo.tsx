import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="/assets/icons/brand.svg"
      alt="Muzzarella"
      data-testid="logo"
      width={160}
      height={24}
    />
  );
};

export default Logo;
