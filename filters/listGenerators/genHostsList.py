# format the lines of the file so that they are easily read by the chrome api

# format line
def formatHosts(x):
    if x[0] == "#":
        x = x.replace('# ', '*://*.')
        x = x.replace('\n', "*")
    else:
        x = x.replace('127.0.0.1 ', '*://*.')
        x = x.replace('\n', "/*")
    #print(x)
    return x


def createHostsList():
    # open the file and read all the lines excluding the first 14 lines. These lines are for the author or the list
    with open("./filters/lists/hosts.txt", "r") as f:
        lines = f.readlines()
        lines = lines[14:]
        
        # format each line in the file 
        formated_line = [formatHosts(line) for line in lines]
        # create a new js file for the altered hosts
        with open("./filters/blockHosts.js", "w") as nFile:
            nFile.write("const hosts = {hosts:")
            nFile.write(str(formated_line))
            nFile.write("};")
            print("Completed -> blockHosts.js")

