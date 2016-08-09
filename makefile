OBJS = src/Monads.fs src/Download.fs src/Parse.fs src/Cover.fs src/Epub.fs src/Process.fs src/Arguments.fs src/main.fs
CC = fsc
LINKER = -r NSoup.dll -r System.IO.Compression.FileSystem -r System.IO.Compression.dll
OBJ_NAME = bin/thoth.exe

all:
	$(CC) $(LINKER) $(OBJS) -o $(OBJ_NAME)

standalone:
	$(CC) --standalone $(LINKER) $(OBJS) -o $(OBJ_NAME)
