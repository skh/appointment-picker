import { checkPropTypes } from "prop-types";
import React from "react";
import * as ReactDOMClient from "react-dom/client";

import reactToWebComponent from "react-to-webcomponent";

import AppointmentPicker from "./AppointmentPicker";

const componentProps = {
    props: {
        dates: Array
    }
}

const wcPicker = reactToWebComponent(AppointmentPicker, React, ReactDOMClient, componentProps);

customElements.define("appointment-picker", wcPicker);