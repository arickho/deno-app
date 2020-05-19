# deno-app
Api server using deno

# Installation
1. Install deno

  `brew install deno` (mac)

2. Export deno into .bashrc or .zshrc (make sure to source) 

  ```
  export export DENO_INSTALL="/home/ubuntu/.deno"
  export PATH="$DENO_INSTALL/bin:$PATH"
  ```

3. Run

`deno run --allow-net ./src/app.ts`

# Notes

- Run REPL 

`$ deno`

- Executing scripts 
  
 with run 	`$ deno run https://deno.land/std/examples/welcome.ts`
 without run 	`$ deno https://deno.land/std/examples/welcome.ts`
 eval code 	`$ deno eval "console.log(30933 + 404)"`

Opening `https://deno.land/std/examples/welcome.ts` with the browser, you'll see the codefile in a more user friendly page.

Download the same url via curl or wget will return as text/plain instead of text/html.

Once downloaded, it's now cached by Deno and does not need to be downloaded again.

- Subcommands

 bundle 	Bundle module + dependencies into a single file
 cache		cache depedencies
 completions	generate shell completions
 doc		show documentation for a module
 eval 		eval script
 fmt 		format source files (like `gofmt` in Go) (run prettier under the hood)
 help		prints this message 
 info 		show info about cache or info related to source file
 install	install scripts as an executable
 repl		read eval print loop (default)
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

- Flags

  `--allow-env` allow environment access
  `--allow-hrtime` allow high resolution time measurement
  `--allow-net=<allow-net>` allow network access
  `--allow-plugin` allow loading plugins
  `allow-read=<allow-read>` allow file system read access
  `--allow-run` allow running subprocesses
  `--allow-write=<allow-write>` allow file system write access
  `--allow-all` allow all permissions (same as `-A`)


## Code Examples

`https://deno.land/std/examples/`

## VSCode Extention

Download Deno from `justjavac`


