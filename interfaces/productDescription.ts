interface Price {
  current: number;
  original: number;
  discount: string;
  currencyCode: string;
}

interface Rating {
  score: number;
  totalReviews: number;
}

interface Description {
  short: string;
  long: string;
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
}


interface Product {
  name: string;
  price: Price;
  rating: Rating;
  description: Description;
}
interface Variant {
  name: string;
  colorCode: string;
  price: {
    current: number;
    original: number;
    discount: string;
    currencyCode: string;
  };
}

export interface ProductTitleProps {
  product: Product;
  variant:Variant
}
export interface ColorOptionsProps{
  colors:{name:string;hex:string}[]
}
export interface ExpandableSectionProps {
  description: string;  
  isInitiallyExpanded?: boolean; 
  dimensions:{[key:string]:string},
  imageSource:{[key:string]:string}
}