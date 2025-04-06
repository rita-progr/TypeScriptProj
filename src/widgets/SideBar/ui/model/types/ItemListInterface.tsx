export interface ItemsListInterface{
    path:string;
    icon:React.FC<React.SVGProps<SVGSVGElement>>;
    title:string;
    className:string;
    authOnly?:boolean;
}