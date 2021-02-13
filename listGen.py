# This script will create all the filter lists 

import sys
sys.path.append("./filters/listGenerators")

import genAAList as AA
import genGeneralList as GL
import genHostsList as GH

# init lists
def init():
    print("\n*****STARTING*****\n")

    AA.createAAList()
    GL.createGeneralList()
    GH.createHostsList()

    print("\n*****FINISHED*****\n")

init()