"use strict";module.exports = validate20;module.exports.default = validate20;const schema22 = {"$schema":"http://json-schema.org/draft-07/schema#","$id":"https://schemas.agentwp.com/action.schema.json","version":"0.1.0","title":"Action","description":"An action is an object that can be executed in WordPress to perform a particular task according to its abilities. It is coupling of an ability with a data structure.","type":"object","allOf":[{"$ref":"#/definitions/baseAction"}],"oneOf":[{"$ref":"#/definitions/navigateAction"},{"$ref":"#/definitions/runAction"},{"$ref":"#/definitions/codeAction"},{"$ref":"#/definitions/queryAction"},{"$ref":"#/definitions/messageAction"},{"$ref":"#/definitions/writeToEditorAction"}],"definitions":{"abilities":{"title":"Abilities","description":"Enumeration of available abilities for a AgentWP.","type":"string","enum":["run","message","navigate","query","code","write_to_input","write_to_editor"]},"baseAction":{"type":"object","properties":{"ability":{"$ref":"#/definitions/abilities","description":"The ability of the Action defines what it's able to do when executed by the WordPress client."}},"required":["ability"]},"navigateAction":{"allOf":[{"properties":{"ability":{"const":"navigate","title":"Performs a standard page navigation within WordPress using `window.location`."},"url":{"type":"string","description":"The URL to navigate to."}},"required":["url","ability"]}]},"queryAction":{"allOf":[{"properties":{"ability":{"const":"query","title":"Queries the WordPress database using $wpdb global and a prepared statement."},"sql":{"type":"string","description":"The SQL query to run with placeholders that will be replaced by the prepared arguments."},"args":{"type":"array","items":{"oneOf":[{"type":"string"},{"type":"number"}]},"description":"Arguments for the query, to be ran through `wpdb::prepare`."},"visualization":{"type":"string","enum":["conversational","bar-chart","line-chart","table","big-number-card","donut-chart"]}},"required":["ability","visualization","sql"]}]},"runAction":{"allOf":[{"properties":{"ability":{"const":"run","title":"Runs a WP CLI command in the WordPress installation."},"command":{"type":"string","description":"The WP CLI command to run."},"args":{"type":"array","items":{"type":"string"},"description":"Arguments for the command."}},"required":["command","ability"]}]},"codeAction":{"allOf":[{"properties":{"ability":{"const":"code","title":"Code to be executed in the WordPress environment."},"file":{"type":"string","description":"The absolute file path to the code."}},"required":["file","ability"]}]},"messageAction":{"type":"object","properties":{"ability":{"const":"message","title":"Sends a message to the Agent WP dialog interface for the user to respond to."},"text":{"type":"string","description":"The text of the message in markdown."},"buttons":{"type":"array","items":{"type":"object","properties":{"label":{"type":"string"},"url":{"type":"string"},"level":{"type":"string","enum":["primary","secondary","danger","success"]}},"required":["label","url"]}},"graph":{"$ref":"#/definitions/messageActionGraph"},"escalation":{"$ref":"#/definitions/messageActionEscalation"}},"required":["text","ability"]},"messageActionGraph":{"type":"object","properties":{"graphType":{"type":"string","default":"bar"},"title":{"type":"string"},"data":{"type":"array","items":{"type":"object","properties":{"label":{"type":"string"},"value":{"type":"number"}},"required":["label","value"]}}},"required":["graphType","data"]},"messageActionEscalation":{"type":"object","properties":{"service":{"type":"string","enum":["codeable"],"description":"The name of the escalation service to use."},"id":{"type":"string","description":"The ID of the escalation."},"name":{"type":"string","description":"Name of the service. Usually contains an identifier."},"headline":{"type":"string","description":"The headline of the escalation."},"description":{"type":"string","description":"The description of the escalation."}}},"writeToEditorAction":{"type":"object","properties":{"ability":{"const":"write_to_editor","title":"Writes text to the WordPress editor."},"text":{"type":"string","description":"The text to write to the editor using Gutenberg blocks."}},"required":["text","ability"]},"writeToInputFieldAction":{"type":"object","properties":{"ability":{"const":"write_to_input","title":"Writes text to an input field or textarea."},"text":{"type":"string","description":"The text to write to the input field."}},"required":["text","ability"]}}};const schema23 = {"allOf":[{"properties":{"ability":{"const":"navigate","title":"Performs a standard page navigation within WordPress using `window.location`."},"url":{"type":"string","description":"The URL to navigate to."}},"required":["url","ability"]}]};const schema24 = {"allOf":[{"properties":{"ability":{"const":"run","title":"Runs a WP CLI command in the WordPress installation."},"command":{"type":"string","description":"The WP CLI command to run."},"args":{"type":"array","items":{"type":"string"},"description":"Arguments for the command."}},"required":["command","ability"]}]};const schema25 = {"allOf":[{"properties":{"ability":{"const":"code","title":"Code to be executed in the WordPress environment."},"file":{"type":"string","description":"The absolute file path to the code."}},"required":["file","ability"]}]};const schema26 = {"allOf":[{"properties":{"ability":{"const":"query","title":"Queries the WordPress database using $wpdb global and a prepared statement."},"sql":{"type":"string","description":"The SQL query to run with placeholders that will be replaced by the prepared arguments."},"args":{"type":"array","items":{"oneOf":[{"type":"string"},{"type":"number"}]},"description":"Arguments for the query, to be ran through `wpdb::prepare`."},"visualization":{"type":"string","enum":["conversational","bar-chart","line-chart","table","big-number-card","donut-chart"]}},"required":["ability","visualization","sql"]}]};const schema30 = {"type":"object","properties":{"ability":{"const":"write_to_editor","title":"Writes text to the WordPress editor."},"text":{"type":"string","description":"The text to write to the editor using Gutenberg blocks."}},"required":["text","ability"]};const schema27 = {"type":"object","properties":{"ability":{"const":"message","title":"Sends a message to the Agent WP dialog interface for the user to respond to."},"text":{"type":"string","description":"The text of the message in markdown."},"buttons":{"type":"array","items":{"type":"object","properties":{"label":{"type":"string"},"url":{"type":"string"},"level":{"type":"string","enum":["primary","secondary","danger","success"]}},"required":["label","url"]}},"graph":{"$ref":"#/definitions/messageActionGraph"},"escalation":{"$ref":"#/definitions/messageActionEscalation"}},"required":["text","ability"]};const schema28 = {"type":"object","properties":{"graphType":{"type":"string","default":"bar"},"title":{"type":"string"},"data":{"type":"array","items":{"type":"object","properties":{"label":{"type":"string"},"value":{"type":"number"}},"required":["label","value"]}}},"required":["graphType","data"]};const schema29 = {"type":"object","properties":{"service":{"type":"string","enum":["codeable"],"description":"The name of the escalation service to use."},"id":{"type":"string","description":"The ID of the escalation."},"name":{"type":"string","description":"Name of the service. Usually contains an identifier."},"headline":{"type":"string","description":"The headline of the escalation."},"description":{"type":"string","description":"The description of the escalation."}}};function validate21(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if(((data.text === undefined) && (missing0 = "text")) || ((data.ability === undefined) && (missing0 = "ability"))){validate21.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data.ability !== undefined){const _errs1 = errors;if("message" !== data.ability){validate21.errors = [{instancePath:instancePath+"/ability",schemaPath:"#/properties/ability/const",keyword:"const",params:{allowedValue: "message"},message:"must be equal to constant"}];return false;}var valid0 = _errs1 === errors;}else {var valid0 = true;}if(valid0){if(data.text !== undefined){const _errs2 = errors;if(typeof data.text !== "string"){validate21.errors = [{instancePath:instancePath+"/text",schemaPath:"#/properties/text/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.buttons !== undefined){let data2 = data.buttons;const _errs4 = errors;if(errors === _errs4){if(Array.isArray(data2)){var valid1 = true;const len0 = data2.length;for(let i0=0; i0<len0; i0++){let data3 = data2[i0];const _errs6 = errors;if(errors === _errs6){if(data3 && typeof data3 == "object" && !Array.isArray(data3)){let missing1;if(((data3.label === undefined) && (missing1 = "label")) || ((data3.url === undefined) && (missing1 = "url"))){validate21.errors = [{instancePath:instancePath+"/buttons/" + i0,schemaPath:"#/properties/buttons/items/required",keyword:"required",params:{missingProperty: missing1},message:"must have required property '"+missing1+"'"}];return false;}else {if(data3.label !== undefined){const _errs8 = errors;if(typeof data3.label !== "string"){validate21.errors = [{instancePath:instancePath+"/buttons/" + i0+"/label",schemaPath:"#/properties/buttons/items/properties/label/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs8 === errors;}else {var valid2 = true;}if(valid2){if(data3.url !== undefined){const _errs10 = errors;if(typeof data3.url !== "string"){validate21.errors = [{instancePath:instancePath+"/buttons/" + i0+"/url",schemaPath:"#/properties/buttons/items/properties/url/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs10 === errors;}else {var valid2 = true;}if(valid2){if(data3.level !== undefined){let data6 = data3.level;const _errs12 = errors;if(typeof data6 !== "string"){validate21.errors = [{instancePath:instancePath+"/buttons/" + i0+"/level",schemaPath:"#/properties/buttons/items/properties/level/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}if(!((((data6 === "primary") || (data6 === "secondary")) || (data6 === "danger")) || (data6 === "success"))){validate21.errors = [{instancePath:instancePath+"/buttons/" + i0+"/level",schemaPath:"#/properties/buttons/items/properties/level/enum",keyword:"enum",params:{allowedValues: schema27.properties.buttons.items.properties.level.enum},message:"must be equal to one of the allowed values"}];return false;}var valid2 = _errs12 === errors;}else {var valid2 = true;}}}}}else {validate21.errors = [{instancePath:instancePath+"/buttons/" + i0,schemaPath:"#/properties/buttons/items/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid1 = _errs6 === errors;if(!valid1){break;}}}else {validate21.errors = [{instancePath:instancePath+"/buttons",schemaPath:"#/properties/buttons/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.graph !== undefined){let data7 = data.graph;const _errs14 = errors;const _errs15 = errors;if(errors === _errs15){if(data7 && typeof data7 == "object" && !Array.isArray(data7)){let missing2;if(((data7.graphType === undefined) && (missing2 = "graphType")) || ((data7.data === undefined) && (missing2 = "data"))){validate21.errors = [{instancePath:instancePath+"/graph",schemaPath:"#/definitions/messageActionGraph/required",keyword:"required",params:{missingProperty: missing2},message:"must have required property '"+missing2+"'"}];return false;}else {if(data7.graphType !== undefined){const _errs17 = errors;if(typeof data7.graphType !== "string"){validate21.errors = [{instancePath:instancePath+"/graph/graphType",schemaPath:"#/definitions/messageActionGraph/properties/graphType/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid4 = _errs17 === errors;}else {var valid4 = true;}if(valid4){if(data7.title !== undefined){const _errs19 = errors;if(typeof data7.title !== "string"){validate21.errors = [{instancePath:instancePath+"/graph/title",schemaPath:"#/definitions/messageActionGraph/properties/title/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid4 = _errs19 === errors;}else {var valid4 = true;}if(valid4){if(data7.data !== undefined){let data10 = data7.data;const _errs21 = errors;if(errors === _errs21){if(Array.isArray(data10)){var valid5 = true;const len1 = data10.length;for(let i1=0; i1<len1; i1++){let data11 = data10[i1];const _errs23 = errors;if(errors === _errs23){if(data11 && typeof data11 == "object" && !Array.isArray(data11)){let missing3;if(((data11.label === undefined) && (missing3 = "label")) || ((data11.value === undefined) && (missing3 = "value"))){validate21.errors = [{instancePath:instancePath+"/graph/data/" + i1,schemaPath:"#/definitions/messageActionGraph/properties/data/items/required",keyword:"required",params:{missingProperty: missing3},message:"must have required property '"+missing3+"'"}];return false;}else {if(data11.label !== undefined){const _errs25 = errors;if(typeof data11.label !== "string"){validate21.errors = [{instancePath:instancePath+"/graph/data/" + i1+"/label",schemaPath:"#/definitions/messageActionGraph/properties/data/items/properties/label/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid6 = _errs25 === errors;}else {var valid6 = true;}if(valid6){if(data11.value !== undefined){const _errs27 = errors;if(!(typeof data11.value == "number")){validate21.errors = [{instancePath:instancePath+"/graph/data/" + i1+"/value",schemaPath:"#/definitions/messageActionGraph/properties/data/items/properties/value/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid6 = _errs27 === errors;}else {var valid6 = true;}}}}else {validate21.errors = [{instancePath:instancePath+"/graph/data/" + i1,schemaPath:"#/definitions/messageActionGraph/properties/data/items/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid5 = _errs23 === errors;if(!valid5){break;}}}else {validate21.errors = [{instancePath:instancePath+"/graph/data",schemaPath:"#/definitions/messageActionGraph/properties/data/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid4 = _errs21 === errors;}else {var valid4 = true;}}}}}else {validate21.errors = [{instancePath:instancePath+"/graph",schemaPath:"#/definitions/messageActionGraph/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs14 === errors;}else {var valid0 = true;}if(valid0){if(data.escalation !== undefined){let data14 = data.escalation;const _errs29 = errors;const _errs30 = errors;if(errors === _errs30){if(data14 && typeof data14 == "object" && !Array.isArray(data14)){if(data14.service !== undefined){let data15 = data14.service;const _errs32 = errors;if(typeof data15 !== "string"){validate21.errors = [{instancePath:instancePath+"/escalation/service",schemaPath:"#/definitions/messageActionEscalation/properties/service/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}if(!(data15 === "codeable")){validate21.errors = [{instancePath:instancePath+"/escalation/service",schemaPath:"#/definitions/messageActionEscalation/properties/service/enum",keyword:"enum",params:{allowedValues: schema29.properties.service.enum},message:"must be equal to one of the allowed values"}];return false;}var valid8 = _errs32 === errors;}else {var valid8 = true;}if(valid8){if(data14.id !== undefined){const _errs34 = errors;if(typeof data14.id !== "string"){validate21.errors = [{instancePath:instancePath+"/escalation/id",schemaPath:"#/definitions/messageActionEscalation/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid8 = _errs34 === errors;}else {var valid8 = true;}if(valid8){if(data14.name !== undefined){const _errs36 = errors;if(typeof data14.name !== "string"){validate21.errors = [{instancePath:instancePath+"/escalation/name",schemaPath:"#/definitions/messageActionEscalation/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid8 = _errs36 === errors;}else {var valid8 = true;}if(valid8){if(data14.headline !== undefined){const _errs38 = errors;if(typeof data14.headline !== "string"){validate21.errors = [{instancePath:instancePath+"/escalation/headline",schemaPath:"#/definitions/messageActionEscalation/properties/headline/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid8 = _errs38 === errors;}else {var valid8 = true;}if(valid8){if(data14.description !== undefined){const _errs40 = errors;if(typeof data14.description !== "string"){validate21.errors = [{instancePath:instancePath+"/escalation/description",schemaPath:"#/definitions/messageActionEscalation/properties/description/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid8 = _errs40 === errors;}else {var valid8 = true;}}}}}}else {validate21.errors = [{instancePath:instancePath+"/escalation",schemaPath:"#/definitions/messageActionEscalation/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs29 === errors;}else {var valid0 = true;}}}}}}}else {validate21.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate21.errors = vErrors;return errors === 0;}const schema31 = {"type":"object","properties":{"ability":{"$ref":"#/definitions/abilities","description":"The ability of the Action defines what it's able to do when executed by the WordPress client."}},"required":["ability"]};const schema32 = {"title":"Abilities","description":"Enumeration of available abilities for a AgentWP.","type":"string","enum":["run","message","navigate","query","code","write_to_input","write_to_editor"]};function validate23(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if((data.ability === undefined) && (missing0 = "ability")){validate23.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data.ability !== undefined){let data0 = data.ability;if(typeof data0 !== "string"){validate23.errors = [{instancePath:instancePath+"/ability",schemaPath:"#/definitions/abilities/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}if(!(((((((data0 === "run") || (data0 === "message")) || (data0 === "navigate")) || (data0 === "query")) || (data0 === "code")) || (data0 === "write_to_input")) || (data0 === "write_to_editor"))){validate23.errors = [{instancePath:instancePath+"/ability",schemaPath:"#/definitions/abilities/enum",keyword:"enum",params:{allowedValues: schema32.enum},message:"must be equal to one of the allowed values"}];return false;}}}}else {validate23.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate23.errors = vErrors;return errors === 0;}function validate20(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){/*# sourceURL="https://schemas.agentwp.com/action.schema.json" */;let vErrors = null;let errors = 0;if(!(data && typeof data == "object" && !Array.isArray(data))){validate20.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}const _errs1 = errors;let valid0 = false;let passing0 = null;const _errs2 = errors;if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if(((data.url === undefined) && (missing0 = "url")) || ((data.ability === undefined) && (missing0 = "ability"))){const err0 = {instancePath,schemaPath:"#/definitions/navigateAction/allOf/0/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"};if(vErrors === null){vErrors = [err0];}else {vErrors.push(err0);}errors++;}else {if(data.ability !== undefined){const _errs5 = errors;if("navigate" !== data.ability){const err1 = {instancePath:instancePath+"/ability",schemaPath:"#/definitions/navigateAction/allOf/0/properties/ability/const",keyword:"const",params:{allowedValue: "navigate"},message:"must be equal to constant"};if(vErrors === null){vErrors = [err1];}else {vErrors.push(err1);}errors++;}var valid3 = _errs5 === errors;}else {var valid3 = true;}if(valid3){if(data.url !== undefined){const _errs6 = errors;if(typeof data.url !== "string"){const err2 = {instancePath:instancePath+"/url",schemaPath:"#/definitions/navigateAction/allOf/0/properties/url/type",keyword:"type",params:{type: "string"},message:"must be string"};if(vErrors === null){vErrors = [err2];}else {vErrors.push(err2);}errors++;}var valid3 = _errs6 === errors;}else {var valid3 = true;}}}}var _valid0 = _errs2 === errors;if(_valid0){valid0 = true;passing0 = 0;}const _errs8 = errors;if(data && typeof data == "object" && !Array.isArray(data)){let missing1;if(((data.command === undefined) && (missing1 = "command")) || ((data.ability === undefined) && (missing1 = "ability"))){const err3 = {instancePath,schemaPath:"#/definitions/runAction/allOf/0/required",keyword:"required",params:{missingProperty: missing1},message:"must have required property '"+missing1+"'"};if(vErrors === null){vErrors = [err3];}else {vErrors.push(err3);}errors++;}else {if(data.ability !== undefined){const _errs11 = errors;if("run" !== data.ability){const err4 = {instancePath:instancePath+"/ability",schemaPath:"#/definitions/runAction/allOf/0/properties/ability/const",keyword:"const",params:{allowedValue: "run"},message:"must be equal to constant"};if(vErrors === null){vErrors = [err4];}else {vErrors.push(err4);}errors++;}var valid6 = _errs11 === errors;}else {var valid6 = true;}if(valid6){if(data.command !== undefined){const _errs12 = errors;if(typeof data.command !== "string"){const err5 = {instancePath:instancePath+"/command",schemaPath:"#/definitions/runAction/allOf/0/properties/command/type",keyword:"type",params:{type: "string"},message:"must be string"};if(vErrors === null){vErrors = [err5];}else {vErrors.push(err5);}errors++;}var valid6 = _errs12 === errors;}else {var valid6 = true;}if(valid6){if(data.args !== undefined){let data4 = data.args;const _errs14 = errors;if(errors === _errs14){if(Array.isArray(data4)){var valid7 = true;const len0 = data4.length;for(let i0=0; i0<len0; i0++){const _errs16 = errors;if(typeof data4[i0] !== "string"){const err6 = {instancePath:instancePath+"/args/" + i0,schemaPath:"#/definitions/runAction/allOf/0/properties/args/items/type",keyword:"type",params:{type: "string"},message:"must be string"};if(vErrors === null){vErrors = [err6];}else {vErrors.push(err6);}errors++;}var valid7 = _errs16 === errors;if(!valid7){break;}}}else {const err7 = {instancePath:instancePath+"/args",schemaPath:"#/definitions/runAction/allOf/0/properties/args/type",keyword:"type",params:{type: "array"},message:"must be array"};if(vErrors === null){vErrors = [err7];}else {vErrors.push(err7);}errors++;}}var valid6 = _errs14 === errors;}else {var valid6 = true;}}}}}var _valid0 = _errs8 === errors;if(_valid0 && valid0){valid0 = false;passing0 = [passing0, 1];}else {if(_valid0){valid0 = true;passing0 = 1;}const _errs18 = errors;if(data && typeof data == "object" && !Array.isArray(data)){let missing2;if(((data.file === undefined) && (missing2 = "file")) || ((data.ability === undefined) && (missing2 = "ability"))){const err8 = {instancePath,schemaPath:"#/definitions/codeAction/allOf/0/required",keyword:"required",params:{missingProperty: missing2},message:"must have required property '"+missing2+"'"};if(vErrors === null){vErrors = [err8];}else {vErrors.push(err8);}errors++;}else {if(data.ability !== undefined){const _errs21 = errors;if("code" !== data.ability){const err9 = {instancePath:instancePath+"/ability",schemaPath:"#/definitions/codeAction/allOf/0/properties/ability/const",keyword:"const",params:{allowedValue: "code"},message:"must be equal to constant"};if(vErrors === null){vErrors = [err9];}else {vErrors.push(err9);}errors++;}var valid10 = _errs21 === errors;}else {var valid10 = true;}if(valid10){if(data.file !== undefined){const _errs22 = errors;if(typeof data.file !== "string"){const err10 = {instancePath:instancePath+"/file",schemaPath:"#/definitions/codeAction/allOf/0/properties/file/type",keyword:"type",params:{type: "string"},message:"must be string"};if(vErrors === null){vErrors = [err10];}else {vErrors.push(err10);}errors++;}var valid10 = _errs22 === errors;}else {var valid10 = true;}}}}var _valid0 = _errs18 === errors;if(_valid0 && valid0){valid0 = false;passing0 = [passing0, 2];}else {if(_valid0){valid0 = true;passing0 = 2;}const _errs24 = errors;if(data && typeof data == "object" && !Array.isArray(data)){let missing3;if((((data.ability === undefined) && (missing3 = "ability")) || ((data.visualization === undefined) && (missing3 = "visualization"))) || ((data.sql === undefined) && (missing3 = "sql"))){const err11 = {instancePath,schemaPath:"#/definitions/queryAction/allOf/0/required",keyword:"required",params:{missingProperty: missing3},message:"must have required property '"+missing3+"'"};if(vErrors === null){vErrors = [err11];}else {vErrors.push(err11);}errors++;}else {if(data.ability !== undefined){const _errs27 = errors;if("query" !== data.ability){const err12 = {instancePath:instancePath+"/ability",schemaPath:"#/definitions/queryAction/allOf/0/properties/ability/const",keyword:"const",params:{allowedValue: "query"},message:"must be equal to constant"};if(vErrors === null){vErrors = [err12];}else {vErrors.push(err12);}errors++;}var valid13 = _errs27 === errors;}else {var valid13 = true;}if(valid13){if(data.sql !== undefined){const _errs28 = errors;if(typeof data.sql !== "string"){const err13 = {instancePath:instancePath+"/sql",schemaPath:"#/definitions/queryAction/allOf/0/properties/sql/type",keyword:"type",params:{type: "string"},message:"must be string"};if(vErrors === null){vErrors = [err13];}else {vErrors.push(err13);}errors++;}var valid13 = _errs28 === errors;}else {var valid13 = true;}if(valid13){if(data.args !== undefined){let data10 = data.args;const _errs30 = errors;if(errors === _errs30){if(Array.isArray(data10)){var valid14 = true;const len1 = data10.length;for(let i1=0; i1<len1; i1++){let data11 = data10[i1];const _errs32 = errors;const _errs33 = errors;let valid15 = false;let passing1 = null;const _errs34 = errors;if(typeof data11 !== "string"){const err14 = {instancePath:instancePath+"/args/" + i1,schemaPath:"#/definitions/queryAction/allOf/0/properties/args/items/oneOf/0/type",keyword:"type",params:{type: "string"},message:"must be string"};if(vErrors === null){vErrors = [err14];}else {vErrors.push(err14);}errors++;}var _valid1 = _errs34 === errors;if(_valid1){valid15 = true;passing1 = 0;}const _errs36 = errors;if(!(typeof data11 == "number")){const err15 = {instancePath:instancePath+"/args/" + i1,schemaPath:"#/definitions/queryAction/allOf/0/properties/args/items/oneOf/1/type",keyword:"type",params:{type: "number"},message:"must be number"};if(vErrors === null){vErrors = [err15];}else {vErrors.push(err15);}errors++;}var _valid1 = _errs36 === errors;if(_valid1 && valid15){valid15 = false;passing1 = [passing1, 1];}else {if(_valid1){valid15 = true;passing1 = 1;}}if(!valid15){const err16 = {instancePath:instancePath+"/args/" + i1,schemaPath:"#/definitions/queryAction/allOf/0/properties/args/items/oneOf",keyword:"oneOf",params:{passingSchemas: passing1},message:"must match exactly one schema in oneOf"};if(vErrors === null){vErrors = [err16];}else {vErrors.push(err16);}errors++;}else {errors = _errs33;if(vErrors !== null){if(_errs33){vErrors.length = _errs33;}else {vErrors = null;}}}var valid14 = _errs32 === errors;if(!valid14){break;}}}else {const err17 = {instancePath:instancePath+"/args",schemaPath:"#/definitions/queryAction/allOf/0/properties/args/type",keyword:"type",params:{type: "array"},message:"must be array"};if(vErrors === null){vErrors = [err17];}else {vErrors.push(err17);}errors++;}}var valid13 = _errs30 === errors;}else {var valid13 = true;}if(valid13){if(data.visualization !== undefined){let data12 = data.visualization;const _errs38 = errors;if(typeof data12 !== "string"){const err18 = {instancePath:instancePath+"/visualization",schemaPath:"#/definitions/queryAction/allOf/0/properties/visualization/type",keyword:"type",params:{type: "string"},message:"must be string"};if(vErrors === null){vErrors = [err18];}else {vErrors.push(err18);}errors++;}if(!((((((data12 === "conversational") || (data12 === "bar-chart")) || (data12 === "line-chart")) || (data12 === "table")) || (data12 === "big-number-card")) || (data12 === "donut-chart"))){const err19 = {instancePath:instancePath+"/visualization",schemaPath:"#/definitions/queryAction/allOf/0/properties/visualization/enum",keyword:"enum",params:{allowedValues: schema26.allOf[0].properties.visualization.enum},message:"must be equal to one of the allowed values"};if(vErrors === null){vErrors = [err19];}else {vErrors.push(err19);}errors++;}var valid13 = _errs38 === errors;}else {var valid13 = true;}}}}}}var _valid0 = _errs24 === errors;if(_valid0 && valid0){valid0 = false;passing0 = [passing0, 3];}else {if(_valid0){valid0 = true;passing0 = 3;}const _errs40 = errors;if(!(validate21(data, {instancePath,parentData,parentDataProperty,rootData}))){vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);errors = vErrors.length;}var _valid0 = _errs40 === errors;if(_valid0 && valid0){valid0 = false;passing0 = [passing0, 4];}else {if(_valid0){valid0 = true;passing0 = 4;}const _errs41 = errors;const _errs42 = errors;if(errors === _errs42){if(data && typeof data == "object" && !Array.isArray(data)){let missing4;if(((data.text === undefined) && (missing4 = "text")) || ((data.ability === undefined) && (missing4 = "ability"))){const err20 = {instancePath,schemaPath:"#/definitions/writeToEditorAction/required",keyword:"required",params:{missingProperty: missing4},message:"must have required property '"+missing4+"'"};if(vErrors === null){vErrors = [err20];}else {vErrors.push(err20);}errors++;}else {if(data.ability !== undefined){const _errs44 = errors;if("write_to_editor" !== data.ability){const err21 = {instancePath:instancePath+"/ability",schemaPath:"#/definitions/writeToEditorAction/properties/ability/const",keyword:"const",params:{allowedValue: "write_to_editor"},message:"must be equal to constant"};if(vErrors === null){vErrors = [err21];}else {vErrors.push(err21);}errors++;}var valid17 = _errs44 === errors;}else {var valid17 = true;}if(valid17){if(data.text !== undefined){const _errs45 = errors;if(typeof data.text !== "string"){const err22 = {instancePath:instancePath+"/text",schemaPath:"#/definitions/writeToEditorAction/properties/text/type",keyword:"type",params:{type: "string"},message:"must be string"};if(vErrors === null){vErrors = [err22];}else {vErrors.push(err22);}errors++;}var valid17 = _errs45 === errors;}else {var valid17 = true;}}}}else {const err23 = {instancePath,schemaPath:"#/definitions/writeToEditorAction/type",keyword:"type",params:{type: "object"},message:"must be object"};if(vErrors === null){vErrors = [err23];}else {vErrors.push(err23);}errors++;}}var _valid0 = _errs41 === errors;if(_valid0 && valid0){valid0 = false;passing0 = [passing0, 5];}else {if(_valid0){valid0 = true;passing0 = 5;}}}}}}if(!valid0){const err24 = {instancePath,schemaPath:"#/oneOf",keyword:"oneOf",params:{passingSchemas: passing0},message:"must match exactly one schema in oneOf"};if(vErrors === null){vErrors = [err24];}else {vErrors.push(err24);}errors++;validate20.errors = vErrors;return false;}else {errors = _errs1;if(vErrors !== null){if(_errs1){vErrors.length = _errs1;}else {vErrors = null;}}if(!(validate23(data, {instancePath,parentData,parentDataProperty,rootData}))){vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);errors = vErrors.length;}}validate20.errors = vErrors;return errors === 0;}