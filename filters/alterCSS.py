
custom = ['ad-player',"display-ad", 'masthead-ad', 'banner', 'ad-banner', 'advertisement', 'advert']

def format(x):
    newArr = []
    for i in x:
        newArr.append('[id*="'+str(i)+'"]')
        newArr.append('[class*="'+str(i)+'"]')

    return newArr




arr = format(custom)

# create a new js file for the altered hosts
with open("../index.css", "w") as nFile:        
    nFile.write(arr[0])
    for item in arr[1:]:
        nFile.write(', '+ str(item))
    
    style = '{display : none}'

    nFile.write(style)