# format anti-ad block scripts to fit with website scripts

# format line of from file
def formatAA(x):
    # remove new line character
    x = x.replace("\n", "")
    # replace first instance with *
    x = "*"+str(x)
    # add * to the end of . - _ paths
    if x[len(x)-1] == "." or x[len(x)-1] == "-" or x[len(x)-1] == "_":
        x = str(x)+"*"
    # skip if the file ends in .js
    elif x[len(x)-2 : len(x)-0] == "js":
        x = x.replace("", "")
    # if file ends with no symbol then add */
    else:
        x = str(x)+"/*"
    #print(x)
    return x

def createAAList():
    # open the file and format the list then place into filter friendly file
    with open("./filters/lists/anti_ad.txt", "r") as file:
        lines = file.readlines()
        with open("./filters/blockAA.js", "w") as filt:
            filt.write("const anti_ad = {filter: ")
            formated_line = [formatAA(line) for line in lines]
            filt.write(str(formated_line))
            filt.write("};")
            print("Completed -> blockAA.js")