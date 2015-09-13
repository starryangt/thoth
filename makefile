OBJS = src/Monads.fs src/Download.fs src/Parse.fs src/Epub.fs src/Process.fs src/Arguments.fs src/main.fs
CC = fsc
LINKER = -r NSoup.dll -r System.IO.Compression.FileSystem -r System.IO.Compression.dll
OBJ_NAME = bin/main.exe

all:
	$(CC) --standalone $(LINKER) $(OBJS) -o $(OBJ_NAME)
