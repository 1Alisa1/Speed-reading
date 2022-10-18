import Select from "../common/select";

interface SettingsProps {
    onChangeText: (text:number) => void,
    onChangeSpeed: (speed:number) => void,
    isTextValid: boolean,
    isSpeedValid: boolean
}

function Settings (props:SettingsProps) {
    return (
        <div className="settings-buttons">
            <div className="row justify-content-center">
                <div className="col-4">
                    <Select 
                        data={{
                            '0': 'Choose text',
                            '1': 'Text 1',
                            '2': 'Text 2',
                            '3': 'Text 3'
                        }}
                        isValid={props.isTextValid}
                        onChange={(value) => {props.onChangeText(+value)}}
                        initialValue='0'
                    />
                </div>
                <div className="col-4">
                    <Select
                        data={{
                            '0': 'Choose speed',
                            '60': '60',
                            '90': '90',
                            '120': '120',
                            '150': '150',
                            '200': '200',
                            '250': '250',
                        }}
                        isValid={props.isSpeedValid}
                        onChange={(value) => {props.onChangeSpeed(+value)}}
                        initialValue='0'
                    />
                </div>
            </div>
        </div>
    );
}

export default Settings;