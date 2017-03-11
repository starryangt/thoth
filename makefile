OBJS = src/Monads.fs src/Download.fs src/Parse.fs src/Cover.fs src/Epub.fs src/Process.fs src/Arguments.fs
CC = fsc
LINKER = -r NSoup.dll -r System.IO.Compression.FileSystem -r System.IO.Compression.dll
OBJ_NAME = bin/thoth.exe

all:
	$(CC) $(LINKER) $(OBJS) -o $(OBJ_NAME) src/Main.fs

standalone:
	$(CC) --standalone $(LINKER) $(OBJS) -o $(OBJ_NAME) src/Main.fs

lib:
	$(CC) $(LINKER) --standalone /target:library /out:thoth.dll $(OBJS)
