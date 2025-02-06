export type ToolType = {
  iconPath: string,
  name: string,
  description: string,
  link: string
}

export const toolsList = [
  {
    iconPath: '/icons/crypto.png',
    name: "Undetectable Text",
    description:
      "Transforms your text, making it unrecognizable to automated monitoring systems.",
    link: "/undetectable-text",
  },
  {
    iconPath: '/icons/criativo.png',
    name: "Undetectable Creative",
    description:
      "Removes metadata and adds noise to an image, making it undetectable.",
    link: "/undetectable-creative",
  },
  {
    iconPath: '/icons/slides.png',
    name: "VSL Generator",
    description:
      "Generates slides for your VSL quickly and easily.",
    link: "/vsl-generator",
  },
  {
    iconPath: '/icons/imghash.png',
    name: "Change Hash & Metadata",
    description:
      "Generates multiple copies of an image with altered metadata and unique hashes.",
    link: "/image-hash",
  },
  {
    iconPath: '/icons/imghash.png',
    name: "Change Hash in Bulk",
    description:
      "Select up to 10 images and generate a copy of each with altered metadata and unique hashes.",
    link: "/batch-image-hash",
  },
  {
    iconPath: '/icons/vidhash.png',
    name: "Video Hash",
    description:
      "Changes the hash of your video, making it unique.",
    link: "/video-hash",
  },
] as ToolType[];