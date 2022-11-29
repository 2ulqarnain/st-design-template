import Button from "@ui/button/button";
import Input from "@ui/input/input";

export default function Search({className}:{className?:string}){
    return(
        <div className={`flex gap-2 px-2 ${className}`}>
            <Input placeholder="search here..."/>
            <Button text="Search"/>
        </div>
    )
}