import asyncio
from pyppeteer import launch
from bs4 import BeautifulSoup
import pandas as pd
import re
import requests

json_list = [];
index = 0;
from pymongo import MongoClient


async def fetch_page_content(url):

    browser = await launch(executablePath=r"C:\Users\hp\AppData\Local\Chromium\Application\chrome.exe")
    # browser = await launch(executablePath=r".\chrome.exe")

    page = await browser.newPage()
    await page.goto(url)
    content = await page.content()
    await browser.close()
    return BeautifulSoup(content, 'html.parser')

def extract_info_from_cards(cards):
    results = []
    for card in cards:


        link_tag = card.find('a', {'class': 'a-link-normal s-no-outline'})
        url = 'https://www.amazon.com' + link_tag['href'] if link_tag else None

        title_tag = card.find('span', {'class':'a-size-base-plus a-color-base a-text-normal'})

        if title_tag:
            title = title_tag.text.strip()
        else:
            title = None

        image_tag = card.find('img', {'class': 's-image'})
        image_url = image_tag['src'] if image_tag else None


        rating_tag = card.find('i', {'class': 'a-icon-star-small'})
        rating = rating_tag.text if rating_tag else None


        review_tag = card.find('span', {'class': 'a-size-base s-underline-text'})

        if review_tag:
            review_text = review_tag.text.strip()

            review_numbers = re.findall(r'\d+', review_text)

            review_count = int(review_numbers[0]) if review_numbers else None
        else:
            review_count = None


        price_tag = card.find('span', {'class': 'a-price-whole'})
        price_fraction = card.find('span', {'class': 'a-price-fraction'})
        if price_tag and price_fraction:
            price = price_tag.text.strip() + '.' + price_fraction.text.strip()
            price = float(price.replace(',', '').replace('..', '.'))  # تحويل السعر إلى float وإزالة الفواصل إن وجدت
        else:
            price = None

        
    

        row = {
            'URL': url,
            'Title': title,
            'Image URL': image_url,
            'Rating': rating,
            'Price': price,
            'Review Count': review_count
             }

             
        json_list.append(row)



    
        results.append({
            'URL': url,
            'Title': title,
            'Image URL': image_url,
            'Rating': rating,
            'Price': price,
            'Review Count': review_count
        })

    return pd.DataFrame(results)




async def process_urls(urls):
    AllProducts = []

    for url in urls:
        soup = await fetch_page_content(url)
        cards = soup.find_all('div', {'class': 's-result-item'})
        df = extract_info_from_cards(cards)
        AllProducts.append(df)

    return pd.concat(AllProducts, ignore_index=True)


def handel_data(df,ocr):
    handelData = df.dropna()

    handelData['Price Category'] = pd.cut(df['Price'],bins=[0,20,40,100,float('inf')],labels=['Low','Medium','High','Premium'])



    sorted_products = handelData.sort_values(by='Review Count', ascending=False)


    data_dict = sorted_products.to_dict("records")
    url = 'http://localhost:6060/AiRe/'
    if(ocr == 'Ai'):
        url = 'http://localhost:6060/searchGift/resData'
    

    response = requests.post(url, json={"data": data_dict,"ocr" : ocr}) 
    
    if response.status_code == 200:
     print('Data sent successfully')
    else:
     print('Failed to send data')



def webScraping(url , ocr):
    urls=[]
    urls.append(url)
    print(urls)
    handel_data(asyncio.get_event_loop().run_until_complete(process_urls(urls)),ocr)


































# import asyncio
# from pyppeteer import launch
# from bs4 import BeautifulSoup
# import pandas as pd
# import re
# import requests
# from pymongo import MongoClient

# json_list = []
# index = 0

# async def fetch_page_content(url):
#     browser = await launch(executablePath=r"C:\Users\hp\AppData\Local\Chromium\Application\chrome.exe")
#     page = await browser.newPage()
#     await page.goto(url)
#     content = await page.content()
#     await browser.close()
#     return BeautifulSoup(content, 'html.parser')

# def extract_info_from_cards(cards):
#     results = []
#     for card in cards:
#         link_tag = card.find('a', {'class': 'a-link-normal s-no-outline'})
#         url = 'https://www.amazon.com' + link_tag['href'] if link_tag else None

#         title_tag = card.find('span', {'class':'a-size-base-plus a-color-base a-text-normal'})
#         title = title_tag.text.strip() if title_tag else None

#         image_tag = card.find('img', {'class': 's-image'})
#         image_url = image_tag['src'] if image_tag else None

#         rating_tag = card.find('i', {'class': 'a-icon-star-small'})
#         rating = rating_tag.text if rating_tag else None

#         review_tag = card.find('span', {'class': 'a-size-base s-underline-text'})
#         review_text = review_tag.text.strip() if review_tag else None
#         review_numbers = re.findall(r'\d+', review_text) if review_text else None
#         review_count = int(review_numbers[0]) if review_numbers else None

#         price_tag = card.find('span', {'class': 'a-price-whole'})
#         price_fraction = card.find('span', {'class': 'a-price-fraction'})
#         if price_tag and price_fraction:
#             price = price_tag.text.strip() + '.' + price_fraction.text.strip()
#             price = float(price.replace(',', '').replace('..', '.'))
#         else:
#             price = None

#         row = {
#             'URL': url,
#             'Title': title,
#             'Image URL': image_url,
#             'Rating': rating,
#             'Price': price,
#             'Review Count': review_count
#         }

#         json_list.append(row)
#         results.append(row)
        
#     return pd.DataFrame(results)

# async def process_urls(urls):
#     all_products = []
#     for url in urls:
#         soup = await fetch_page_content(url)
#         cards = soup.find_all('div', {'class': 's-result-item'})
#         df = extract_info_from_cards(cards)
#         all_products.append(df)
#     return pd.concat(all_products, ignore_index=True)

# def handle_data(df):
#     handled_data = df.dropna()
#     handled_data['Price Category'] = pd.cut(df['Price'], bins=[0, 50, 100, 150, float('inf')], labels=['Low', 'Medium', 'High', 'Premium'])

#     sorted_products = handled_data.sort_values(by='Review Count', ascending=False)

#     # الاتصال بقاعدة البيانات وإدخال البيانات
#     client = MongoClient('mongodb+srv://mohamadAlawnah:mohammad123@giftopia.qduiwvv.mongodb.net/')
#     db = client['Giftopia']
#     collection = db['AiProduct']
    
#     # تحويل DataFrame إلى قائمة من القواميس
#     data_dict = sorted_products.to_dict("records")
    
#     # إدخال البيانات إلى MongoDB
#     collection.insert_many(data_dict)
#     print("Data sent to MongoDB successfully")

# def webScraping(url):
#     urls = [url]
#     df = asyncio.get_event_loop().run_until_complete(process_urls(urls))
#     handle_data(df)

# # استخدام الكود
# webScraping('your_url_here')
