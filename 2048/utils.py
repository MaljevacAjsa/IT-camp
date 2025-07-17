import random
# function to print matrix
def print_mat(mat):
    print("\n")
    for row in mat:
        print(row)
# function to add 2 at the every move and at the initializaing of the game
def add_2(mat):
    i = random.randint(0,3)
    j = random.randint(0,3)
    while mat[i][j] != 0:
        i = random.randint(0,3)
        j = random.randint(0,3)
    mat[i][j] = 2
# function to compress the matrix
def compress(mat):
    for i in range(len(mat)):
        pos = 0
        for j in range(len(mat)):
            if mat[i][j] != 0:
                mat[i][pos] = mat[i][j]
                pos+=1
        while pos < len(mat):
                mat[i][pos] = 0
                pos += 1
# function to merge cells
def merge(mat):
    for i in range(4):
        for j in range(3):
            if mat[i][j] == mat[i][j+1] and mat[i][j] != 0:
                mat[i][j]*=2
                mat[i][j+1]=0
# function to transpose the matrix
def transpose(mat):
    for i in range(len(mat)):
        for j in range(i+1,len(mat)):
            temp = mat[i][j]
            mat[i][j] = mat[j][i]
            mat[j][i] = temp
# function to reverse the matrix
def reverse(mat):
    for i in range(len(mat)):
        n = len(mat[i])
        for j in range(n//2):
            temp = mat[i][j]
            mat[i][j] = mat[i][n-1-j]
            mat[i][n-1-j] = temp
# function to move left
def move_left(mat):
    compress(mat)
    merge(mat)
    compress(mat)
# function to move right
def move_right(mat):
    reverse(mat)
    move_left(mat)
    reverse(mat)
# function to move up
def move_up(mat):
    transpose(mat)
    move_left(mat)
    transpose(mat)
# function to move down
def move_down(mat):
    transpose(mat)
    move_right(mat)
    transpose(mat)
# check win
def check_win(mat):
    for row in mat:
        if 2048 in row:
            return True
    return False
# function to check for game over (no empty cells and no adjacent equal cells)
def check_game_over(mat):
    for i in range(4):
        for j in range(4):
            if mat[i][j] == 0:  # Empty cell means game is not over
                return False
            if j < 3 and mat[i][j] == mat[i][j + 1]:  # Horizontal check
                return False
            if i < 3 and mat[i][j] == mat[i + 1][j]:  # Vertical check
                return False
    return True