
custom = ['ad-player', 'banner', 'ad-banner', 'advertisement', 'advert', 'promo']


def format(x):
    x = x.replace('127.0.0.1 ', '')
    x = x.replace('\n', "")
    return x

def formatExtended(x):
    newArr = []
    for i in x:
        newArr.append('[id*="'+str(i)+'"]')
        newArr.append('[class*="'+str(i)+'"]')

    return newArr


with open("hosts.txt", "r") as f:
    lines = f.readlines()
    lines = lines[14:]

    arr = formatExtended(custom)

    # create a new js file for the altered hosts
    with open("../index.css", "w") as nFile:



        
        
        nFile.write(arr[0])
        for item in arr[1:]:
            nFile.write(', '+ str(item))
        
        style = '{display : none}'

        nFile.write(style)