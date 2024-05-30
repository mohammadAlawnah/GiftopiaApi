import sys
from AmazonWepScraping import webScraping
import time


if __name__ == '__main__':
    print('ddcd')
    Urls = sys.argv[1]
    ocr = sys.argv[2]
    print(ocr)
 

    webScraping(Urls,ocr)

