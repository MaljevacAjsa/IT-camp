# Making the 2048 Game using Python - this project is not gonna include GUI
import utils
# making the 4x4 table and setting all values to the zero
mat = [[0 for _ in range(4)] for _ in range(4)]

# making the function start_game() which is gonna run when we run our program
def start_game():
    # first of all, using the random module im gonna set two random value from the matrix to the 2
    for _ in range(2):
        utils.add_2(mat)
    # next thing im gonna do is introduce moving, possible movements (wasd)
    while True:
        if utils.check_win(mat):
            print("YOU WIN!")
            break
        if utils.check_game_over(mat):
            print("YOU LOSE!")
            break
        utils.print_mat(mat)
        move = input("Choose your move (W-up, A-left, S-down, D-right): ").lower()
        if move == 'a':
            utils.move_left(mat)
        elif move == 'w':
            utils.move_up(mat)
        elif move == 's':
            utils.move_down(mat)
        elif move == 'd':
            utils.move_right(mat)
        else:
            print("You entered invalid value.")
            continue
        # adding new 2 after each move
        utils.add_2(mat)
start_game()