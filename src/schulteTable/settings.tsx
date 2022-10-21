import Select from "../common/select";

interface SettingsProps {
    onChangeDifficultyLevel: (level:number) => void,
    isDifficultyLevelValid: boolean,
}

function Settings (props:SettingsProps) {
    return (
        <div className="settings-buttons">
            <div className="row justify-content-center">
                <div className="col-4">
                    <Select 
                        data={{
                            '0': 'Select difficulty level',
                            '1': 'Easy',
                            '2': 'Normal',
                            '3': 'Hard'
                        }}
                        isValid={props.isDifficultyLevelValid}
                        onChange={(value) => {props.onChangeDifficultyLevel(+value)}}
                        initialValue='0'
                    />
                </div>
            </div>
        </div>
    );
}

export default Settings;