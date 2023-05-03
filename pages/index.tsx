import Image from 'next/image'
import { Inter } from 'next/font/google'
import Wordcloud from '@/components/wordcloud'

const inter = Inter({ subsets: ['latin'] })

const todayData = {
  "targetDate": "2023-05-01",
  "wordCloudImagePath": "https://qa-all-to-delicious.s3.ap-northeast-2.amazonaws.com/atd/a2dcorp.co.kr/platform-f/trend/word_cloud/word_cloud_20230501.png",
  "totalNames": "유산균,비타민,즙,오메가,맥심,커피,골드,단백질,콜라겐,유기농,정관,프로,타임,홍삼,쿠키,아르기닌,살,캡슐,락토핏,에브리,두유,젤리,양제,김치,닭,가슴,알티,원두,쭈꾸미,양배추",
  "snackNames": "떡,쿠키,젤리,과자,초콜릿,빵,약과,아이스크림,사탕,카네이션,케이크,선물,세트,캔디,간식,오징어,답례,찹쌀떡,초코,어린이날,칩,삼립,떡케이크,쑥,인절미,어버이날,고구마,스,망고,크래커",
  "mealkitNames": "비비고,햇반,밥,누룽지,만두,감자,핫도그,오뚜기,갈비탕,피자,떡볶이,어묵,도시락,샐러드,튀김,메,냉동,치킨,카레,현미,바,풀무원,볶음밥,스프,살,김치,노,닭,탕,잡곡",
  "all": [
      {
          "word": "떡",
          "count": 36
      },
      {
          "word": "비비고",
          "count": 32
      },
      {
          "word": "햇반",
          "count": 28
      },
      {
          "word": "쿠키",
          "count": 25
      },
      {
          "word": "밥",
          "count": 25
      },
      {
          "word": "누룽지",
          "count": 23
      },
      {
          "word": "만두",
          "count": 23
      },
      {
          "word": "감자",
          "count": 23
      },
      {
          "word": "젤리",
          "count": 23
      },
      {
          "word": "핫도그",
          "count": 20
      },
      {
          "word": "과자",
          "count": 19
      },
      {
          "word": "오뚜기",
          "count": 18
      },
      {
          "word": "갈비탕",
          "count": 17
      },
      {
          "word": "떡볶이",
          "count": 16
      },
      {
          "word": "유산균",
          "count": 16
      },
      {
          "word": "초콜릿",
          "count": 16
      },
      {
          "word": "튀김",
          "count": 16
      },
      {
          "word": "피자",
          "count": 16
      },
      {
          "word": "빵",
          "count": 15
      },
      {
          "word": "어묵",
          "count": 15
      },
      {
          "word": "메",
          "count": 15
      },
      {
          "word": "바",
          "count": 15
      },
      {
          "word": "도시락",
          "count": 15
      },
      {
          "word": "약과",
          "count": 15
      },
      {
          "word": "냉동",
          "count": 15
      },
      {
          "word": "현미",
          "count": 15
      },
      {
          "word": "샐러드",
          "count": 14
      },
      {
          "word": "비타민",
          "count": 13
      },
      {
          "word": "치킨",
          "count": 13
      },
      {
          "word": "살",
          "count": 13
      },
      {
          "word": "즙",
          "count": 13
      },
      {
          "word": "김치",
          "count": 12
      },
      {
          "word": "닭",
          "count": 12
      },
      {
          "word": "카레",
          "count": 11
      },
      {
          "word": "커피",
          "count": 11
      },
      {
          "word": "아이스크림",
          "count": 11
      },
      {
          "word": "사탕",
          "count": 11
      },
      {
          "word": "단백질",
          "count": 10
      },
      {
          "word": "스",
          "count": 10
      },
      {
          "word": "가슴",
          "count": 10
      },
      {
          "word": "스프",
          "count": 10
      },
      {
          "word": "카네이션",
          "count": 10
      },
      {
          "word": "풀무원",
          "count": 10
      },
      {
          "word": "오메가",
          "count": 9
      },
      {
          "word": "골드",
          "count": 9
      },
      {
          "word": "치즈",
          "count": 9
      },
      {
          "word": "선물",
          "count": 9
      },
      {
          "word": "세트",
          "count": 9
      },
      {
          "word": "다이어트",
          "count": 9
      },
      {
          "word": "케이크",
          "count": 9
      }
  ],
  "total": [
      {
          "word": "유산균",
          "count": 16
      },
      {
          "word": "비타민",
          "count": 13
      },
      {
          "word": "즙",
          "count": 13
      },
      {
          "word": "오메가",
          "count": 9
      },
      {
          "word": "맥심",
          "count": 9
      },
      {
          "word": "커피",
          "count": 8
      },
      {
          "word": "골드",
          "count": 8
      },
      {
          "word": "단백질",
          "count": 8
      },
      {
          "word": "콜라겐",
          "count": 8
      },
      {
          "word": "유기농",
          "count": 8
      },
      {
          "word": "정관",
          "count": 8
      },
      {
          "word": "프로",
          "count": 7
      },
      {
          "word": "타임",
          "count": 7
      },
      {
          "word": "홍삼",
          "count": 7
      },
      {
          "word": "쿠키",
          "count": 6
      },
      {
          "word": "아르기닌",
          "count": 6
      },
      {
          "word": "살",
          "count": 6
      },
      {
          "word": "캡슐",
          "count": 6
      },
      {
          "word": "락토핏",
          "count": 6
      },
      {
          "word": "에브리",
          "count": 6
      },
      {
          "word": "두유",
          "count": 5
      },
      {
          "word": "젤리",
          "count": 5
      },
      {
          "word": "양제",
          "count": 5
      },
      {
          "word": "김치",
          "count": 5
      },
      {
          "word": "닭",
          "count": 5
      },
      {
          "word": "가슴",
          "count": 5
      },
      {
          "word": "알티",
          "count": 5
      },
      {
          "word": "원두",
          "count": 5
      },
      {
          "word": "쭈꾸미",
          "count": 5
      },
      {
          "word": "양배추",
          "count": 5
      }
  ],
  "snack": [
      {
          "word": "떡",
          "count": 35
      },
      {
          "word": "쿠키",
          "count": 25
      },
      {
          "word": "젤리",
          "count": 21
      },
      {
          "word": "과자",
          "count": 19
      },
      {
          "word": "초콜릿",
          "count": 16
      },
      {
          "word": "빵",
          "count": 15
      },
      {
          "word": "약과",
          "count": 15
      },
      {
          "word": "아이스크림",
          "count": 11
      },
      {
          "word": "사탕",
          "count": 11
      },
      {
          "word": "카네이션",
          "count": 10
      },
      {
          "word": "케이크",
          "count": 9
      },
      {
          "word": "선물",
          "count": 8
      },
      {
          "word": "세트",
          "count": 8
      },
      {
          "word": "캔디",
          "count": 8
      },
      {
          "word": "간식",
          "count": 7
      },
      {
          "word": "오징어",
          "count": 7
      },
      {
          "word": "답례",
          "count": 6
      },
      {
          "word": "찹쌀떡",
          "count": 6
      },
      {
          "word": "초코",
          "count": 6
      },
      {
          "word": "어린이날",
          "count": 6
      },
      {
          "word": "칩",
          "count": 5
      },
      {
          "word": "삼립",
          "count": 5
      },
      {
          "word": "떡케이크",
          "count": 5
      },
      {
          "word": "쑥",
          "count": 5
      },
      {
          "word": "인절미",
          "count": 5
      },
      {
          "word": "어버이날",
          "count": 5
      },
      {
          "word": "고구마",
          "count": 4
      },
      {
          "word": "스",
          "count": 4
      },
      {
          "word": "망고",
          "count": 4
      },
      {
          "word": "크래커",
          "count": 4
      }
  ],
  "mealkit": [
      {
          "word": "비비고",
          "count": 32
      },
      {
          "word": "햇반",
          "count": 28
      },
      {
          "word": "밥",
          "count": 24
      },
      {
          "word": "누룽지",
          "count": 23
      },
      {
          "word": "만두",
          "count": 23
      },
      {
          "word": "감자",
          "count": 19
      },
      {
          "word": "핫도그",
          "count": 19
      },
      {
          "word": "오뚜기",
          "count": 18
      },
      {
          "word": "갈비탕",
          "count": 17
      },
      {
          "word": "피자",
          "count": 16
      },
      {
          "word": "떡볶이",
          "count": 15
      },
      {
          "word": "어묵",
          "count": 15
      },
      {
          "word": "도시락",
          "count": 15
      },
      {
          "word": "샐러드",
          "count": 14
      },
      {
          "word": "튀김",
          "count": 14
      },
      {
          "word": "메",
          "count": 14
      },
      {
          "word": "냉동",
          "count": 14
      },
      {
          "word": "치킨",
          "count": 13
      },
      {
          "word": "카레",
          "count": 11
      },
      {
          "word": "현미",
          "count": 11
      },
      {
          "word": "바",
          "count": 10
      },
      {
          "word": "풀무원",
          "count": 10
      },
      {
          "word": "볶음밥",
          "count": 8
      },
      {
          "word": "스프",
          "count": 8
      },
      {
          "word": "살",
          "count": 7
      },
      {
          "word": "김치",
          "count": 7
      },
      {
          "word": "노",
          "count": 7
      },
      {
          "word": "닭",
          "count": 7
      },
      {
          "word": "탕",
          "count": 6
      },
      {
          "word": "잡곡",
          "count": 6
      }
  ]
}

export default function Home() {
  return (
    <>
        {todayData && <Wordcloud data={todayData.all.map(word => {
            return {
                text: word.word,
                value: word.count
            }
        })} />}
    </>
  )
}
