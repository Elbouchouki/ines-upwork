import Image from 'next/image';
interface IconProps{
    src:string,
    color:string
}
const Icon: React.FC<IconProps> = (props) => {
    return ( 
        <span className={"shareIcon "+props.color}>
                <Image 
                alt="Sign in with Google" 
                src={props.src}
                width={30} height={30}
                />
        </span>
    );
}

export default Icon;