import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";

interface FlagImageProps {
  flagPath: string;
  title: string;
}

const FlagImage = ({ flagPath, title }: FlagImageProps) => {
  if (!flagPath) {
    return <PhotoSizeSelectActualIcon fontSize="large" />;
  }

  return <img src={flagPath} alt={`Country flag of ${title}`} />;
};

export default FlagImage;
