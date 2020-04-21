import {Module, ModuleOptions} from '@pnotify/core';
import * as ModuleExport from './';

export as namespace PNotifyFontAwesome5Fix;

declare abstract class ModuleProperties implements ModuleOptions {}

export type Options = Partial<ModuleProperties>;

export default abstract class FontAwesome5Fix extends ModuleProperties
  implements Module {}
export const position: string;
export const defaults: ModuleProperties;

export type Entry = [typeof ModuleExport, Options];