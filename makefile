OBJS = Monads.fs Download.fs Parse.fs Epub.fs Process.fs main.fs
CC = fsharpc
LINKER = -r NSoup.dll -r System.IO.Compression.FileSystem -r System.IO.Compression.dll
OBJ_NAME = main.exe

all:
	$(CC) $(LINKER) $(OBJS) -o $(OBJ_NAME)
