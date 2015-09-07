OBJS = Download.fs Parse.fs Process.fs main.fs
CC = fsharpc
LINKER = -r NSoup.dll
OBJ_NAME = main.exe

all:
	$(CC) $(LINKER) $(OBJS) -o $(OBJ_NAME)
