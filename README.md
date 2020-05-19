# deno-app
Test Playground Written in Deno + Typescript

# Installation
1. Install deno

  `brew install deno` (mac)

2. Export deno into .bashrc or .zshrc (make sure to source) 

  ```
  export export DENO_INSTALL="/home/ubuntu/.deno"
  export PATH="$DENO_INSTALL/bin:$PATH"
  ```

4. Notes

- Run REPL 

`$ deno`

- Executing scripts 
  
 with run 	`$ deno run https://deno.land/std/examples/welcome.ts`
 without run 	`$ deno https://deno.land/std/examples/welcome.ts`
 eval code 	`$ deno eval "console.log(30933 + 404)"`

- Subcommands

 bundle 	Bundle module + dependencies into a single file
 cache		cache depedencies
 completions	generate shell completions
 doc		show documentation for a module
 eval 		eval script
 fmt 		format source files
 help		prints this message 
 info 		show info about cache or info related to source file
 install	install scripts as an executable
 repl		read eval print loop
 run		run a program given a filename or url to the module
 test		run tests
 types		print runetime Typescript declarations
 upgrade	Upgrade deno executable to newest version

- Env vars

 DENO_DIR	base directory
 DENO_INSTALL_ROOT set deno install's output directory
 NO_COLOR 	set to disable color
 HTTP_PROXY	proxy address
 HTTPS_PROXY	same but for HTTPS
