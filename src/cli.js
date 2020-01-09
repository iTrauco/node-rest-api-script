#!/usr/bin/env node

import meow from "meow";
import { manageEmployees } from "./poc";

const cli = meow(
  `
  Usage: poc [name]
  
  Examples:
	
	$ poc john
	$ poc "Mary Jane"
  `
);

const [employeeName = ""] = cli.input;
manageEmployees(employeeName.trim());
