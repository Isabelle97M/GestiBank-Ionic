import { KeyValue } from "@angular/common";
import { ValueAccessor } from "@ionic/angular/directives/control-value-accessors/value-accessor";

export interface Customer{
    name: string,
    firstname: string,
    tel: string,
    email: string,
    role: string,
    status: string,
    password: string,
    account: string,
    agent: string
}

export interface Agent{
    name: string,
    firstname: string,
    tel: string,
    email: string,
    role: "AGENT",
    matricule: number,
    password: string
}

export interface Administrator{
    name: string,
    firstname: string,
    tel: string,
    email: string,
    role: "ADMINISTRATOR",
    matricule: number,
    password: string
}


export interface User{
    name: string,
    firstname: string,
    tel: string,
    email: string,
    role: string,
    password: string
}
