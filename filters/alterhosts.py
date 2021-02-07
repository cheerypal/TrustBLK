# create a JSON array of hosts that should be blocked.
# format the lines of the file so that they are easily read by the chrome api
import json

# format line
def format(x):
    x = x.replace('127.0.0.1 ', '*://*.')
    x = x.replace('\n', "/*")
    return x


# open the file and read all the lines excluding the first 14 lines. These lines are for the author or the list
with open("hosts.txt", "r") as f:
    lines = f.readlines()
    lines = lines[14:]
    
    # format each line in the file 
    formated_line = [format(line) for line in lines]
    # create a new js file for the altered hosts
    with open("alteredHosts.js", "w") as nFile:
        nFile.write("const hosts = {hosts:")
        nFile.write(str(formated_line))
        nFile.write("};")

