"use strict";module.exports = validate20;module.exports.default = validate20;const schema22 = {"$schema":"http://json-schema.org/draft-07/schema#","type":"object","title":"WordPress Navigation Target","description":"An object that identifies a WordPress page and its capabilities.","required":["purpose","capabilities","is_spa"],"properties":{"purpose":{"type":"string","description":"The page's reason for being, in no more than 280 characters.","maxLength":280},"capabilities":{"type":"array","description":"An array of objects representing the page's capabilities.","items":{"type":"object","required":["capability_description","element_selector","element_type","has_payload"],"properties":{"capability_description":{"type":"string","description":"A description of what the capability does."},"acting_element_selector":{"type":"string","description":"The CSS selector for the element that performs the capability."},"element_type":{"type":"string","description":"The type of element (e.g., form, input, button, a)."},"has_payload":{"type":"boolean","description":"Whether the element expects a payload or not. For example, an anchor tag or button does not expect a payload, but a form or input does."},"payload_description":{"type":"string","description":"A description of what the element expects as a payload (optional)."}}}},"is_spa":{"type":"boolean","description":"Indicates whether the page is a single-page application (SPA) or not."}}};const func4 = require("ajv/dist/runtime/ucs2length").default;function validate20(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if((((data.purpose === undefined) && (missing0 = "purpose")) || ((data.capabilities === undefined) && (missing0 = "capabilities"))) || ((data.is_spa === undefined) && (missing0 = "is_spa"))){validate20.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data.purpose !== undefined){let data0 = data.purpose;const _errs1 = errors;if(errors === _errs1){if(typeof data0 === "string"){if(func4(data0) > 280){validate20.errors = [{instancePath:instancePath+"/purpose",schemaPath:"#/properties/purpose/maxLength",keyword:"maxLength",params:{limit: 280},message:"must NOT have more than 280 characters"}];return false;}}else {validate20.errors = [{instancePath:instancePath+"/purpose",schemaPath:"#/properties/purpose/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}var valid0 = _errs1 === errors;}else {var valid0 = true;}if(valid0){if(data.capabilities !== undefined){let data1 = data.capabilities;const _errs3 = errors;if(errors === _errs3){if(Array.isArray(data1)){var valid1 = true;const len0 = data1.length;for(let i0=0; i0<len0; i0++){let data2 = data1[i0];const _errs5 = errors;if(errors === _errs5){if(data2 && typeof data2 == "object" && !Array.isArray(data2)){let missing1;if(((((data2.capability_description === undefined) && (missing1 = "capability_description")) || ((data2.element_selector === undefined) && (missing1 = "element_selector"))) || ((data2.element_type === undefined) && (missing1 = "element_type"))) || ((data2.has_payload === undefined) && (missing1 = "has_payload"))){validate20.errors = [{instancePath:instancePath+"/capabilities/" + i0,schemaPath:"#/properties/capabilities/items/required",keyword:"required",params:{missingProperty: missing1},message:"must have required property '"+missing1+"'"}];return false;}else {if(data2.capability_description !== undefined){const _errs7 = errors;if(typeof data2.capability_description !== "string"){validate20.errors = [{instancePath:instancePath+"/capabilities/" + i0+"/capability_description",schemaPath:"#/properties/capabilities/items/properties/capability_description/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs7 === errors;}else {var valid2 = true;}if(valid2){if(data2.acting_element_selector !== undefined){const _errs9 = errors;if(typeof data2.acting_element_selector !== "string"){validate20.errors = [{instancePath:instancePath+"/capabilities/" + i0+"/acting_element_selector",schemaPath:"#/properties/capabilities/items/properties/acting_element_selector/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs9 === errors;}else {var valid2 = true;}if(valid2){if(data2.element_type !== undefined){const _errs11 = errors;if(typeof data2.element_type !== "string"){validate20.errors = [{instancePath:instancePath+"/capabilities/" + i0+"/element_type",schemaPath:"#/properties/capabilities/items/properties/element_type/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs11 === errors;}else {var valid2 = true;}if(valid2){if(data2.has_payload !== undefined){const _errs13 = errors;if(typeof data2.has_payload !== "boolean"){validate20.errors = [{instancePath:instancePath+"/capabilities/" + i0+"/has_payload",schemaPath:"#/properties/capabilities/items/properties/has_payload/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid2 = _errs13 === errors;}else {var valid2 = true;}if(valid2){if(data2.payload_description !== undefined){const _errs15 = errors;if(typeof data2.payload_description !== "string"){validate20.errors = [{instancePath:instancePath+"/capabilities/" + i0+"/payload_description",schemaPath:"#/properties/capabilities/items/properties/payload_description/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs15 === errors;}else {var valid2 = true;}}}}}}}else {validate20.errors = [{instancePath:instancePath+"/capabilities/" + i0,schemaPath:"#/properties/capabilities/items/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid1 = _errs5 === errors;if(!valid1){break;}}}else {validate20.errors = [{instancePath:instancePath+"/capabilities",schemaPath:"#/properties/capabilities/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs3 === errors;}else {var valid0 = true;}if(valid0){if(data.is_spa !== undefined){const _errs17 = errors;if(typeof data.is_spa !== "boolean"){validate20.errors = [{instancePath:instancePath+"/is_spa",schemaPath:"#/properties/is_spa/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs17 === errors;}else {var valid0 = true;}}}}}else {validate20.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate20.errors = vErrors;return errors === 0;}