import json

# format the lines of the file so that they are easily read by the chrome api
def format(x):
    x = x.replace('||', '*://*.')
    x = x.replace('^', "/*")
    x = x.replace("\n", "")
    return x


# open the file and read all the lines excluding the first 27 lines. 
with open("hosts.txt", "r") as f:
    lines = f.readlines()
    lines = lines[27:]
    
    # format each line in the file 
    formated_line = [format(line) for line in lines]
    # create a new file for the altered hosts
    with open("alteredHosts.json", "w") as nFile:
        nFile.write(json.dumps(formated_line))

