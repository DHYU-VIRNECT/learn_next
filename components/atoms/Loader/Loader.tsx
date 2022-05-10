import React from "react";
import ReactLoading from "react-loading";

type Props = Partial<React.ComponentProps<typeof ReactLoading>> & { size? : number | string }

const Loader = ({type = "spin", color = "gray", size = 30} : Props) => (
    <div className='loader'>
        <ReactLoading type={type} color={color} height={size} width={size} />
    </div>
)

export default Loader;