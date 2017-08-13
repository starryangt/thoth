### thoth
Making epubs from web pages.

#### Depedencies
The only dependency is NSoup, which is a port of JSoup to .net. Of course, the .net runtime is required as well.

#### Usage

## Experimental GUI can be found here:
https://github.com/flyingjam/thoth-gui

![Example GUI usage](https://github.com/starrtnow/thoth-gui/raw/master/example.png)

thoth is intended to be used as a command line program, but works as just an executable as well, though some flexibility is lost. There are three main ways to feed in urls:

1. An index file on the internet

  If you input no arguments, or one argument with the -w flag, then the uri will be downloaded and all of the anchor tags on the page will be printed out with their respective index listed next to them. Input a range delimited with a comma (i.e, "4,10") and the urls in that range will downloaded.
  
2. A list of urls delimited by spaces in a local file

  If you input exactly one argument without the -w flag, then the program will attempt to read in the file and download the urls in it, delimited by newlines.

3. Arguments

  If multiple arguments are inputted, then those will be downloaded. 
  
##### Flags

* -a Author — Sets the author
* -t Title— Sets the title
* -c CoverUrl.jpg — Sets the cover
* -w — Downloads the argument as index
* -s — Sets strict mode on. Use if you're getting XML errors in the generated epubs (i.e if the epub doesn't open, try this)

#### FAQ

* Why is it called thoth?

    Something something patron god of scribes something. Also carried me through the midgame of Persona 4. 

* I want to change the default cover picture

    Swap Cover/Cover.png with whatever you want. It has to end with .png, because I'm lazy.

* I want to compile this.

  Okay. It should compile fine in either mono or microsoft's f# compiler. The (basic) makefile I used is even there.
  
* X-thing broke!

  Well, that's not good. Make an issue and I'll try to fix it. Sometimes, though, I won't have time.

* I want X-feature!
  
  Okay. Tell me, I'll try. It is open source, feel free to add it in yourself.
  
* Why is this written in F#?
  
  Because I wanted to learn a ML-derived language

* Does this work on Linux/OSX?

  Actually, it does. I developed it mostly in mono on linux. You do need v4.0 of the mono runtime because ZipFile wasn't implemented till then.
 




