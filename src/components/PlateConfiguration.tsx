import React from "react";
import { SwitchCutoutType } from "../maker_models/KeyCutouts";
import { StabilizerCutoutType } from "../maker_models/StabilizerCutout";

export interface PlateConfigurationProps {
  rawKLEData?: string;
  switchCutoutType?: SwitchCutoutType;
  switchCutoutRadius?: number;
  stabilizerCutoutType?: string;
  stabilizerCutoutRadius?: number;
  horizontalKeySpacing?: number;
  verticalKeySpacing?: number;
}

class PlateConfiguration extends React.Component<PlateConfigurationProps> {
  render() {
    const {
      rawKLEData = "",
      switchCutoutType = SwitchCutoutType.MX,
      switchCutoutRadius = 0.5,
      stabilizerCutoutType = StabilizerCutoutType.Large,
      stabilizerCutoutRadius = 0.5,
      horizontalKeySpacing = 19.05,
      verticalKeySpacing = 19.05,
    } = this.props;

    return (
      <div className="plateConfiguration">
        <div className="ui form">
          <div className="field">
            <label>KLE Raw Data</label>
            <textarea>{rawKLEData}</textarea>
          </div>

          <div className="field">
            <label>Switch Cutout Type</label>
            <div className="ui selection dropdown">
              <input name="switchCutoutType"></input>
              <i className="dropdown icon"></i>
              <div className="menu">
                <div className="item" data-value="MX">MX</div>
                <div className="item" data-value="Alps">Alps</div>
                <div className="item" data-value="MX_Alps">MX/Alps</div>
                <div className="item" data-value="MX_Opening">MX Opening</div>
                <div className="item" data-value="MX_Encoder">MX + Encoder</div>
              </div>
            </div>
          </div>
        </div>

        <div className="switchCutoutConfig">
          <div className="cutoutType">
            Switch Cutout Type: {switchCutoutType}
          </div>
          <div className="cutoutRadius">
            Switch Cutout Radius: {switchCutoutRadius}
          </div>
        </div>

        <div className="stabilizerCutoutConfig">
          <div className="cutoutType">
            Stabilizer Cutout Type: {stabilizerCutoutType}
          </div>
          <div className="cutoutRadius">
            Stabilizer Cutout Radius: {stabilizerCutoutRadius}
          </div>
        </div>

        <div className="keySpacing">
          <div className="horizontalKeySpacing">
            Horizontal Key Spacing: {horizontalKeySpacing}
          </div>
          <div className="verticalKeySpacing">
            Vertical Key Spacing: {verticalKeySpacing}
          </div>
        </div>
      </div>
    );
  }
}

export default PlateConfiguration;
