# format the filters from /filter<$jibberish> to */<filter>* or */<filter.js or */<filter>/*
# then placing them in the file called ../general_block.js
# as a json array

# format function returns modified string
def format(x):
    
    # pre parse
    x = x.replace("\n", "")
    mod_x = ""
    
    # parse the filter to get the root filter 
    for i in x:
        if i == "$": 
            break
        else: 
            mod_x += i

    # remove current styling 
    mod_x = mod_x.replace("/*", "")
    mod_x = mod_x.replace("*", "")

    # insert the * at the start of the filter 
    mod_x = "*"+ str(mod_x)

    # add * to the end of . - _ paths
    if  mod_x[len(mod_x)-1] == "." or  mod_x[len(mod_x)-1] == "-" or  mod_x[len(mod_x)-1] == "_":
        mod_x  = str(mod_x)+"*"
    # skip if the file ends in .js
    elif mod_x[len(mod_x)-2 : len(mod_x)-0] == "js":
        mod_x  =  mod_x.replace("", "")
    # if file ends with no symbol then add */
    else:
        mod_x = str(mod_x)+"/*"

    # print and return filter
    print(mod_x)
    return mod_x


# read in filters and write the modified filters to the filter file 
with open("../lists/general.txt", "r") as file:
    lines = file.readlines()
    formated_line = [format(line) for line in lines]
    with open("../generalBlock.js", "w") as filt:
        filt.write("const general = {block: ")
        filt.write(str(formated_line))
        filt.write("};")
        print("\nComplete\n")

