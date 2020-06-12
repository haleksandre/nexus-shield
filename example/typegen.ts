/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */

import { FieldShieldResolver } from '../src/plugin';

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {}

export interface NexusGenEnums {
  EnumTest: 'test';
}

export interface NexusGenRootTypes {
  Query: {};
  Test: {
    // root type
    id: string; // ID!
    prop: string; // String!
  };
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  EnumTest: NexusGenEnums['EnumTest'];
}

export interface NexusGenFieldTypes {
  Query: {
    // field return type
    test: NexusGenRootTypes['Test']; // Test!
  };
  Test: {
    // field return type
    id: string; // ID!
    prop: string; // String!
    test: NexusGenEnums['EnumTest']; // EnumTest!
  };
}

export interface NexusGenArgTypes {
  Test: {
    test: {
      // args
      name?: string | null; // String
    };
  };
}

export interface NexusGenAbstractResolveReturnTypes {}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = 'Query' | 'Test';

export type NexusGenInputNames = never;

export type NexusGenEnumNames = 'EnumTest';

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = 'Boolean' | 'Float' | 'ID' | 'Int' | 'String';

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: { user: string };
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes:
    | NexusGenTypes['inputNames']
    | NexusGenTypes['enumNames']
    | NexusGenTypes['scalarNames'];
  allOutputTypes:
    | NexusGenTypes['objectNames']
    | NexusGenTypes['enumNames']
    | NexusGenTypes['unionNames']
    | NexusGenTypes['interfaceNames']
    | NexusGenTypes['scalarNames'];
  allNamedTypes:
    | NexusGenTypes['allInputTypes']
    | NexusGenTypes['allOutputTypes'];
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}

declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {}
  interface NexusGenPluginFieldConfig<
    TypeName extends string,
    FieldName extends string
  > {
    /**
     * Rule to execute
     */
    shield?: FieldShieldResolver<TypeName, FieldName>;
  }
  interface NexusGenPluginSchemaConfig {}
}
