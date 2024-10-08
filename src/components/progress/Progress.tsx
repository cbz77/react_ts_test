import TaskCheckbox from "./TaskCheckbox"
import { useState } from "react";

const ProgressTest: React.FC = () => {

    const [progressBarVal, setProgressBarVal] = useState(0)
    const pocetCheckboxu: number = 4;
    const progressPrirustek: number = 100 / pocetCheckboxu;

    const handleChange = (e: any) => {

        if(e.currentTarget.checked === true){
        setProgressBarVal(progressBarVal + progressPrirustek);
        }else{
        setProgressBarVal(progressBarVal - progressPrirustek);
        }

    }

    return(
        <div className="progress_test">

            <h2>Progress bar:</h2>

            <progress className="progress mt-5" value={progressBarVal} max={100}></progress>

            <div className='container max-w-28 mx-auto'>
            
            <TaskCheckbox textCheckboxu="Checkbox1" idCheckboxu="checkbox_1" onChange={handleChange}></TaskCheckbox>
            <TaskCheckbox textCheckboxu="Checkbox2" idCheckboxu="checkbox_2" onChange={handleChange}></TaskCheckbox>
            <TaskCheckbox textCheckboxu="Checkbox3" idCheckboxu="checkbox_3" onChange={handleChange}></TaskCheckbox>
            <TaskCheckbox textCheckboxu="Checkbox4" idCheckboxu="checkbox_4" onChange={handleChange}></TaskCheckbox>

            </div>
        </div>
    )
}

export default ProgressTest